'use client'
import { useState } from "react"
import { FaFolderPlus } from "react-icons/fa"

export default function DropBox() {
    const [drag, setDrag] = useState("notdragged")

    const handleDragOver = (e) => {
        setDrag("dragged")
    }
    const handleDrop = (e) => {
        console.log("dropped")
        setDrag("dropped")
    }

    return (
        <div innerRef={provided.innerRef} className={`p-4 border ${drag === "dragged" ? "border-green-400" : "border-gray-400"}`} onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>
            <div className="flex flex-col items-center justify-center w-full p-[20%] mt-[20px] bg-slate-200 dark:bg-gray-800 rounded text-center">
                <div><FaFolderPlus className="p-3 mb-10 text-5xl bg-gray-600/[0.2] text-blue" />{drag}</div>
                <div>Drag and drop components here</div>
            </div>
        </div>
    )
}