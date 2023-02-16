'use client'
import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import EndpointFields from "@/components/endpointFields";

export default function View() {
    const [submissions, setSubmission] = useState([{}])
    const [error, setError] = useState("")
    const router = useSearchParams().get("title")
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

    }, [session])

    return(
        <div className="px-4">
            <div className="w-full bg-blue p-4 mb-4 rounded">
                <h4 className="text-white my-4"><span className="text-lg">Endpoint:</span> {router}</h4>
                <div className="flex flex-wrap">
                    <p href="/dashboard/builder" className="p-3 px-6 rounded bg-hoverblue text-white mr-2 hover:bg-blue hover:border hover:border-white">Address: https://mailme.vercel.app/api/endpoint/{session && session.user.email}/{router}</p>
                </div>
            </div>
            <div className="p-2">
                {
                    submissions.filter(item => item.title === router).map(submission => (
                        <div key={submission._id} className="p-2 bg-gray-100 dark:bg-gray-800 my-1">
                            { submission.data && <EndpointFields data={JSON.parse(submission.data)} />}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}