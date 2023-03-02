
'use client'
import EndpointsChart from "@/components/endpointsDoughnut";
import EndpointsList from "@/components/endpointsList";
import Header from "@/components/header";
import Popup from "@/components/popup";
import SubmissionChart from "@/components/submissionChart";
import SubmissionList from "@/components/submissionsList";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";


export default function Dashboard() {
    const [submissions, setSubmissions] = useState([])
    const [endpoints, setEndpoints] = useState([])
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const { data: session } = useSession()    

    return (
        <div className="px-4">
                <Header text={`Welcome: ${session?.user.name}`} icon={<FaPaperPlane />} image={"/formui.webp"}>
                    <div className="flex flex-wrap gap-2">
                        <a href="/dashboard/endpoints" className="p-2 text-sm px-6 rounded bg-hoverblue text-white hover:bg-blue hover:border hover:border-white">Generate endpoints</a>
                        <a href="/dashboard/builder" className="p-2 text-sm px-6 rounded bg-hoverblue text-white hover:bg-blue hover:border hover:border-white">Build forms</a>
                        <a href="/dashboard/templates" className="p-2 text-sm px-6 rounded bg-hoverblue text-white hover:bg-blue hover:border hover:border-white">Explore templates</a>
                    </div>
                </Header>
            <div className="flex flex-wrap">
                <div className="md:w-[70%] w-full md:p-2 py-5">
                    <div className="p-2 min-h-[200px] rounded bg-white dark:bg-gray-900">
                        <h4 className="p-2 font-semibold text-blue">SUBMISSIONS</h4>
                        <SubmissionChart submissions={submissions}/>
                    </div>
                    <div className="p-2 py-6 rounded bg-white dark:bg-gray-900">
                        <h4 className="p-2 font-semibold text-blue">LATEST SUBMISSIONS</h4>
                        <div className="p-2">
                            <SubmissionList type={"getSubmissions/all"} setSubmissions={setSubmissions} />
                        </div>
                    </div>
                </div>
                <div className="md:w-[30%] w-full p-2 py-6 dark:bg-gray-800">
                    <h4 className="p-2 font-semibold text-blue">LATEST ENDPOINTS</h4>
                    {/* <p className="p-2">Statistics of submissions for your latest endpoints</p> */}
                    <div className="relative flex justify-center items-center md:mx-[15%] mx-[5%] my-4 bg-white dark:bg-gray-900 rounded-full md:w-auto w-fit">
                        {/* <EndpointsChart endpoints={endpoints?.reverse().splice(0, 3)} submissions={submissions}/> */}
                        {/* <div className="absolute flex justify-center items-center h-[60%] w-[60%]">
                            <h3 className="text-blue font-semibold text-3xl ">70%</h3>
                        </div> */}
                    </div>
                    <EndpointsList setError={setError} setSuccess={setSuccess} setEndpoints={setEndpoints} />
                    
                </div>
            </div>
        </div>
    )
}


