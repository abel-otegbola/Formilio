'use client'
import { useEffect, useRef, useState } from "react";
import { FaTextHeight, FaTimes, FaTrashAlt } from "react-icons/fa";

export default function TextAreaBlock({ active, handleComponent, handleDelete, item }) {
    const [edit, setEdit] = useState(false)
    const [show, setShow] = useState(false)
    const inputRef = useRef(null)

    const { id, options, settings } = item

    // Change the Options of the input element
    const handleOptions = (index, value) => {
        handleComponent.setComponents(
            handleComponent.components.map(item => {
                if(item.id === id) {
                    item.options[index] = value
                }
                return item
            })
        )
    }

    // Change the settings of the input element
    const handleSettings = (index, value) => {
        handleComponent.setComponents(
            handleComponent.components.map(item => {
                if(item.id === id) {
                    item.settings[index] = value
                }
                return item
            })
        )
    }

    // Close edit when clicked outside
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if(show && inputRef.current && !inputRef.current.contains(e.target)) {
                setShow(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [show])

    return (
        <div ref={inputRef} className={`bg-none dark:bg-gray-900 rounded cursor-pointer mb-4 relative ${(active && show) ? "border border-blue": ""}`}>
            <div className={`flex items-center justify-between px-2 py-1 ${show ? "block" : "hidden"}`}>
                <h4 className="font-semibold text-blue flex items-center"><FaTextHeight className="p-2 mr-2 rounded bg-gray-300/[0.3] dark:bg-gray-800 text-3xl"/> Textarea</h4>
                <div className="flex items-center">

                    {/* button to open input options modal */}
                    <span className="p-2 text-[10px] px-3 bg-blue hover:bg-hoverblue text-white rounded cursor-pointer mr-3" onClick={() => setEdit(!edit)}>Options</span>

                    {/* icon to delete input block */}
                    <FaTrashAlt className="text-3xl p-2 text-blue" onClick={() => handleDelete(id)} />
                </div>
                    
                {/* input options modal */}
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

                        {/* input settings section */}
                        <h4>Settings:</h4>
                        <div className="flex items-center gap-4 text-[10px] mt-3">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" checked={settings.required} onChange={(e) => handleSettings("required", !settings.required)}/>
                                Required
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" checked={settings.disabled} onChange={(e) => handleSettings("disabled", !settings.disabled)}/>
                                Disabled
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" checked={settings.hidden} onChange={(e) => handleSettings("hidden", !settings.hidden)}/>
                                Hidden
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* input block display */}
            <div className={` w-full rounded overflow-hidden`}>
                {(options.type === "checkbox" || options.type === "radio") ? "" : <label htmlFor={options.id}>{options.label}{settings.required ? <sup className="text-red-500 ml-2">*</sup> : ""}</label>}
                <textarea className={`focus:outline focus:outline-blue`}
                    name={options.name} 
                    placeholder={options.placeholder} 
                    id={options.id}
                    required={settings.required}
                    disabled={settings.disabled}
                    onFocus={() => setShow(true)}
                    style={{ backgroundColor: "#fff", color: "#000", padding: "12px", marginRight: "5px", border: "1px solid #777", borderRadius: "5px", width: (options.type === "checkbox" || options.type === "radio") ? "15px" : "100%" }}
                ></textarea>
            </div>
        </div>
    )
}