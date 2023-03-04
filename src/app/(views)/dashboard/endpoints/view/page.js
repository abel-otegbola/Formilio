'use client'
import { useState } from "react";
import { useSearchParams } from 'next/navigation'
import Setup from "@/components/setup";
import SubmissionList from "@/components/submissionsList";
import Settings from "@/components/settings";

export default function View() {
    const [submissions, setSubmissions] = useState([])
    const [active, setActive] = useState("Submissions")
    const router = useSearchParams().get("endpoint")
    const title = useSearchParams().get("title")
    const [limit, setLimit] = useState(7)


    return(
        <div className="relative px-4 w-full">

            <div className="my-6 md:mx-4">
                <h1 className="text-3xl font-semibold py-2">{title}</h1>
                <p>You have <span className="text-blue font-semibold p-2">{submissions?.length}</span> new {submissions?.length === 1 ? "Submission" : "Submissions"}</p>
            </div>

            <div className="w-full bg-gray-200[0.2] py-4 rounded">
                <div className="flex gap-2">
                    {
                        ["Submissions", "Setup", "Settings"].map((item, index) => (
                            <p 
                                key={index} 
                                className={`p-3 px-6 rounded border text-sm hover:border-blue hover:text-blue text-center cursor-pointer border  ${active === item ? "border-blue text-blue shadow-lg dark:shadow-xl" : "border-transparent"}`}
                                onClick={() => setActive(item)}
                            >{item}</p>
                        ))
                    }
                </div>
            </div>
            <div className={`${active === "Submissions"? "block" : "hidden"}`}>
                <SubmissionList type={"getSubmissions"} router={router} setSubmissions={setSubmissions} limit={limit} />
                <div className="flex justify-center">
                {
                    submissions?.length < limit ?
                    <p className="py-6">End of submission list</p>
                    :
                    <button className="p-2 px-6 rounded bg-blue hover: bg-hoverblue my-6 mx-auto" onClick={() => setLimit(limit + 5)}>Load more</button>
                }
            </div>
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