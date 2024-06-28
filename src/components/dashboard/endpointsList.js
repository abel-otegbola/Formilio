'use client'
import Link from "next/link";
import { FaChevronRight, FaLink } from "react-icons/fa";

export default function EndpointsList({ endpoints, colors, data }) {

    return (
        <div className="w-full [&>*:nth-child(odd)]:bg-gray-300/[0.06] backdrop-opacity-10">

            {  
                endpoints?.map((endpoint, i) => (
                    <Link href={{
                            pathname: '/dashboard/inbox',
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