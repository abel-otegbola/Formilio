import { BsFillEmojiSmileFill, BsTextCenter, BsTextLeft, BsTextRight } from "react-icons/bs";
import { FaStrikethrough, FaTrashAlt } from "react-icons/fa";
import { FiBold, FiItalic, FiLink, FiUnderline } from "react-icons/fi";

export default function ParaBlock({ active, item, handleComponent }) {

    const { text, id, styles } = item

    const handleStyle = (element) => {
        handleComponent.setComponents([
            ...handleComponent.components,
            handleComponent.components.filter(item => item.id === id)[0].styles[element] = !styles[element]
        ]) 
    }
    const handleAlign = (element) => {
        handleComponent.setComponents([
            ...handleComponent.components,
            handleComponent.components.filter(item => item.id === id)[0].styles["align"] = element
        ]) 
    }
    const handleSize = (value) => {
        handleComponent.setComponents([
            ...handleComponent.components,
            handleComponent.components.filter(item => item.id === id)[0].styles["size"] = value
        ]) 
    }

    const handleText = (value) => {
        handleComponent.setComponents([
            ...handleComponent.components,
            handleComponent.components.filter(item => item.id === id)[0].text = value
        ]) 
    }

    return(
        <div className={`bg-white dark:bg-gray-900 shadow-lg rounded-xl border ${active ? "border-blue": "border-gray-100/[0.2]"}`}>
            <div className="flex items-center justify-between dark:bg-gray-900/[0.3]">
                <div className="flex items-center">
                    <div className="flex">
                        <BsTextLeft className={`p-2 rounded-tl-lg border border-gray-200/[0.2] text-4xl ${styles.align === "left" ? "bg-blue text-white": ""}`} onClick={() => handleAlign("left")}/>
                        <BsTextCenter className={`p-2 border border-gray-200/[0.2] text-4xl ${styles.align === "center" ? "bg-blue text-white": ""}`} onClick={() => handleAlign("center")}/>
                        <BsTextRight className={`p-2 border border-gray-200/[0.2] text-4xl ${styles.align === "right" ? "bg-blue text-white": ""}`}  onClick={() => handleAlign("right")}/>
                    </div>
                    <select className="p-1 m-1 rounded text-[10px] bg-white dark:bg-gray-900" onChange={(e) => handleSize(e.target.value)} initialValue={16}>
                        {
                            Array.from(Array(66).keys()).slice(4, 65).map(item => (
                                item === 14 ? <option key={item} selected={true}>{item}</option> : <option key={item}>{item}</option>
                            ))
                        }
                    </select>
                    <FiBold className={`p-2 text-3xl ${styles.bold ? "text-blue": ""}`} onClick={() => handleStyle("bold")} />
                    <FiItalic className={`p-2 text-3xl ${styles.italic ? "text-blue": ""}`} onClick={() => handleStyle("italic")} />
                    <FiUnderline className={`p-2 text-3xl ${styles.underline ? "text-blue": ""}`} onClick={() => handleStyle("underline")} />
                    <FiLink className={`p-2 text-3xl ${styles.link ? "text-blue": ""}`} onClick={() => handleStyle("link")} />
                    <FaStrikethrough className={`p-2 text-3xl ${styles.strike ? "text-blue": ""}`} onClick={() => handleStyle("strike")} />
                </div>
                <FaTrashAlt className="p-2 text-3xl text-blue mr-2" />
            </div>
                <input 
                    className={`w-full bg-gray-100 dark:bg-gray-800 rounded-b-xl p-2 ${styles.bold ? "font-bold" : ""} ${styles.italic ? "italic" : ""} ${styles.underline ? "underline" : ""} ${styles.strike ? "line-through" : ""}`}
                    style={{ fontSize: styles.size, textAlign: styles.align }}
                    contentEditable="true"
                    onChange={(e) => handleText(e.target.value)}
                    value={text}
                />
        </div>
    )
}