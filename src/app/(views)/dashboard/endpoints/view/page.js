'use client'
import { useContext, useState } from "react";
import { useSearchParams } from 'next/navigation'
import Setup from "@/components/dashboard/setup";
import SubmissionList from "@/components/dashboard/submissionsList";
import Settings from "@/components/dashboard/settings";
import { DataContext } from "../../layout";

export default function View() {
    const [active, setActive] = useState("Submissions")
    const router = useSearchParams().get("endpoint")
    const title = useSearchParams().get("title")
    const [limit, setLimit] = useState(7)

    const { submissions } = useContext(DataContext)

    return(
        <div className="px-4 w-full">

            <div className="my-6 md:mx-4">
                <h1 className="text-3xl font-semibold py-2">{title}</h1>
                <p>You have <span className="text-blue font-semibold p-2">{submissions?.filter(item => item.key === router).length}</span>total {submissions?.length === 1 ? "Submission" : "Submissions"}</p>
            </div>

            <div className="w-full bg-gray-200[0.2] py-4 rounded">
                <div className="flex gap-2 p-2 rounded bg-gray-800 text-white">
                    {
                        ["Submissions", "Setup", "Settings"].map((item, index) => (
                            <p 
                                key={index} 
                                className={`p-3 px-6 rounded border text-sm hover:bg-gray-900 hover:dark:bg-gray-900 text-center cursor-pointer border  ${active === item ? "border-white text-white shadow-lg bg-gray-900 dark:shadow-3xl" : "border-transparent"}`}
                                onClick={() => setActive(item)}
                            >{item}</p>
                        ))
                    }
                </div>
            </div>
            <div className={`${active === "Submissions"? "block" : "hidden"} bg-gray-200/[0.05]`}>
                <SubmissionList submissions={submissions?.filter(item => item.key === router)} limit={limit} />
            </div>
            <div className={`w-full dark:bg-gray-800 ${active === "Setup"? "block" : "hidden"}`}>
                <Setup endpoint={router} />
            </div>
            <div className={`w-full ${active === "Settings"? "block" : "hidden"}`}>
                <Settings id={router} />
            </div>
        </div>
    )
}