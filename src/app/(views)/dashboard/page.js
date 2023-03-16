
'use client'
import EndpointsChart from "@/components/charts/endpointsDoughnut";
import EndpointsList from "@/components/dashboard/endpointsList";
import Header from "@/components/dashboard/header";
import SubmissionChart from "@/components/charts/submissionChart";
import SubmissionList from "@/components/dashboard/submissionsList";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleUp, FaArrowUp, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import GenerateEndpoint from "@/components/dashboard/generateEndpoint";
import { NotificationContext } from "./layout";
import { convert } from "@/helper/convertDate";


export default function Dashboard() {
    const [submissions, setSubmissions] = useState([])
    const [endpoints, setEndpoints] = useState([])
    const { data: session } = useSession()   
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
    const { notifications } = useContext(NotificationContext)


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
                <Header text={`Welcome: ${session?.user.name}`} icon={<FaPaperPlane />} >
                    <GenerateEndpoint />
                </Header>
            <div className="flex flex-wrap">
                <div className="md:w-[70%] w-full md:p-2 py-5">
                    <div className="p-2 rounded bg-white dark:bg-gray-900">
                        <h4 className="p-2 font-semibold text-blue">SUBMISSIONS</h4>
                        <SubmissionChart submissions={submissions}/>
                    </div>
                    <div className="p-2 my-6 max-h-[400px] overflow-hidden rounded bg-gray-200/[0.2] dark:bg-gray-800/[0.5]">
                        <h4 className="p-2 font-semibold text-blue">LATEST SUBMISSIONS</h4>
                        <div className="p-2">
                            <SubmissionList type={"getSubmissions/all"} setSubmissions={setSubmissions} limit={0} amount={4} />
                        </div>
                    </div>
                </div>
                <div className="md:w-[30%] w-full p-2 rounded my-6 dark:bg-gray-800/[0.3]">
                    <h4 className="p-2 font-semibold text-blue">LATEST ENDPOINTS</h4>
                    {/* <p className="p-2">Statistics of submissions for your latest endpoints</p> */}
                    <div className="relative flex justify-center items-center md:mx-[15%] mx-[5%] my-4 bg-white dark:bg-gray-900 rounded-full md:w-auto w-fit">
                        <EndpointsChart endpointsTitles={endpointsTitles} endpointsData={endpointsData}/>
                        <div className="absolute flex flex-col justify-center items-center bg-gray-400/[0.1] rounded-full border-2 border-dashed border-gray-400/[0.5] items-center h-[70%] w-[70%]">
                            <h3 className="font-semibold text-2xl flex items-center"><FaArrowAltCircleUp className="text-blue mr-2"/> {submissions?.length}</h3>
                            <p className="text-[10px]">Total submissions</p>
                        </div>
                    </div>
                    <EndpointsList 
                        setEndpoints={setEndpoints} 
                        colors={colors} 
                        data={endpointsData}
                    />
                    <div className="mt-10 flex gap-2">
                        <a href="/dashboard/endpoints" className="p-3 px-6 text-center rounded-full border border-blue text-white bg-blue hover:text-white">View all endpoints</a>
                        <button className="flex-1 p-3 px-6 text-center rounded-full border border-blue text-blue hover:bg-blue hover:text-white">Total: {endpoints?.length}</button>
                    </div>
                    <div className="mt-10">
                        <h4 className="p-2 font-semibold text-blue">LATEST NOTIFICATIONS</h4>
                        {
                            [...new Map(notifications?.map(m => [m.sender, m])).values()].map(notification => (
                                <div key={notification.id}
                                    className={`flex md:flex-no-wrap flex-wrap items-center justify-between bg-gray-100 dark:bg-gray-900 border border-transparent border-y-gray-300/[0.2] hover:bg-blue hover:text-white cursor-pointer`}>
                                    <div className="flex-1 items-center overflow-x-auto">
                                        {notification.sender}
                                    </div>
                                    <div className="flex items-center p-1">
                                        <p className="pl-2 text-[10px]">{convert(notification.createdAt)}</p>
                                        <FaCheckCircle className="text-green-400 p-3 text-4xl cursor-pointer"/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="mt-10 flex gap-2">
                        <a href="/dashboard/notifications" className="p-3 px-6 text-center rounded-full border border-blue bg-blue text-white">View all notifications</a>
                        <button className="flex-1 p-3 px-6 text-center rounded-full border border-blue text-blue hover:bg-blue hover:text-white">Total: {notifications?.length}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


