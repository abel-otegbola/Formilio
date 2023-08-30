
'use client'
import EndpointsChart from "@/components/charts/endpointsDoughnut";
import EndpointsList from "@/components/dashboard/endpointsList";
import Header from "@/components/dashboard/header";
import SubmissionChart from "@/components/charts/submissionChart";
import SubmissionList from "@/components/dashboard/submissionsList";
import { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleUp, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import GenerateEndpoint from "@/components/dashboard/generateEndpoint";
import { DataContext } from "./layout";
import { convert } from "@/helper/convertDate";


export default function Dashboard() {
    const [endpointsTitles, setEndpointsTitles] = useState(['Loading', 'Loading', 'Loading'])
    const [endpointsData, setEndpointsData] = useState([0,0,0])
    const colors = [
        'rgba(227, 97, 200, 0.7)',
        'rgba(92, 82, 242, 0.7)',
        'rgba(239, 159, 11, 0.7)',
        'rgba(0, 128, 128, 0.7)',
        'rgba(0, 191, 255, 0.7)',
        'rgba(199, 21, 133, 0.7)'
    ]
    const { notifications, endpoints, submissions } = useContext(DataContext)


    useEffect(() => {

        //set Endpoints
        let endpointsTitles = endpoints?.map(item => ( item.title )) || []

        setEndpointsTitles(endpointsTitles)

        // get the key fields from endpoints and submissions, store into an array
        let endpointsKeys = endpoints?.map(item => ( item.key )) || []
        let submissionsKeys = submissions?.map(item => ( item.key )) || []

        //Find number of each submissions for all endpoints using the keys.
        let resultArray = []

        for(let i=0; i<endpointsKeys.length; i++) {
            resultArray.push(submissionsKeys.filter(item => item === endpointsKeys[i]).length)
        }

        setEndpointsData(resultArray)
    }, [endpoints, submissions])

    return (
        <div className="px-4">
            <Header text={"Generate new endpoint"} icon={<FaPaperPlane />} >
                <GenerateEndpoint />
            </Header>

            <div className="flex flex-wrap">

                {/* Submissions graph and list display section */}
                <div className="lg:w-[70%] w-full md:p-2 py-5">
                    <div className="p-2 rounded bg-white dark:bg-gray-900">
                        <h4 className="p-2 font-semibold text-blue">SUBMISSIONS</h4>
                        <SubmissionChart submissions={submissions}/>
                    </div>
                    <div className="p-2 my-6 rounded bg-gray-200/[0.2] dark:bg-gray-800/[0.5]">
                        <h4 className="p-2 font-semibold text-blue">LATEST SUBMISSIONS</h4>
                        <div className="p-2">
                            <SubmissionList submissions={submissions} />
                        </div>
                    </div>
                </div>

                {/* Endpoints graph and list display section */}
                <div className="lg:w-[30%] md:block w-full p-2 rounded my-6 dark:bg-gray-800/[0.3]">
                    <h4 className="p-2 font-semibold text-blue">LATEST ENDPOINTS</h4>
                    {/* <p className="p-2">Statistics of submissions for your latest endpoints</p> */}
                    <div className="relative flex justify-center items-center mx-auto my-4 bg-white dark:bg-gray-900 rounded-full md:w-auto w-fit">
                        <EndpointsChart endpointsTitles={endpointsTitles} endpointsData={endpointsData}/>
                        <div className="absolute flex flex-col justify-center items-center bg-gray-400/[0.1] rounded-full border-2 border-dashed border-gray-400/[0.5] items-center h-[70%] w-[70%]">
                            <h3 className="font-semibold text-2xl flex items-center"><FaArrowAltCircleUp className="text-blue mr-2"/> {submissions?.length}</h3>
                            <p className="text-[10px]">Total submissions</p>
                        </div>
                    </div>
                    <EndpointsList 
                        endpoints={endpoints} 
                        colors={colors} 
                        data={endpointsData}
                    />
                    <div className="mt-5 flex gap-2">
                        <a href="/dashboard/endpoints" className="p-2 opacity-[0.6] hover:opacity-[1]">View all endpoints({endpoints?.length})</a>
                    </div>

                    {/* Notifications list display section */}
                    <div className="mt-10">
                        <h4 className="p-2 font-semibold text-blue">LATEST NOTIFICATIONS</h4>
                        {                                               
                            notifications?.map(notification => (
                                <div key={notification._id} className="my-2 bg-gray-100 dark:bg-gray-900 border border-transparent max-h-[400px] overflow-hidden border-y-gray-300/[0.2] ">
                                    <div
                                        className={`flex md:flex-no-wrap flex-wrap items-center justify-between hover:bg-blue hover:text-white cursor-pointer`}>
                                        <div className="flex-1 ml-2 items-center overflow-x-auto">
                                            {notification.sender}
                                        </div>
                                        <div className="flex items-center p-1">
                                            <p className="pl-2 text-[10px]">{convert(notification.createdAt)}</p>
                                            <FaCheckCircle className="text-green-400 p-3 text-4xl cursor-pointer"/>
                                        </div>
                                    </div>
                                    <p className="p-2">{notification.message}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="mt-5 flex gap-2 overflow-hidden max-h-[400px]">
                        <a href="/dashboard/notifications" className="p-2 opacity-[0.6] hover:opacity-[1]">View all notifications({notifications?.length})</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


