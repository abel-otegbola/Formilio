'use client'
import { fetchData } from "@/helper/fetchData";
import Link from "next/link";
import { FiLoader } from "react-icons/fi";
import { FaChevronRight, FaLink } from "react-icons/fa";
import Popup from "./popup";
import { useEffect } from "react";

export default function EndpointsList({ setEndpoints, limit }) {

    const { data: endpoints, isLoading: endpointsLoading, error: endpointsError } = fetchData("getEndpoints", null, true, limit)

    useEffect(() => {
        setEndpoints(endpoints)
    }, [endpoints])


    return (
        <div className="w-full [&>*:nth-child(odd)]:bg-gray-300/[0.06] backdrop-opacity-10">

            {  
                endpointsError || endpoints?.error
                ? 
                <div>
                    <Popup text={endpointsError || endpoints.error} color={"red"} />
                    <div className="flex justify-center flex-col items-center p-[40px]">
                        <p className="mb-4">Could not connect</p>
                        <button className="p-2 px-6 text-sm rounded bg-blue text-white hover:bg-hoverblue" onClick={() => window.location.reload()}>Refresh</button>
                    </div>
                </div> : (endpointsLoading) 
                ? 
                <div className="flex justify-center items-center min-h-[70px]">
                    <FiLoader className="animate-spin text-blue text-3xl" />    
                </div> : 
                endpoints?.map(endpoint => (
                    <Link href={{pathname: '/dashboard/endpoints/view',
                                query: {title: endpoint.title, endpoint: endpoint.key}
                            }}  key={endpoint._id} 
                        className={`flex justify-between md:flex-nowrap flex-wrap items-center p-3 bg-gray-100 dark:bg-gray-900`}
                    >
                        <div className="flex flex-1 items-center">
                            <FaLink className="p-3 text-4xl rounded bg-gray-300/[0.3] dark:bg-slate-900/[0.4] text-blue mr-2" />
                            <h3 className="px-2">{endpoint.title}</h3>
                        </div>
                        
                        <FaChevronRight className="p-3 text-4xl rounded text-red-400 cursor-pointer text-right" />
                    </Link>
                ))
            }

        </div>
    )
}