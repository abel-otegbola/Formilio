'use client'
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { FaLink, FaTrashAlt } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { FiExternalLink } from "react-icons/fi";
import View from "./view/page";
import random from "random-key-generator"

export default function Endpoints() {
    const [endpoints, setEndpoints] = useState([])
    const { data: session } = useSession()
    const [title, setTitle] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState("")
    const inputRef = useRef(null)

    const handleMsg = (msg, action) => {
        action(msg)
        setTimeout(() => {
            action("")
        }, 3000)
    }

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
                    handleMsg(data.error, setError)
                }
                else {
                    handleMsg(data.msg, setSuccess)
                }
                setLoading(false)
            })
            .catch(err => {
                handleMsg(err, setError)
                setLoading(false)
            }) 
            setTitle("")
        }
        else {
            handleMsg("Please add the endpoint title", setError)
        }
    }

    const handleDelete=  async (id) => {
        if(session) {
            await fetch(`/api/deleteEndpoint/${id}`)
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setError(data.error)
                }
                else {
                    handleMsg("Endpoint deleted successfully", setSuccess)
                }
            })
            .catch(err => {
                handleMsg(err, setError)
            }) 
        }
    }

    useEffect(() => {
        const fetchEndpoints = async () => {
            if(session) {
                await fetch(`/api/getEndpoints/${session.user.email}`)
                .then(res => res.json())
                .then(data => {
                    if(data.error) {
                        console.log(data.error)
                    }
                    else {
                        setEndpoints(data.data)
                    }
                })
                .catch(err => {
                    console.log(err)
                }) 
            }
        }
        fetchEndpoints()

    }, [success, session])


    return (
        <div className="px-4">
            <div className="w-full bg-blue p-4 mb-4 rounded">
                <h4 className="text-white my-4 text-lg">Endpoints</h4>
                <div className="flex">
                    <div className="md:flex md:w-[70%] p-2 mb-2 rounded-lg w-full align-center bg-gray-100 dark:bg-gray-800">
                        <input ref={inputRef} className="p-[12px] flex-1 md:mb-0 mb-4 md:w-auto w-full md:text-left text-center rounded bg-white text-black" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter endpoint title..." />
                        <button className="flex items-center justify-center p-[12px] px-6 rounded bg-blue text-white md:w-auto w-full md:ml-2 hover:bg-hoverblue hover:border hover:border-white" onClick={() => handleEndpoint()}>{loading ? <CgSpinner className="animate-spin mr-2 text-2xl" /> : ""} Generate new endpoint</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                <div className="w-full bg-gray-100 dark:bg-gray-800">
                    <div className="px-1 bg-white dark:bg-gray-900">
                        <div className="flex flex-col p-4 justify-end items-center">
                            {
                               endpoints?.length < 1 ? 
                                <>
                                    <FiExternalLink className="text-4xl p-2 rounded bg-gray-200/[0.2]" />
                                    <h2 className="my-4">You have not generated any endpoint</h2>
                                </>
                                : ""
                            }
                        </div>
                        
                        { (error !== "") ? <p className="text-red-500 text-center p-4">{error}</p> : "" }
                        { (success !== "") ? <p className="text-green-500 text-center p-4">{success}</p> : "" }

                        <div className="my-4 flex flex-wrap">
                            <div className="lg:w-[30%] w-full">

                            { // 
                                endpoints && endpoints.map(endpoint => (
                                    <div key={endpoint._id} 
                                        onClick={() => setActive(endpoint.key)}
                                        className={`flex justify-between md:flex-nowrap flex-wrap items-center p-2 my-2 hover:bg-blue hover:text-white rounded ${active === endpoint.key ? "bg-blue text-white": "bg-gray-100 dark:bg-gray-800"}`}
                                    >
                                        <div className="flex items-center">
                                            <FaLink className="p-3 text-4xl rounded bg-gray-300/[0.3] dark:bg-slate-900/[0.4] text-blue mr-2" />
                                            <h3 className="w-[22%] px-2">{endpoint.title}</h3>
                                        </div>
                                        <FaTrashAlt className="p-3 text-4xl rounded text-red-400 cursor-pointer text-right" onClick={() => handleDelete(endpoint._id)} />
                                    </div>
                                ))
                            }
                            </div>
                            <div className="lg:w-[70%] w-full my-2">
                                <p className="p-4 px-6 rounded w-full bg-gray-300/[0.2] break-all">{endpoints.filter(item => item.key === active).map(submission => ( submission.address ))}</p>
                                <View router={active} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full dark:bg-gray-900 p-5">
                    {/* <pre className={`block mt-2`}
                            dangerouslySetInnerHTML={{ __html: hljs.highlight(JSON.stringify(data, null, 4), { language: "JSON" }).value }}>
                    </pre>  */}
                </div>
            </div>
        </div>
    )
}

// export async function getStaticProps(context) {
//     const session = useSession(context)
//     console.log(session)
//     try {
//         const res = await fetch(`/api/getEndpoints/${session.user.email}`)
//         const endpoints = await res.json()
//         return {
//             props: {
//                 endpoints,
//             }
//         }
//     }
//     catch(error) {
//         return {
//             props: {
//                 error: true
//             }
//         }
//     }
// }