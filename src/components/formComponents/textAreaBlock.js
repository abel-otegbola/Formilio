'use client'
import { useState } from "react";
import { FaPlusSquare, FaTextHeight, FaTimes, FaTrashAlt } from "react-icons/fa";

export default function TextAreaBlock({ active }) {
    const [edit, setEdit] = useState(false)
    const [placeholder, setPlaceholder] = useState("")
    const [id, setId] = useState("")
    const [label, setLabel] = useState("")
    const [name, setName] = useState("")
    const [actions, setActions] = useState(false)

    return (
        <div className={`relative border ${active ? "border-blue": "border-gray-100/[0.2]"}`}>
            <label>{label}</label>
            <div className={`flex items-center bg-white dark:bg-gray-900 w-full overflow-hidden`} onFocus={() => setActions(true)} onMouseOut={() => setActions(false)} onMouseOver={() => setActions(true)}>
                <textarea className="p-2 border flex-1 border-gray-400/[0.2] dark:bg-gray-900 focus:outline focus:outline-blue"  name={name} placeholder={placeholder} id={id}></textarea>
                <div className={`flex items-center ${actions ? "w-[70px]" : "w-0"}`}>
                    <span className="p-2 cursor-pointer" onClick={() => setEdit(!edit)}>Edit</span>
                    <FaTrashAlt className="text-3xl p-2 text-orange-400" onClick={() => setEdit(!edit)} />
                </div>
            </div>
            <div className={`absolute top-[40px] left-0 rounded border-2 bg-white dark:bg-gray-900 z-50 ${!edit ? "hidden": ""}`}>
                <div className="flex justify-between items-center p-3 border border-gray-300/[0.3]">
                    <div className="flex items-center">
                        <h4 className="font-semibold text-blue flex items-center"><FaTextHeight className="p-2 mr-2 rounded bg-gray-300/[0.3] text-3xl"/> TEXTAREA</h4>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <span className="py-[5px] px-3 rounded text-sm bg-blue hover:bg-hoverblue text-white flex items-center mr-4">Add <FaPlusSquare className="ml-2"/></span>
                        <FaTimes className="" onClick={() => setEdit(false)}/>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-2 m-2">
                    <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="Id..." onChange={(e) => setId(e.target.value)} />
                    <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="Label..." onChange={(e) => setLabel(e.target.value)} />
                    <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="Placeholder..." onChange={(e) => setPlaceholder(e.target.value)} />
                    <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="name..." onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
        </div>
    )
}