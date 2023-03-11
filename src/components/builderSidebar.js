'use client'

import { closeBlock } from "@/helper/closeBlock"
import { useEffect, useRef, useState } from "react"
import { BsFileText, BsImage, BsInputCursorText, BsLayoutSidebarInsetReverse, BsSquareFill, BsTextParagraph } from "react-icons/bs"
import { FaHeading, FaTimes } from "react-icons/fa"
import { TfiLayout, TfiLayoutColumn2Alt, TfiLayoutColumn3Alt } from "react-icons/tfi"
import ComponentStyles from "./formComponents/componentStyles"

export default function BuilderSidebar({ addComponent, item, handleComponent }) {
    const [active, setActive] = useState("Components")
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)
    const components = [
        {
            id: 1,
            title: "Section",
            icon: <TfiLayout />
        },
        {
            id: 2,
            title: "Heading",
            icon: <FaHeading />
        },
        {
            id: 3,
            title: "Text",
            icon: <BsTextParagraph />
        },
        {
            id: 4,
            title: "Input Field",
            icon: <BsInputCursorText />
        },
        {
            id: 5,
            title: "Text Area",
            icon: <BsFileText />
        },
        {
            id: 6,
            title: "Button",
            icon: <BsSquareFill />
        },
        {
            id: 7,
            title: "Image",
            icon: <BsImage />
        }
    ]
    // const layouts = [< TfiLayoutColumn2Alt className="w-[60%] h-[40%]"/>, <TfiLayoutColumn3Alt className="w-[60%] h-[40%]"/>]

    // Close sidebar when clicked outside
    useEffect(() => {
        closeBlock(menuRef, open, setOpen)
    }, [open])

    return(
        <>
        {/* Button to close and open builder sidebar */}
        <div className="absolute bottom-[10px] right-6 text-gray-600 font-bold text-sm p-4 bg-gray-100/[0.3] shadow-xl dark:bg-gray-800 lg:hidden block z-50" onClick={() => setOpen(!open)} title="Layouts and components">
                    {
                        open ? <FaTimes /> : "Components"
                    }
        </div>

        {/* Builder side bar  */}
        <div ref={menuRef} className={`lg:relative absolute lg:pt-0 md:pt-0 pt-[115px] top-0 lg:right-0 right-2 h-full w-[250px] bg-slate-50 dark:bg-gray-900 text-gray-500 dark:text-gray-300 transition-all duration-700 ${open ? "w-[250px]" : "lg:w-[250px] w-0"}`}>
            <div className="grid grid-cols-2 gap-2 p-2 rounded bg-gray-100 dark:bg-gray-900">
                {
                    ["Components", "Styles"].map((item, i) => (
                        <p 
                            key={i} 
                            className={`p-3 px-6 rounded border text-sm text-center hover:bg-white hover:dark:bg-gray-900 hover:border-blue hover:text-blue text-center cursor-pointer border  ${active === item ? "border-blue text-blue shadow-lg bg-white dark:bg-gray-900 dark:shadow-3xl" : "border-transparent"}`}
                            onClick={() => setActive(item)}
                        >{item}</p>
                    ))
                }
            </div>
            {
                active === "Components" ? 
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
                </div> :
                <ComponentStyles active={active} handleComponents={handleComponent} item={item} />
            }
            
            {/* <h4 className="m-2 p-2 font-semibold">Layouts</h4> */}
{/* 
            <div className="grid grid-cols-2 gap-2 m-2 my-5">
                {
                    layouts.map((item,i) => {
                        return (
                            <p key={i} onDrag={(e) => e.dataTransfer.setData("Text", item)} className="flex items-center justify-center py-2 border border-gray-100/[0.1] shadow-lg bg-white dark:bg-gray-800 hover:bg-blue hover:text-white cursor-pointer rounded" draggable="true">{item}</p>
                        )
                    })
                }
            </div> */}
            
        </div>
        </>
    )
}