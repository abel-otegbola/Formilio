'use client'
import { useContext } from "react";
import Header from "@/components/dashboard/header";
import { FaLink } from "react-icons/fa";
import EndpointsList from "@/components/dashboard/endpointsList";
import GenerateEndpoint from "@/components/dashboard/generateEndpoint";
import { FiLoader } from "react-icons/fi";
import { EndpointsContext } from "@/context/endpointsContext";

export default function Endpoints() {

    const { endpoints, isLoading } = useContext(EndpointsContext)

    return (
        <div className="px-4">
            <Header text={"Endpoints"} icon={<FaLink/>}>
                <GenerateEndpoint />
            </Header>

            {   isLoading ? 
                <div className="min-h-[200px] flex justify-center items-center">
                    <FiLoader className="animate-spin text-3xl text-blue" />
                </div>
                :
                <div className="my-4">
                    <EndpointsList endpoints={endpoints || []} />
                </div>
            }

        </div>
    )
}
