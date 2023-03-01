
'use client'
import EndpointsChart from "@/components/endpointsDoughnut";
import Popup from "@/components/popup";
import Submission from "@/components/submission";
import SubmissionChart from "@/components/submissionChart";
import { fetchData } from "@/helper/fetchData";
import { useSession } from "next-auth/react";
import { FaLink } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";


export default function Dashboard() {
    const { data: session } = useSession()

    const { data: endpoints, isLoading: endpointsLoading, error: endpointsError } = fetchData("getEndpoints")
    const { data: submissions, isLoading: submissionLoading, error: submissionError } = fetchData("getSubmissions/all")
    

    return (
        <div className="px-4">
            <div className="w-full h-[130px] bg-blue p-4 mb-4 rounded">
                <h4 className="text-white my-4"><span className="text-lg">Welcome:</span> {session?.user.name}</h4>
                <div className="flex">
                    <a href="/dashboard/endpoints" className="p-3 px-6 rounded bg-hoverblue text-white mr-2 hover:bg-blue hover:border hover:border-white">Generate endpoints</a>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="md:w-[70%] w-full md:p-2 py-5">
                    <div className="md:p-[5%] p-2 min-h-[200px] rounded bg-white dark:bg-gray-900">
                        <h4 className="p-2 font-semibold text-blue">SUBMISSIONS</h4>
                        <SubmissionChart submissions={submissions && submissions}/>
                    </div>
                    <div className="md:p-[5%] p-2 py-6 rounded bg-white dark:bg-gray-900">
                        <h4 className="p-2 font-semibold text-blue">LATEST SUBMISSIONS</h4>
                        <div className="p-2">
                
                            { submissionError || submissions?.error 
                                ? 
                                <Popup text={submissionError || submissions.error} color={"red"} /> : (submissionLoading) 
                                ? 
                                <div className="flex justify-center items-center min-h-[70px]">
                                    <FiLoader className="animate-spin text-blue text-3xl" />    
                                </div> 
                                : 
                                submissions && submissions.reverse().splice(0, 4).map(submission => (
                                    <div key={submission._id} className="grid grid-cols-3 border border-transparent border-y-gray-400/[0.2] overflow-x-auto">
                                        <Submission data={submission.data && JSON.parse(submission.data)} />
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
                <div className="md:w-[30%] w-full p-2 py-6 dark:bg-gray-800">
                    <h4 className="p-2 font-semibold text-blue">LATEST ENDPOINTS</h4>
                    <p className="p-2">Statistics of submissions for your latest endpoints</p>
                    <div className="relative flex justify-center items-center md:mx-[15%] mx-[5%] my-4 bg-white dark:bg-gray-900 rounded-full md:w-auto w-fit">
                        <EndpointsChart endpoints={endpoints && endpoints} />
                        <div className="absolute flex justify-center items-center h-[60%] w-[60%]">
                            <h3 className="text-blue font-semibold text-3xl ">70%</h3>
                        </div>
                    </div>
                    { // 
                        endpointsError || endpoints?.error
                        ? 
                        <Popup text={endpointsError || endpoints.error} color={"red"} /> : (endpointsLoading) 
                        ? 
                        <div className="flex justify-center items-center min-h-[70px]">
                            <FiLoader className="animate-spin text-blue text-3xl" />    
                        </div> 
                        : 
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


