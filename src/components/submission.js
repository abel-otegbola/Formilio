import { closeBlock } from "@/helper/closeBlock";
import { convert } from "@/helper/convertDate";
import { getInitials } from "@/helper/getInitials";
import { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Submission({ data, submission, setSuccess, setError }) {
    const [openModal, setOpenModal] = useState(false)
    const modalRef = useRef(null)

    useEffect(() => {
        // close the submission display block when clicked outside
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
                // Reload the page when submission has been successfully deleted
                window.location.reload()
            }
        })
        .catch(err => {
            setError(err)
        }) 
    }

    return (
        <div ref={modalRef} className="w-full">
            <div className="flex md:flex-no-wrap flex-wrap items-center justify-between shadow-md my-1 bg-white dark:bg-gray-900 border border-transparent border-y-gray-300/[0.2] hover:bg-blue hover:text-white cursor-pointer" onClick={() => setOpenModal(!openModal)}>

                {/* Get and display the two letters of user email */}
                <p className="px-[10px] border-2 border-white/[0.3] bg-fuchsia-500/[0.1] md:block hidden uppercase text-[12px] font-semibold m-3 shadow-lg rounded-full">{getInitials(data.email || "user")}</p>
                
                {/* list 3 fields in the submissions entry */}
                <div className="grid grid-cols-3 flex-1 items-center overflow-x-auto">
                {
                    Object.keys(data).splice(0, 3).map((key, index) => (
                        <div key={index} className="py-2 px-4 overflow-hidden">
                            <h5 className="text-[12px] opacity-[0.5]">{key}</h5>
                            <p className="pb-2 text-[14px] truncate">{data[key]}</p>
                        </div>
                    ))
                }
                </div>

                {/* date, time of creation and button to delete endpoint */}
                <div className="flex items-center">
                    <p className="pl-2 text-[10px]">{convert(submission.createdAt)}</p>
                    <FaTrashAlt className="text-red-400 p-3 text-4xl cursor-pointer" onClick={() => handleDelete(submission._id)}/>
                </div>
            </div>

            {/* show all fields in the submission entry */}
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