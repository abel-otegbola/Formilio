import { Draggable } from "react-beautiful-dnd";

export default function HeadingBlock({ active }) {
    return(
        <div className={`relative text-center border ${active ? "border-blue": "border-gray-400/[0.2]"}`}>
            <h1 className="font-bold text-2xl p-5" contentEditable="true">Heading</h1>
        </div>
    )
}