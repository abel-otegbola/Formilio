'use client'
import Link from "next/link";
import { FiLoader } from "react-icons/fi";
import { FaChevronRight, FaLink } from "react-icons/fa";
import Popup from "../general/popup";
import { useContext, useEffect } from "react";
import { DataContext } from "@/app/(views)/dashboard/layout";

export default function EndpointsList({ setEndpoints, colors, data }) {

    const { endpoints, endpointsLoading, endpointsError } = useContext(DataContext)

    useEffect(() => {
        console.log(endpoints)
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

                (endpoints && endpoints.error) && endpoints.map((endpoint, i) => (
                    <Link href={{
                            pathname: '/dashboard/endpoints/view',
                            query: {title: endpoint.title, endpoint: endpoint.key}
                            }}  
                        key={endpoint._id} 
                        className={`flex justify-between md:flex-nowrap flex-wrap items-center p-3 bg-gray-100/[0.5] dark:bg-gray-900 rounded my-1 border-2 border-transparent`}
                        style={{ borderLeftColor: colors ? colors[i] : "#6252f2" }}
                    >
                        <div className="flex flex-1 items-center">
                            <FaLink 
                                className="p-3 text-4xl rounded bg-gray-300/[0.3] dark:bg-slate-900/[0.4] mr-2"
                                style={{ color: colors? colors[i] : "#6252f2" }} />
                            <h3 className="px-2">{endpoint.title}</h3>
                        </div>
                        
                       { 
                       data ?  
                        <span className="p-2 text-sm rounded text-red-400 cursor-pointer text-right">{data[i]}</span>
                        :
                        <FaChevronRight className="p-3 text-4xl rounded text-red-400 cursor-pointer text-right" />
                        }
                    </Link>
                ))
            }

        </div>
    )
}