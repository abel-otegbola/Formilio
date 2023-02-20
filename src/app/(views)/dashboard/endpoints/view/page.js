'use client'
// import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import EndpointFields from "@/components/endpointFields";
import { FaUserCircle } from "react-icons/fa";

export default function View({ router }) {
    const [submissions, setSubmission] = useState([])
    const [error, setError] = useState("")
    const [active, setActive] = useState("Submissions")
    // const router = useSearchParams().get("title")
    const { data: session } = useSession()

    useEffect(() => {
        const fetchEndpoints = async () => {
            if(session) {
                await fetch(`/api/getSubmissions/${session.user.email}/${router}`)
                .then(res => res.json())
                .then(data => {
                    if(data.error) {
                        setError(data.error)
                    }
                    else {
                        setSubmission(data.data)
                        console.log(data.data)
                    }
                })
                .catch(err => {
                    setError(err)
                }) 
            }
        }
        fetchEndpoints()

    }, [router, session])

    return(
        <div className="lg:px-4 w-full shadow-lg">
            <div className="w-full bg-blue p-4 rounded">
                <p className="p-3 px-6 rounded w-full bg-hoverblue text-white mr-2 break-all">{"https://mailme.vercel.app/api/endpoint/" + (session && session.user.email) + "/" + router}</p>
                <div className="flex gap-1 mt-4">
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
            </div>
            <div className="py-2 dark:bg-gray-800">

                {
                    submissions.filter(item => item.title === router).map(submission => (
                        <div key={submission._id} className="flex bg-gray-100 dark:bg-gray-900 my-1">
                            <FaUserCircle className="text-4xl border-2 border-white/[0.5] text-white/[0.7] m-3 shadow-lg rounded-full" />
                            <div className="grid gap-2 md:grid-cols-3 flex-1">
                                { submission.data && <EndpointFields data={JSON.parse(submission.data)} />}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}