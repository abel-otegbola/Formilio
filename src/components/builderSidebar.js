'use client'

import { useEffect, useRef, useState } from "react"
import { BsFileText, BsImage, BsInputCursorText, BsLayoutSidebarInsetReverse, BsSquareFill, BsTextParagraph } from "react-icons/bs"
import { FaHeading, FaTimes } from "react-icons/fa"
import { TfiLayoutColumn2Alt, TfiLayoutColumn3Alt } from "react-icons/tfi"

export default function BuilderSidebar({ addComponent }) {
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)
    const components = [
        {
            id: 1,
            title: "Input Field",
            icon: <BsInputCursorText />
        },
        {
            id: 2,
            title: "Text Area",
            icon: <BsFileText />
        },
        {
            id: 3,
            title: "Heading",
            icon: <FaHeading />
        },
        {
            id: 4,
            title: "Text",
            icon: <BsTextParagraph />
        },
        {
            id: 5,
            title: "Button",
            icon: <BsSquareFill />
        },
        {
            id: 6,
            title: "Image",
            icon: <BsImage />
        }
    ]
    const layouts = [< TfiLayoutColumn2Alt className="w-[60%] h-[40%]"/>, <TfiLayoutColumn3Alt className="w-[60%] h-[40%]"/>]

    // Close sidebar when clicked outside
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if(open && menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [open])

    return(
        <>
        {/* Button to close and open builder sidebar */}
        <div className="absolute top-[70px] right-2 text-gray-500 font-bold text-2xl p-4 border border-gray-100/[0.2] lg:hidden block z-50" onClick={() => setOpen(!open)} title="Layouts and components">
                    {
                        open ? <FaTimes /> : <BsLayoutSidebarInsetReverse />
                    }
        </div>

        {/* Builder side bar  */}
        <div ref={menuRef} className={`lg:relative absolute lg:pt-0 pt-[115px] top-0 lg:right-0 right-2 h-full w-[250px] bg-slate-50 dark:bg-gray-900 text-gray-500 dark:text-gray-300 transition-all duration-700 overflow-hidden ${open ? "w-[250px]" : "lg:w-[250px] w-0"}`}>
           
            <h4 className="m-2 p-2 font-semibold">Components</h4>

            <div className="m-2 my-5 mb-16">
                {
                    components.map((item) => {
                        return (
                            <div key={item.id} onClick={() => addComponent(item.title)}  draggable="true" className="flex items-center p-2 py-4 my-2 border border-gray-100/[0.1] shadow-lg bg-white dark:bg-gray-800 hover:bg-blue hover:text-white cursor-pointer rounded">
                                <span className="text-hoverblue">{item.icon}</span>
                                <p className="ml-2 text-sm">{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            
            <h4 className="m-2 p-2 font-semibold">Layouts</h4>

            <div className="grid grid-cols-2 gap-2 m-2 my-5">
                {
                    layouts.map((item,i) => {
                        return (
                            <p key={i} onDrag={(e) => e.dataTransfer.setData("Text", item)} className="flex items-center justify-center py-2 border border-gray-100/[0.1] shadow-lg bg-white dark:bg-gray-800 hover:bg-blue hover:text-white cursor-pointer rounded" draggable="true">{item}</p>
                        )
                    })
                }
            </div>
            
        </div>
        </>
    )
}