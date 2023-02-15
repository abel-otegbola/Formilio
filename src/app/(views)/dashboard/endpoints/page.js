'use client'
import hljs from "highlight.js";
import { useState } from "react";
import { FcEmptyFilter } from "react-icons/fc";
import { useSession } from "next-auth/react";
import "./jsonformat.css"
import { FaLink, FaTrashAlt } from "react-icons/fa";

export default function Endpoints() {
    const [endpoints, setEndpoints] = useState([])
    const { data: session } = useSession()
    const [title, setTitle] = useState("")

    const handleEndpoint = () => {
        if(title !== "") {
            const newId = (endpoints.length > 0) ? endpoints[endpoints.length -1].id + 1 : 0;
            setEndpoints([
                ...endpoints,
                { id: newId, title: title, link: `https://mailme.vercel.app/api/endpoint:${session.user.name.split(" ")[0]}/form${newId}` }
            ])
            setTitle("")
        }
    }

    const handleDelete= (id) => {
        setEndpoints(
            endpoints.filter(endpoint => endpoint.id !== id)
        )
    }

    return (
        <div className="px-4">
            <div className="w-full h-[130px] bg-blue p-4 mb-4 rounded">
                <h4 className="text-white my-4 text-lg">Endpoints</h4>
                <div className="flex">
                    <a href="/dashboard/builder" className="p-3 px-6 rounded bg-hoverblue text-white mr-2 hover:bg-blue hover:border hover:border-white">Create new endpoint</a>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                <div className="md:w-[70%] w-full bg-gray-100 dark:bg-gray-800">
                    <h4 className="p-2 px-4 rounded text-lg">All Created Endpoints:</h4>
                    <div className="px-1 py-4 bg-white dark:bg-gray-900">
                        <div className="flex flex-col min-h-[150px] p-4 justify-end items-center">
                            {
                                endpoints.length < 1 ? 
                                <>
                                    <FcEmptyFilter />
                                    <h2 className="my-4">You have not generated any endpoint</h2>
                                </>
                                : ""
                            }
                            <div className="flex md:w-[70%] p-2 rounded-lg w-full align-center bg-gray-100 dark:bg-gray-800 shadow-lg">
                                <input className="p-[12px] flex-1 rounded bg-white text-black" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter endpoint title..." />
                                <button className="p-[12px] px-6 rounded bg-blue text-white ml-2 hover:bg-hoverblue hover:border hover:border-white" onClick={() => handleEndpoint()}>Generate new endpoint</button>
                            </div>
                        </div>
                        <div className="my-4">
                            {
                                endpoints.map(endpoint => (
                                    <div key={endpoint.id} className="flex items-center p-2 my-1 bg-gray-100 dark:bg-gray-800 rounded">
                                        <FaLink className="p-3 text-4xl rounded bg-slate-200[0.4] text-blue mr-2" />
                                        <h3 className="w-[30%]">{endpoint.title}</h3>
                                        <p className="text-blue-600 flex-1">{endpoint.link}</p>
                                        <FaTrashAlt className="p-3 text-4xl rounded text-red-600" onClick={() => handleDelete(endpoint.id)} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="md:w-[27%] w-full dark:bg-gray-900 p-5">
                    {/* <pre className={`block mt-2`}
                            dangerouslySetInnerHTML={{ __html: hljs.highlight(JSON.stringify(data, null, 4), { language: "JSON" }).value }}>
                    </pre>  */}
                </div>
            </div>
        </div>
    )
}