'use client'
import { fetchData } from "@/helper/fetchData";
import Link from "next/link";
import { FiLoader } from "react-icons/fi";
import { FaChevronRight, FaLink } from "react-icons/fa";
import Popup from "./popup";
import { useEffect } from "react";

export default function EndpointsList({ setEndpoints }) {

    const { data: endpoints, isLoading: endpointsLoading, error: endpointsError } = fetchData("getEndpoints")

    useEffect(() => {
        setEndpoints(endpoints)
    }, [endpoints])


    return (
        <div className="w-full [&>*:nth-child(odd)]:bg-gray-300/[0.2] [&>*:nth-child(odd)]:bg-gray-50/[0.1]">

            {  
                endpointsError || endpoints?.error
                ? 
                <Popup text={endpointsError || endpoints.error} color={"red"} /> : (endpointsLoading) 
                ? 
                <div className="flex justify-center items-center min-h-[70px]">
                    <FiLoader className="animate-spin text-blue text-3xl" />    
                </div> : 
                endpoints?.map(endpoint => (
                    <Link href={{pathname: '/dashboard/endpoints/view',
                                query: {title: endpoint.title, endpoint: endpoint.key}
                            }}  key={endpoint._id} 
                        className={`flex justify-between md:flex-nowrap flex-wrap items-center p-3 bg-white dark:bg-gray-900`}
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