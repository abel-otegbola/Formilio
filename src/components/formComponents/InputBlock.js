'use client'
import { useState } from "react";
import { FaEdit, FaPlusSquare, FaTextHeight, FaTimes, FaTrashAlt } from "react-icons/fa";

export default function InputBlock({ active }) {
    const [edit, setEdit] = useState(false)

    return (
        <div className={`relative border ${active ? "border-blue": "border-gray-400/[0.2]"}`}>
            <div className="flex items-center bg-white">
                <input className="p-2 border border-gray-400/[0.2] focus:outline focus:outline-blue"/>
                <FaEdit className="text-3xl p-2" onClick={() => setEdit(!edit)} />
                <FaTrashAlt className="text-3xl p-2 text-orange-400" onClick={() => setEdit(!edit)} />
            </div>
            <div className={`absolute top-[10%] left-0 rounded border-2 bg-white dark:bg-gray-900 z-50 ${!edit ? "hidden": ""}`}>
                <div className="flex justify-between items-center p-3 border border-gray-300/[0.3]">
                    <div className="flex items-center">
                        <h4 className="font-semibold text-blue flex items-center"><FaTextHeight className="p-2 mr-2 rounded bg-gray-300/[0.3] text-3xl"/> INPUT</h4>
                        <select className="ml-5 p-2 border border-gray-500/[0.2] rounded focus:outline focus:outline-blue" placeholder="Choose type">
                            <option>Text</option>
                            <option>Email</option>
                            <option>Password</option>
                            <option>Date</option>
                            <option>Time</option>
                            <option>Telephone</option>
                        </select>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <span className="py-[5px] px-3 rounded text-sm bg-blue hover:bg-hoverblue text-white flex items-center mr-4">Add <FaPlusSquare className="ml-2"/></span>
                        <FaTimes className="" onClick={() => setEdit(false)}/>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-2 m-2">
                    <input className="p-2 border border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="Label..." />
                    <input className="p-2 border border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="Placeholder..." />
                    <input className="p-2 border border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="name..." />
                </div>
            </div>
        </div>
    )
}