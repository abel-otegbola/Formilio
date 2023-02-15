import { useEffect, useRef, useState } from "react";
import { BsFillEmojiSmileFill, BsTextCenter, BsTextLeft, BsTextRight } from "react-icons/bs";
import { FaStrikethrough, FaTrashAlt } from "react-icons/fa";
import { FiBold, FiItalic, FiLink, FiUnderline } from "react-icons/fi";

export default function ParaBlock({ active, item, handleComponent, handleDelete }) {
    const [show, setShow] = useState(false)
    const paraRef = useRef(null)

    const { text, id, styles } = item
   
    // Change the typography [bold, italic, underline], alignment and size of the element
    const handleTypo = (index, value) => {
        handleComponent.setComponents(
            handleComponent.components.map(item => {
                if(item.id === id) {
                    item.styles[index] = value
                }
                return item
            })
        )
    }

    // Change the text
    const handleText = (value) => {
        handleComponent.setComponents(
            handleComponent.components.map(item => {
                if(item.id === id) {
                    item.text = value
                }
                return item
            })
        )
    }

    // Close edit when clicked outside
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if(show && paraRef.current && !paraRef.current.contains(e.target)) {
                setShow(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [show])

    return(
        <div ref={paraRef} className={`bg-none dark:bg-gray-900 roundedcursor-pointer ${(active && show) ? " border border-blue": ""}`}>
            {/* paragragh block options */}
            <div className={`flex items-center justify-between dark:bg-gray-900/[0.3] ${show ? "block" : "hidden"}`}>
                <div className="flex items-center">

                    {/* paragraph alignment options */}
                    <div className="flex">
                        <BsTextLeft className={`p-2 rounded-tl-lg border border-gray-200/[0.2] text-4xl ${styles.align === "left" ? "bg-blue text-white": ""}`} onClick={() => handleTypo("align", "left")}/>
                        <BsTextCenter className={`p-2 border border-gray-200/[0.2] text-4xl ${styles.align === "center" ? "bg-blue text-white": ""}`} onClick={() => handleTypo("align", "center")}/>
                        <BsTextRight className={`p-2 border border-gray-200/[0.2] text-4xl ${styles.align === "right" ? "bg-blue text-white": ""}`}  onClick={() => handleTypo("align", "right")}/>
                    </div>

                    {/* paragraph font size options */}
                    <select className="p-1 m-1 rounded text-[10px] bg-white dark:bg-gray-900" onChange={(e) => handleTypo("size", e.target.value)} defaultValue={16}>
                        {
                            Array.from(Array(66).keys()).slice(4, 65).map(item => (
                                <option key={item}>{item}</option>
                            ))
                        }
                    </select>

                    {/* paragraph typography options */}
                    <FiBold className={`p-2 text-3xl ${styles.bold ? "text-blue": ""}`} onClick={() => handleTypo("bold", !styles.bold)} />
                    <FiItalic className={`p-2 text-3xl ${styles.italic ? "text-blue": ""}`} onClick={() => handleTypo("italic", !styles.italic)} />
                    <FiUnderline className={`p-2 text-3xl ${styles.underline ? "text-blue": ""}`} onClick={() => handleTypo("underline", !styles.underline)} />
                    <FiLink className={`p-2 text-3xl ${styles.link ? "text-blue": ""}`} onClick={() => handleTypo("link", !styles.link)} />
                    <FaStrikethrough className={`p-2 text-3xl ${styles.strike ? "text-blue": ""}`} onClick={() => handleTypo("strike", !styles.strike)} />
                </div>

                {/* icon to delete paragraph block */}
                <FaTrashAlt className="p-2 text-3xl text-blue mr-2" onClick={() => handleDelete(id)} />
            </div>

                {/* paragraph block display */}
                <input 
                    onFocus={() => setShow(true)}
                    className={`w-full rounded p-2 ${styles.bold ? "font-bold" : ""} ${styles.italic ? "italic" : ""} ${styles.underline ? "underline" : ""} ${styles.strike ? "line-through" : ""}`}
                    style={{ fontSize: styles.size, textAlign: styles.align }}
                    contentEditable="true"
                    onChange={(e) => handleText(e.target.value)}
                    defaultValue={text}
                />
        </div>
    )
}