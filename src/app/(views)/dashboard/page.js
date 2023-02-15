'use client'
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession()

    return (
        <div className="px-4">
            <div className="w-full h-[130px] bg-blue p-4 mb-4 rounded">
                <h4 className="text-white my-4"><span className="text-lg">Welcome:</span> {!session ?  "" : session.user.name}</h4>
                <div className="flex">
                    <a href="/dashboard/builder" className="p-3 px-6 rounded bg-hoverblue text-white mr-2 hover:bg-blue hover:border hover:border-white">Start building</a>
                    <a href="/dashboard/endpoints" className="p-3 px-6 rounded bg-hoverblue text-white mr-2 hover:bg-blue hover:border hover:border-white">Generate endpoints</a>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="md:w-[70%] w-full bg-gray-100 dark:bg-gray-800 p-2">

                </div>
                <div className="md:w-[30%] w-full p-2">
                    <h4 className="p-2 font-semibold text-blue">TEMPLATES</h4>
                </div>
            </div>
        </div>
    )
}