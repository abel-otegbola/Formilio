'use client'
import { useState } from "react";
import { FaPlusSquare, FaTextHeight, FaTimes, FaTrashAlt } from "react-icons/fa";

export default function InputBlock({ active }) {
    const [edit, setEdit] = useState(false)
    const [type, setType] = useState("text")
    const [actions, setActions] = useState(false)

    return (
        <div className={`relative w-fit border ${active ? "border-blue": "border-gray-400/[0.2]"}`}>
            <div className={`flex items-center bg-white dark:bg-gray-900 w-fit overflow-hidden`} onFocus={() => setActions(true)} onMouseOut={() => setActions(false)} onMouseOver={() => setActions(true)}>
                <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" type={type}/>
                <div className={`flex items-center dark:bg-gray-800 ${actions ? "w-[70px]" : "w-0"}`}>
                    <span className="p-2 cursor-pointer" onClick={() => setEdit(!edit)}>Edit</span>
                    <FaTrashAlt className="text-3xl p-2 text-orange-400" onClick={() => setEdit(!edit)} />
                </div>
            </div>
            <div className={`absolute top-[40px] left-0 rounded border-2 bg-white dark:bg-gray-900 z-50 ${!edit ? "hidden": ""}`}>
                <div className="flex justify-between items-center p-3 border border-gray-300/[0.3]">
                    <div className="flex items-center">
                        <h4 className="font-semibold text-blue flex items-center"><FaTextHeight className="p-2 mr-2 rounded bg-gray-300/[0.3] dark:bg-gray-800 text-3xl"/> INPUT</h4>
                        <select className="mx-5  p-[4px] border border-gray-500/[0.2] dark:bg-gray-900 rounded focus:outline focus:outline-blue" onChange={(e) => setType(e.target.value)}>
                            <option>text</option>
                            <option>email</option>
                            <option>password</option>
                            <option>date</option>
                            <option>time</option>
                            <option>radio</option>
                            <option>checkbox</option>
                            <option>file</option>
                        </select>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <FaTimes className="" onClick={() => setEdit(false)}/>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-2 m-2">
                    <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="Id..." />
                    <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="Placeholder..." />
                    <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="name..." />
                </div>
            </div>
        </div>
    )
}