'use client'
import { useState } from "react";
import { FaTextHeight, FaTimes, FaTrashAlt } from "react-icons/fa";

export default function TextAreaBlock({ active, handleComponent, item }) {
    const [edit, setEdit] = useState(false)

    const { id, title, styles, options, settings } = item

    const handleOptions = (key, value) => {
        handleComponent.setComponents([
            ...handleComponent.components,
            handleComponent.components.filter(item => item.id === id)[0].options[key] = value
        ]) 
    }
    const handleSettings = (key) => {
        handleComponent.setComponents([
            ...handleComponent.components,
            handleComponent.components.filter(item => item.id === id)[0].settings[key] = !settings[key]
        ]) 
    }

    return (
        <div className={`bg-white dark:bg-gray-900 rounded-xl border shadow-lg cursor-pointer mb-4 relative border ${active ? "border-blue": "border-gray-100/[0.2]"}`}>
            <div className="flex items-center justify-between px-2 py-1">
                <h4 className="font-semibold text-blue flex items-center"><FaTextHeight className="p-2 mr-2 rounded bg-gray-300/[0.3] dark:bg-gray-800 text-3xl"/> Textarea</h4>
                <div className="flex items-center">
                    <span className="p-2 text-[10px] px-3 bg-blue hover:bg-hoverblue text-white rounded cursor-pointer mr-3" onClick={() => setEdit(!edit)}>Options</span>
                    <FaTrashAlt className="text-3xl p-2 text-blue" onClick={() => setEdit(!edit)} />
                </div>
            </div>
            <div className={`bg-gray-100 dark:bg-gray-900 w-full rounded-b-xl overflow-hidden p-2 pt-3`}>
                <label className="">{options.label}{settings.required ? <sup className="text-red-500 ml-2">*</sup> : ""}</label>
                <textarea className={`p-2 mt-2 border dark:bg-gray-900 w-full border-gray-400/[0.2] focus:outline focus:outline-blue`}
                    name={options.name} 
                    placeholder={options.placeholder} 
                    id={options.id}
                    required={settings.required}
                    disabled={settings.disabled}
                ></textarea>
            </div>
            <div className={`absolute top-[40px] right-0 rounded border border-gray-300/[0.3] bg-white dark:bg-gray-900 z-50 ${!edit ? "hidden": ""}`}>
                <div className="flex justify-end items-center p-4 bg-gray-300/[0.2]">
                    <div className="flex items-center cursor-pointer">
                        <FaTimes className="" onClick={() => setEdit(false)}/>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 m-4">
                    <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="Id..." onChange={(e) => handleOptions("id", e.target.value)} />
                    <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="Label..." onChange={(e) => handleOptions("label", e.target.value)} />
                    <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="Placeholder..." onChange={(e) => handleOptions("placeholder", e.target.value)} />
                    <input className="p-2 border dark:bg-gray-900 border-gray-400/[0.2] focus:outline focus:outline-blue" placeholder="name..." onChange={(e) => handleOptions("name", e.target.value)} />
                </div>
                <div className="p-4">
                    <h4>Settings:</h4>
                    <div className="flex items-center gap-4 text-[10px] mt-3">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" checked={settings.required} onChange={(e) => handleSettings("required")}/>
                            Required
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" checked={settings.disabled} onChange={(e) => handleSettings("disabled")}/>
                            Disabled
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}