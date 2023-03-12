
'use client'
import EndpointsChart from "@/components/charts/endpointsDoughnut";
import EndpointsList from "@/components/endpointsList";
import Header from "@/components/header";
import SubmissionChart from "@/components/charts/submissionChart";
import SubmissionList from "@/components/submissionsList";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import GenerateEndpoint from "@/components/generateEndpoint";


export default function Dashboard() {
    const [submissions, setSubmissions] = useState([])
    const [endpoints, setEndpoints] = useState([])
    const { data: session } = useSession()   

    return (
        <div className="px-4">
                <Header text={`Welcome: ${session?.user.name}`} icon={<FaPaperPlane />} >
                    <GenerateEndpoint />
                </Header>
            <div className="flex flex-wrap">
                <div className="md:w-[70%] w-full md:p-2 py-5">
                    <div className="p-2 min-h-[200px] rounded bg-white dark:bg-gray-900">
                        <h4 className="p-2 font-semibold text-blue">SUBMISSIONS</h4>
                        <SubmissionChart submissions={submissions}/>
                    </div>
                    <div className="p-2 py-6 rounded bg-gray-200/[0.4] dark:bg-gray-800/[0.5]">
                        <h4 className="p-2 font-semibold text-blue">LATEST SUBMISSIONS</h4>
                        <div className="p-2">
                            <SubmissionList type={"getSubmissions/all"} setSubmissions={setSubmissions} limit={5} />
                        </div>
                    </div>
                </div>
                <div className="md:w-[30%] w-full p-2 py-6 dark:bg-gray-800/[0.3]">
                    <h4 className="p-2 font-semibold text-blue">LATEST ENDPOINTS</h4>
                    {/* <p className="p-2">Statistics of submissions for your latest endpoints</p> */}
                    <div className="relative flex justify-center items-center md:mx-[15%] mx-[5%] my-4 bg-white dark:bg-gray-900 rounded-full md:w-auto w-fit">
                        {/* <EndpointsChart endpoints={endpoints} submissions={submissions}/> */}
                        {/* <div className="absolute flex justify-center items-center h-[60%] w-[60%]">
                            <h3 className="text-blue font-semibold text-3xl ">70%</h3>
                        </div> */}
                    </div>
                    <EndpointsList 
                        setEndpoints={setEndpoints} 
                        limit={5}  
                    />
                    
                </div>
            </div>
        </div>
    )
}


