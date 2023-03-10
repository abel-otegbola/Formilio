'use client'
import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

export default function Size({ styles, handleTypo }) {
    const [open, setOpen] = useState(true)

    return(
        <div className="p-2">
            <h3 className="flex items-center py-3" onClick={() => setOpen(!open)}>{ open ? <FaCaretDown className="mr-2" /> : <FaCaretRight className="mr-2" />} Size</h3>

            <div className={`${open ? "h-auto" : "h-0"} overflow-hidden transition-all duration-700`}>
                {/* paragraph alignment options */}
                <div className="my-1 grid grid-cols-2 gap-1">
                    <div className="flex items-center w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                        <input className="border border-transparent p-2 pr-0 bg-transparent w-[60px] rounded" name="width" type="number" defaultValue={100}/>
                        <p className="px-2 text-[9px] opacity-[0.5]" >WIDTH</p>
                    </div>
                    <div className="flex items-center w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                        <input className="border border-transparent p-2 pr-0 bg-transparent w-[60px] rounded" name="height" type="number" defaultValue={100}/>
                        <p className="px-2 text-[9px] opacity-[0.5]" >HEIGHT</p>
                    </div>
                    <div className="flex items-center w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                        <input className="border border-transparent p-2 pr-0 bg-transparent w-[60px] rounded" name="width" type="number" defaultValue={100}/>
                        <p className="px-2 text-[9px] opacity-[0.5]" >MIN-W</p>
                    </div>
                    <div className="flex items-center w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                        <input className="border border-transparent p-2 pr-0 bg-transparent w-[60px] rounded" name="height" type="number" defaultValue={100}/>
                        <p className="px-2 text-[9px] opacity-[0.5]" >MIN-H</p>
                    </div>
                    <div className="flex items-center w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                        <input className="border border-transparent p-2 pr-0 bg-transparent w-[60px] rounded" name="width" type="number" defaultValue={100}/>
                        <p className="px-2 text-[9px] opacity-[0.5]" >MAX-W</p>
                    </div>
                    <div className="flex items-center w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                        <input className="border border-transparent p-2 pr-0 bg-transparent w-[60px] rounded" name="height" type="number" defaultValue={100}/>
                        <p className="px-2 text-[9px] opacity-[0.5]" >MAX-H</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}