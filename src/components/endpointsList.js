'use client'
import { fetchData } from "@/helper/fetchData";
import Link from "next/link";
import { FiLoader } from "react-icons/fi";
import { FaLink, FaTrashAlt } from "react-icons/fa";
import Popup from "./popup";
import { useEffect, useState } from "react";

export default function EndpointsList({ setEndpoints }) {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const { data: endpoints, isLoading: endpointsLoading, error: endpointsError } = fetchData("getEndpoints")

    useEffect(() => {
        setEndpoints(endpoints)
    }, [endpoints])

    const handleDelete=  async (id) => {
        await fetch(`/api/deleteEndpoint/${id}`)
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setError(data.error)
            }
            else {
                setSuccess("Endpoint deleted successfully")
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        }) 
    }


    return (
        <div className="w-full [&>*:nth-child(odd)]:bg-gray-300/[0.3] dark:[&>*:nth-child(odd)]:bg-gray-50/[0.1]">

            
            { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
            { (error !== "") ? <Popup text={error} color={"red"} /> : "" }

            {  
                endpointsError || endpoints?.error
                ? 
                <Popup text={error || endpoints.error} color={"red"} /> : (endpointsLoading) 
                ? 
                <div className="flex justify-center items-center min-h-[70px]">
                    <FiLoader className="animate-spin text-blue text-3xl" />    
                </div> : 
                endpoints?.map(endpoint => (
                    <div key={endpoint._id} 
                        className={`flex justify-between md:flex-nowrap flex-wrap items-center p-3 bg-white dark:bg-gray-900`}
                    >
                        <div className="flex flex-1 items-center">
                            <FaLink className="p-3 text-4xl rounded bg-gray-300/[0.3] dark:bg-slate-900/[0.4] text-blue mr-2" />
                            <Link href={{pathname: '/dashboard/endpoints/view',
                                query: {title: endpoint.title, endpoint: endpoint.key}
                            }} className="px-2">{endpoint.title}</Link>
                        </div>
                        <FaTrashAlt className="p-3 text-4xl rounded text-red-400 cursor-pointer text-right" onClick={() => handleDelete(endpoint._id)} />
                    </div>
                ))
            }

        </div>
    )
}