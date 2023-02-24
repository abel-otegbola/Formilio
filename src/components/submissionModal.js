import { closeBlock } from "@/helper/closeBlock";
import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

export default function SubmissionModal({ data, open, closeModal }) {
    const modalRef = useRef(null)

    useEffect(() => {
        closeBlock(modalRef, open, closeModal)
    }, [open])

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] dark:bg-gray-900[0.5] hover:text-black flex justify-center items-center">
            <div ref={modalRef} className="relative md:w-[75%] w-[90%] bg-white dark:bg-gray-900 shadow-lg p-4 rounded">
            <FaTimes className="absolute top-4 right-4" onClick={() => closeModal(false)}/>
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