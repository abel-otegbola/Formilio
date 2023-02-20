'use client'
// import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import EndpointFields from "@/components/endpointFields";
import { FaTrashAlt, FaUserCircle } from "react-icons/fa";

export default function View({ router }) {
    const [submissions, setSubmission] = useState([])
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [active, setActive] = useState("Submissions")
    // const router = useSearchParams().get("title")
    const { data: session } = useSession()

    const handleMsg = (msg, action) => {
        action(msg)
        setTimeout(() => {
            action("")
        }, 3000)
    }

    useEffect(() => {
        const fetchEndpoints = async () => {
            if(session) {
                await fetch(`/api/getSubmissions/${session.user.email}/${router}`)
                .then(res => res.json())
                .then(data => {
                    if(data.error) {
                       handleMsg(data.error, setError)
                    }
                    else {
                        setSubmission(data.data)
                    }
                })
                .catch(err => {
                    handleMsg(err, setError)
                }) 
            }
        }
        fetchEndpoints()

    }, [router, session, error, success])

    
    const handleDelete=  async (id) => {
        if(session) {
            await fetch(`/api/deleteSubmission/${id}`)
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    handleMsg(data.error, setError)
                }
                else {
                    handleMsg("Deleted successfully", setSuccess)
                }
            })
            .catch(err => {
                handleMsg(err, setError)
            }) 
        }
    }

    return(
        <div className="lg:px-4 w-full shadow-lg">
            <div className="w-full bg-blue p-4 rounded">
                <div className="flex gap-1">
                    {
                        ["Submissions", "Setup", "Analytics", "Settings"].map((item, index) => (
                            <p 
                                key={index} 
                                className={`p-3 rounded w-full border hover:border-white text-white text-center mr-2 cursor-pointer ${active === item ? "border-white" : " border-blue"}`}
                                onClick={() => setActive(item)}
                            >{item}</p>
                        ))
                    }
                </div>
                
                { (error !== "") ? <p className="text-red-500 text-center p-4">{error}</p> : "" }
                { (success !== "") ? <p className="text-green-500 text-center p-4">{success}</p> : "" }
            </div>
            <div className="py-2 dark:bg-gray-800">

                {
                    submissions.filter(item => item.title === router).map(submission => (
                        <div key={submission._id} className="flex bg-gray-100 dark:bg-gray-900 m-1">
                            <FaUserCircle className="text-4xl border-2 border-white/[0.5] text-white/[0.7] m-3 shadow-lg rounded-full" />
                            <div className="grid gap-2 md:grid-cols-3 flex-1">
                                { submission.data && <EndpointFields data={JSON.parse(submission.data)} />}
                            </div>
                            <FaTrashAlt className="text-red-400 m-5 cursor-pointer" onClick={() => handleDelete(submission._id)}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}