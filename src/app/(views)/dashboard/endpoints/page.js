'use client'
import { useContext, useState } from "react";
import Header from "@/components/dashboard/header";
import { FaLink } from "react-icons/fa";
import EndpointsList from "@/components/dashboard/endpointsList";
import GenerateEndpoint from "@/components/dashboard/generateEndpoint";
import { DataContext } from "../layout";

export default function Endpoints() {
    const [limit, setLimit] = useState(7)

    const { endpoints } = useContext(DataContext)

    return (
        <div className="px-4">
            <Header text={"Endpoints"} icon={<FaLink/>}>
                <GenerateEndpoint />
            </Header>

            <div className="my-4">
                <EndpointsList endpoints={endpoints} />
            </div>

            <div className="flex justify-center">
                {
                    endpoints?.length < limit ?
                    <p className="py-6">End of list</p>
                    :
                    <button className="p-2 px-6 rounded text-white bg-blue hover:bg-hoverblue my-6 mx-auto" onClick={() => setLimit(limit + 5)}>Load more</button>
                }
            </div>
        </div>
    )
}
