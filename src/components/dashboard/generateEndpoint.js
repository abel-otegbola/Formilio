'use client'
import { useRef, useState } from "react"
import { useSession } from "next-auth/react";
import { CgSpinner } from "react-icons/cg"
import random from "random-key-generator"
import Popup from "../general/popup";

export default function GenerateEndpoint() {
    const [title, setTitle] = useState("")
    const { data: session } = useSession()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const inputRef = useRef(null)

    const createEndpoint = async () => {
        const key = random(10)
        if(title !== "") {
            setLoading(true);
            await fetch(`/api/generate`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: session.user.email, title, key, emailRecipients: [session.user.email], autoRespond: "", thankYou: "",  address: `https://formilio.com/api/endpoint/${key}` })
            })
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess("Endpoint created successfully")
                    window.location.reload()
                }
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            }) 
            setTitle("")
        }
        else {
            setError("Please add the endpoint title")
        }
    }

    return (
        <div>
            
            { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
            { (error !== "") ? <Popup text={error} color={"red"} /> : "" }

            <div className="flex md:w-[50%] mb-2 gap-2 rounded-lg w-full align-center">
                <input ref={inputRef} className="p-[12px] flex-1 md:w-auto md:text-left text-center rounded bg-transparent text-white border border-gray-300/[0.3]" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter endpoint title..." />
                <button className="flex items-center justify-center p-[12px] px-6 rounded bg-blue text-white hover:bg-hoverblue" onClick={() => createEndpoint()}>{loading ? <CgSpinner className="animate-spin mr-2 text-2xl" /> : ""}Generate</button>
            </div>
        </div>
    )
}