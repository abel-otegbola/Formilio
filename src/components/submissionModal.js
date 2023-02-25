import { closeBlock } from "@/helper/closeBlock";
import { convert } from "@/helper/convertDate";
import { getInitials } from "@/helper/getInitials";
import { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Submission from "./submission";

export default function SubmissionModal({ data, submission, setSuccess, setError, handleMsg }) {
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
                handleMsg(data.error, setError)
            }
            else {
                handleMsg("Deleted successfully", setSuccess)
            }
        })
        .catch(err => {
            handleMsg(err, setError)
        }) 
    }

    return (
        <div ref={modalRef}>
            <div className="flex items-start bg-gray-100 dark:bg-gray-900 border border-transparent border-y-gray-300/[0.2] hover:bg-blue hover:text-white cursor-pointer" onClick={() => setOpenModal(!openModal)}>
                <p className="p-2 px-[10px] border-2 border-white/[0.5] bg-fuchsia-500/[0.2] uppercase text-[12px] font-semibold m-3 shadow-lg rounded-full">{getInitials(data.email || "user")}</p>
                <div className="grid gap-2 md:grid-cols-3 flex-1">
                    <Submission data={data} />
                </div>
                <p className="p-5 text-[10px]">{convert(submission.createdAt)}</p>
                <FaTrashAlt className="text-red-400 m-5 cursor-pointer" onClick={() => handleDelete(submission._id)}/>
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