import { closeBlock } from "@/helper/closeBlock";
import { convert } from "@/helper/convertDate";
import { getInitials } from "@/helper/getInitials";
import { useEffect, useRef, useState } from "react";
import { FaEllipsisV, FaInfoCircle, FaTrashAlt } from "react-icons/fa";

export default function Submission({ data, submission, setSuccess, setError }) {
    const [openModal, setOpenModal] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
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
            <div className="flex md:flex-no-wrap flex-wrap items-center justify-between p-1 bg-white dark:bg-gray-900 border border-transparent border-y-gray-300/[0.2] hover:bg-gray-200/[0.3] cursor-pointer">
                
                {/* list 3 fields in the submissions entry */}
                <div className="grid grid-cols-3 flex-1 items-center overflow-x-auto" onClick={() => setOpenModal(!openModal)}>
                {
                    Object.keys(data).splice(0, 3).map((key, index) => (
                        <div key={index} className="py-2 px-4 overflow-hidden">
                            <p className="pb-2 text-[10px] opacity-[0.6]">{key}</p>
                            <p className="pb-2 text-[14px] truncate">{data[key]}</p>
                        </div>
                    ))
                }
                </div>

                {/* date, time of creation and button to delete endpoint */}
                <div className="flex items-center relative">
                    <p className="pl-2 text-[10px]">{convert(submission.createdAt)}</p>
                    <FaEllipsisV className="text-red-400 p-3 text-4xl cursor-pointer" onClick={() => setOpenOptions(!openOptions)}/>
                    <ul className={`absolute bottom-[50px] bg-white dark:bg-gray-800 text-[12px] rounded-lg shadow-xl right-0 ${ openOptions ? "h-[70px]" : "h-0" } overflow-hidden transition-all duration-500`}>
                        <li className="flex items-center rounded px-4 py-2 hover:bg-blue hover:text-white"><FaInfoCircle className="mr-2" />Add to Spam</li>
                        <li className="flex items-center rounded px-4 py-2 text-red-500 hover:bg-blue hover:text-white"><FaTrashAlt className="mr-2" onClick={() => handleDelete(submission._id)}/> Delete</li>
                    </ul>
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