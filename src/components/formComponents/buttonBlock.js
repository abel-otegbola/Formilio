import { BsFillEmojiSmileFill, BsTextCenter, BsTextLeft, BsTextRight } from "react-icons/bs";
import { FaStrikethrough, FaTrashAlt } from "react-icons/fa";
import { FiBold, FiItalic, FiLink, FiUnderline } from "react-icons/fi";

export default function ButtonBlock({ active, item, handleComponent, handleDelete }) {

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

    return(
        <div className={`bg-white dark:bg-gray-900 shadow-lg rounded-xl border cursor-pointer mb-4 ${active ? "border-blue": "border-gray-100/[0.2]"}`}>
            <div className="flex items-center justify-between dark:bg-gray-900/[0.3]">
                <div className="flex items-center">
                    <FiBold className={`p-2 text-3xl ${styles.bold ? "text-blue": ""}`} onClick={() => handleTypo("bold", !styles.bold)} />
                </div>
                <FaTrashAlt className="p-2 text-3xl text-blue mr-2" onClick={() => handleDelete(id)} />
            </div>
                <input 
                    className={`w-full bg-blue text-white rounded-b-xl p-[12px] text-center ${styles.bold ? "font-bold" : ""}`}
                    onChange={(e) => handleText(e.target.value)}
                    defaultValue={text}
                />
        </div>
    )
}