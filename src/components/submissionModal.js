import { closeBlock } from "@/helper/closeBlock";
import { convert } from "@/helper/convertDate";
import { getInitials } from "@/helper/getInitials";
import { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Submission from "./submission";

export default function SubmissionModal({ data, submission, setSuccess, setError }) {
    const [openModal, setOpenModal] = useState(false)
    const modalRef = useRef(null)

    useEffect(() => {
        closeBlock(modalRef, openModal, setOpenModal)
    }, [openModal])
        
    const handleDelete = async (id) => {
        await fetch(`/api/deleteSubmission/${id}`)
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setError(data.error)
            }
            else {
                setSuccess("Deleted successfully")
                window.location.reload()
            }
        })
        .catch(err => {
            setError(err)
        }) 
    }

    return (
        <div ref={modalRef} className="w-full">
            <div className="flex md:flex-no-wrap flex-wrap items-center justify-between bg-gray-100 dark:bg-gray-900 border border-transparent border-y-gray-300/[0.2] hover:bg-blue hover:text-white cursor-pointer" onClick={() => setOpenModal(!openModal)}>
                <p className="px-[10px] border-2 border-white/[0.3] bg-fuchsia-500/[0.1] md:block hidden uppercase text-[12px] font-semibold m-3 shadow-lg rounded-full">{getInitials(data.email || "user")}</p>
                <div className="grid grid-cols-3 flex-1 items-center overflow-x-auto">
                    <Submission data={data} />
                </div>
                <div className="flex items-center">
                    <p className="pl-2 text-[10px]">{convert(submission.createdAt)}</p>
                    <FaTrashAlt className="text-red-400 mx-5 cursor-pointer" onClick={() => handleDelete(submission._id)}/>
                </div>
            </div>

            <div className={`relative w-full overflow-hidden px-4 transition-all duration-500 ${openModal ? "" : "h-0"}`}>
                    {
                       Object.keys(data).map((key, index) => (
                            <div key={index} className="py-2 w-full">
                                <h5 className="opacity-[0.5]">{key}</h5>
                                <p className="pb-2">{data[key]}</p>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}