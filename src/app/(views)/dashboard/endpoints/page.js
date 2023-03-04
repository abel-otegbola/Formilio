'use client'
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { CgSpinner } from "react-icons/cg";
import random from "random-key-generator"
import Popup from "@/components/popup";
import EndpointsList from "@/components/endpointsList";
import Header from "@/components/header";
import { FaLink } from "react-icons/fa";

export default function Endpoints() {
    const [endpoints, setEndpoints] = useState([])
    const { data: session } = useSession()
    const [title, setTitle] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(7)
    const inputRef = useRef(null)

    const handleEndpoint = async () => {
        const key = random(10)
        if(title !== "") {
            setLoading(true);
            await fetch(`/api/generate`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: session.user.email, title, key,  address: `https://mailme.vercel.app/api/endpoint/${key}` })
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
        <div className="px-4">
            <Header text={"Endpoints"} icon={<FaLink/>}>
                <div className="md:flex md:w-[70%] p-2 mb-2 gap-2 rounded-lg w-full align-center bg-gray-100 dark:bg-gray-800">
                    <input ref={inputRef} className="p-[12px] flex-1 md:mb-0 mb-2 md:w-auto w-full md:text-left text-center rounded bg-white text-black" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter endpoint title..." />
                    <button className="flex items-center justify-center p-[12px] px-6 rounded bg-blue text-white md:w-auto w-full hover:bg-hoverblue hover:border hover:border-white" onClick={() => handleEndpoint()}>{loading ? <CgSpinner className="animate-spin mr-2 text-2xl" /> : ""} Generate new endpoint</button>
                </div>
            </Header>
                        
            { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
            { (error !== "") ? <Popup text={error} color={"red"} /> : "" }

            <div className="my-4">
                <EndpointsList setError={setError} setSuccess={setSuccess} setEndpoints={setEndpoints} limit={limit}/>
            </div>

            <div className="flex justify-center">
                {
                    endpoints?.length < limit ?
                    <p className="py-6">End of list</p>
                    :
                    <button className="p-2 px-6 rounded bg-blue hover: bg-hoverblue my-6 mx-auto" onClick={() => setLimit(limit + 5)}>Load more</button>
                }
            </div>
        </div>
    )
}
