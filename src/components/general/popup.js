import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"

export default function Popup({ text, color }) {
    const [msg, setMsg] = useState(null)

    useEffect(() => {
        setMsg(text)
        setTimeout(() => {
            setMsg(null)
        }, 10000)
    }, [text])

    return (
        <>
        { msg ?
            <div className={`fixed w-full flex justify-center top-[70px] left-0 p-4 transition-all duration-700 z-100 ${color === "green" ? "text-green-400" : "text-red-400"}`} >
                <div className="flex items-center p-3 rounded shadow-xl bg-gray-700 px-6">
                    <span>{msg}</span>
                    <FaTimes className="ml-6" onClick={() => setMsg(null)} />
                </div>
            </div>
         : "" }
        </>
    )
}