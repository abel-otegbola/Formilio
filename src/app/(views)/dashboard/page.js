'use client'
import Submission from "@/components/submission";
import SubmissionChart from "@/components/submissionChart";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";

export default function Dashboard() {
    const [submissions, setSubmissions] = useState([])
    const [endpoints, setEndpoints] = useState([])
    const [error, setError] = useState("")
    const { data: session } = useSession()
    
    const handleMsg = (msg, action) => {
        action(msg)
        setTimeout(() => {
            action("")
        }, 3000)
    }

    useEffect(() => {
        if(session) {
            const fetchEndpoints = async () => {
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
            if(session) {
                fetchEndpoints()
            }
        }
    }, [session])

    useEffect(() => {
        if(session) {
            const getSubmissionsFetch = async () => {
                await fetch(`/api/getSubmissions/all/${session.user.email}`)
                .then(res => res.json())
                .then(data => {
                    if(data.error) {
                        console.log(data.error)
                    }
                    else {
                        console.log(data.data)
                        setSubmissions(data.data)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            }
            getSubmissionsFetch()
        }
    }, [endpoints])

    return (
        <div className="px-4">
            <div className="w-full h-[130px] bg-blue p-4 mb-4 rounded">
                <h4 className="text-white my-4"><span className="text-lg">Welcome:</span> {!session ?  "" : session.user.name}</h4>
                <div className="flex">
                    <a href="/dashboard/endpoints" className="p-3 px-6 rounded bg-hoverblue text-white mr-2 hover:bg-blue hover:border hover:border-white">Generate endpoints</a>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="md:w-[70%] w-full bg-gray-100 dark:bg-gray-800 md:p-2">
                    <div className="md:p-[5%] p-2 min-h-[200px] rounded bg-white dark:bg-gray-900">
                        <h4 className="p-2 font-semibold text-blue">SUBMISSIONS</h4>
                        <SubmissionChart submissions={submissions}/>
                    </div>
                    <div className="md:p-[5%] p-2 rounded bg-white dark:bg-gray-900">
                        <h4 className="p-2 font-semibold text-blue">LATEST SUBMISSIONS</h4>
                        <div className="p-2">
                
                            { (error !== "") ? <Popup text={error} color={"red"} /> : "" }
                            {
                                submissions.reverse().splice(0,3).map(submission => (
                                    <div key={submission._id} className="grid grid-cols-3 border border-transparent border-y-gray-400/[0.2] overflow-x-auto">
                                        <Submission data={submission.data && JSON.parse(submission.data)} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="md:w-[30%] w-full p-2">
                    <h4 className="p-2 font-semibold text-blue">ENDPOINTS</h4>
                    { // 
                    endpoints && endpoints.map(endpoint => (
                        <div key={endpoint._id} 
                            className={`flex md:flex-nowrap flex-wrap items-center p-2 my-2 hover:bg-blue hover:text-white rounded bg-gray-100 dark:bg-gray-800`}
                        >
                            <FaLink className="p-3 text-4xl rounded bg-gray-300/[0.3] dark:bg-slate-900/[0.4] text-blue mr-2" />
                            <h3 className="w-[22%] px-2">{endpoint.title}</h3>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}