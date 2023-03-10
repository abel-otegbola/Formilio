'use client'
import { useState } from "react";
import { FaCaretDown, FaCaretRight, FaEyeSlash } from "react-icons/fa";
import { TfiLayoutAccordionSeparated, TfiLayoutColumn2, TfiLayoutGrid2 } from "react-icons/tfi";

export default function Layout({ styles, handleTypo }) {
    const [open, setOpen] = useState(true)

    return(
        <div className="p-2">
            <h3 className="flex items-center py-3" onClick={() => setOpen(!open)}>{ open ? <FaCaretDown className="mr-2" /> : <FaCaretRight className="mr-2" />} Layout</h3>

            <div className={`${open ? "h-auto" : "h-0"} overflow-hidden transition-all duration-700`}>
                {/* paragraph alignment options */}
                <div className="my-1 grid grid-cols-4 gap-1">
                        <TfiLayoutAccordionSeparated className={`p-2 w-full rounded-sm border border-gray-200/[0.05] text-4xl ${styles.align === "left" ? "bg-blue text-white": ""}`} onClick={() => handleTypo("align", "left")}/>
                        <TfiLayoutColumn2 className={`p-2 border rounded-sm w-full border-gray-200/[0.05] text-4xl ${styles.align === "center" ? "bg-blue text-white": ""}`} onClick={() => handleTypo("align", "center")}/>
                        <TfiLayoutGrid2 className={`p-2 border rounded-sm w-full border-gray-200/[0.05] text-4xl ${styles.align === "right" ? "bg-blue text-white": ""}`}  onClick={() => handleTypo("align", "right")}/>
                        <FaEyeSlash className={`p-2 border rounded-sm w-full border-gray-200/[0.05] text-4xl ${styles.align === "right" ? "bg-blue text-white": ""}`}  onClick={() => handleTypo("align", "right")}/>
                </div>
            </div>
            
        </div>
    )
}