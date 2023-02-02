import { Draggable } from "react-beautiful-dnd";

export default function HeadingBlock({ active }) {
    return(
        <div className={`relative text-center border ${active ? "border-blue": "border-gray-100/[0.2]"}`}>
            <h1 className="font-bold text-2xl pt-5 pb-2" contentEditable="true">Heading</h1>
        </div>
    )
}