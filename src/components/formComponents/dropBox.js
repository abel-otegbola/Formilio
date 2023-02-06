'use client'
import { FaFolderPlus } from "react-icons/fa"

export default function DropBox() {

    return (
        <div className="py-2 pr-2">
            <div className="flex flex-col items-center justify-center w-full p-[20%] mt-[20px] bg-slate-200 dark:bg-gray-800 rounded text-center">
                <div><FaFolderPlus className="p-3 mb-10 text-5xl bg-gray-600/[0.2] text-blue" /></div>
                <div>Click a component to add here</div>
            </div>
        </div>
    )
}