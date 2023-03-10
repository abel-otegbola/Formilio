'use client'
import { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiBold } from "react-icons/fi";

export default function ButtonBlock({ active, item, handleComponent, handleDelete }) {
    const [show, setShow] = useState(false)
    const buttonRef = useRef(null)

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
            if(show && buttonRef.current && !buttonRef.current.contains(e.target)) {
                setShow(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [show])

    return(
        <div ref={buttonRef} className={`bg-none flex flex-col items-center dark:bg-gray-900 rounded cursor-pointer mb-4 ${(active && show) ? "border border-blue": "border-gray-100/[0.2]"}`}>
            <div className={`flex items-center justify-between dark:bg-gray-900/[0.3] ${show ? "block" : "hidden"}`}>
                <div className="flex items-center">
                    <FiBold className={`p-2 text-3xl ${styles.bold ? "text-blue": ""}`} onClick={() => handleTypo("bold", !styles.bold)} />
                </div>
                <FaTrashAlt className="p-2 text-3xl text-blue mr-2" onClick={() => handleDelete(id)} />
            </div>
            <input 
                onFocus={() => setShow(true)}
                className={`w-fit bg-blue text-white mt-6 mx-auto rounded p-[12px] text-center ${styles.bold ? "font-bold" : ""}`}
                onChange={(e) => handleText(e.target.value)}
                defaultValue={text}
            />
        </div>
    )
}