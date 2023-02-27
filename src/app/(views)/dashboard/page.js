'use client'
import EndpointsChart from "@/components/endpointsDoughnut";
import Submission from "@/components/submission";
import SubmissionChart from "@/components/submissionChart";
import { fetchData } from "@/helper/fetchData";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";

export default function Dashboard() {
    const [submissions, setSubmissions] = useState([])
    const [endpoints, setEndpoints] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { data: session } = useSession()
    
    const handleMsg = (msg, action) => {
        action(msg)
        setTimeout(() => {
            action("")
        }, 3000)
    }

  
    useEffect(() => {
        setLoading(true)
        if(session?.user.email) {
            const email = session.user.email
            fetchData("getEndpoints", email, setEndpoints)
            fetchData("getSubmissions", email, setSubmissions)
            setLoading(false)
        }
    }, [session])
    

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
                    <h4 className="p-2 font-semibold text-blue">LATEST ENDPOINTS</h4>
                    <div className="md:p-[5%] p-4">
                        <EndpointsChart endpoints={endpoints.reverse().splice(0, 3)} />
                    </div>
                    { // 
                        endpoints && endpoints.reverse().splice(0, 3).map(endpoint => (
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
