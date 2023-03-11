'use client'
import { useState } from "react";
import { BsTextCenter, BsTextLeft, BsTextRight } from "react-icons/bs";
import { FaCaretDown, FaCaretRight, FaStrikethrough } from "react-icons/fa";
import { FiBold, FiItalic, FiUnderline } from "react-icons/fi";

export default function Typography({ styles, open, setOpen, handleTypo }) {

    return(
        <div className="p-2">
            <h3 className="flex items-center py-3 cursor-pointer" onClick={() => setOpen(3)}>{ open === 3 ? <FaCaretDown className="mr-2" /> : <FaCaretRight className="mr-2" />} Typography</h3>

            <div className={`${open === 3 ? "h-auto" : "h-0"} overflow-hidden transition-all duration-700`}>
                {/* paragraph alignment options */}
                <div className="my-1 grid grid-cols-3 gap-1">
                        <BsTextLeft className={`p-2 w-full rounded-sm border border-gray-200/[0.05] text-4xl ${styles.align === "left" ? "bg-blue text-white": ""}`} onClick={() => handleTypo("align", "left")}/>
                        <BsTextCenter className={`p-2 border rounded-sm w-full border-gray-200/[0.05] text-4xl ${styles.align === "center" ? "bg-blue text-white": ""}`} onClick={() => handleTypo("align", "center")}/>
                        <BsTextRight className={`p-2 border rounded-sm w-full border-gray-200/[0.05] text-4xl ${styles.align === "right" ? "bg-blue text-white": ""}`}  onClick={() => handleTypo("align", "right")}/>
                </div>

                <div className="my-1 grid grid-cols-2 gap-1">
                    {/* paragraph font size options */}
                    <select className="p-2 w-full border rounded-sm border-gray-200/[0.05] text-[10px] bg-white dark:bg-gray-900" onChange={(e) => handleTypo("size", e.target.value)} defaultValue={16}>
                        {
                            Array.from(Array(66).keys()).slice(4, 65).map(item => (
                                <option key={item}>{item}</option>
                            ))
                        }
                    </select>

                    {/* paragraph font weight options */}
                    <select className="p-2  w-full border rounded-sm border-gray-200/[0.05] text-[10px] bg-white dark:bg-gray-900" onChange={(e) => handleTypo("bold", e.target.value)} defaultValue={16}>
                        {
                            ["bold", "semibold", "regular", "thin"].map((item, i) => (
                                <option key={i}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="my-1 grid grid-cols-3 gap-1">
                    <FiItalic className={`p-2 rounded w-full border border-gray-200/[0.05] dark:bg-gray-900 text-4xl ${styles.italic ? "text-blue": ""}`} onClick={() => handleTypo("italic", !styles.italic)} />
                    <FiUnderline className={`p-2 rounded w-full border border-gray-200/[0.05] dark:bg-gray-900 text-4xl ${styles.underline ? "text-blue": ""}`} onClick={() => handleTypo("underline", !styles.underline)} />
                    <FaStrikethrough className={`p-2 rounded w-full border border-gray-200/[0.05] dark:bg-gray-900 text-4xl ${styles.strike ? "text-blue": ""}`} onClick={() => handleTypo("strike", !styles.strike)} />
                </div>
            </div>
            
        </div>
    )
}