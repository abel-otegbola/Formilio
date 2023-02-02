'use client'

import { useState } from "react"
import { BsLayoutSidebarInsetReverse } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"

export default function BuilderSidebar() {
    const [open, setOpen] = useState(false)
    const components = ["Heading", "Paragraph", "Input", "Textarea", "Label", 'Group']
    const layouts = ["Inline", "Block"]

    return(
        <>
        <div className="absolute top-[70px] right-2 text-gray-500 font-bold text-2xl p-4 border border-gray-100/[0.2] lg:hidden block z-50" onClick={() => setOpen(!open)} title="Layouts and components">
                    {
                        open ? <FaTimes /> : <BsLayoutSidebarInsetReverse />
                    }
        </div>
        <div className={`lg:relative absolute lg:pt-0 pt-[115px] top-0 right-2 h-full w-[250px] lg:mt-[20px] bg-slate-100 dark:bg-gray-900 text-gray-500 dark:text-gray-300 transition-all duration-700 overflow-hidden ${open ? "w-[250px]" : "lg:w-[250px] w-0"}`}>
            <h4 className="m-2 p-2 border-2 border-gray-50/[0.1] border-b-blue">LAYOUTS</h4>

            <div className="grid grid-cols-2 gap-2 m-2 my-5">
                {
                    layouts.map((item,i) => {
                        return (
                            <p key={i} onDrag={(e) => e.dataTransfer.setData("Text", item)} className="text-center p-3 py-7 border border-gray-100/[0.1] shadow-lg bg-white dark:bg-gray-800 hover:bg-blue hover:text-white cursor-pointer rounded" draggable="true">{item}</p>
                        )
                    })
                }
            </div>
            
            <h4 className="m-2 p-2 border-2 border-gray-50/[0.1] border-b-blue">COMPONENTS</h4>

            <div className="grid grid-cols-2 gap-2 m-2 my-5">
                {
                    components.map((item,i) => {
                        return (
                            <p key={i} onDrag={(e) => e.dataTransfer.setData("Text", item)} className="text-center p-3 py-7 border border-gray-100/[0.1] shadow-lg bg-white dark:bg-gray-800 hover:bg-blue hover:text-white cursor-pointer rounded" draggable="true">{item}</p>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}