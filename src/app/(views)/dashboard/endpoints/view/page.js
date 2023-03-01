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


    return(
        <div className="relative px-4 w-full">

            <div className="my-6">
                <h1 className="text-3xl font-semibold py-2">{title}</h1>
                <p>You have <span className="text-blue font-semibold p-2">{submissions?.length}</span> {submissions?.length === 1 ? "Submission" : "Submissions"}</p>
            </div>

            <div className="w-full bg-gray-200[0.2] py-4 rounded">
                <div className="flex gap-2">
                    {
                        ["Submissions", "Setup", "Settings"].map((item, index) => (
                            <p 
                                key={index} 
                                className={`p-3 px-6 rounded border text-sm hover:border-blue hover:text-blue text-center cursor-pointer border  ${active === item ? "border-blue text-blue shadow-lg" : "border-transparent"}`}
                                onClick={() => setActive(item)}
                            >{item}</p>
                        ))
                    }
                </div>
            </div>
            <div className={`${active === "Submissions"? "block" : "hidden"}`}>
                <SubmissionList type={"getSubmissions"} router={router} setSubmissions={setSubmissions} />
            </div>
            <div className={`w-full overflow-x-auto dark:bg-gray-800 ${active === "Setup"? "block" : "hidden"}`}>
                <Setup endpoint={router} />
            </div>
            <div className={`w-full overflow-x-auto dark:bg-gray-800 ${active === "Settings"? "block" : "hidden"}`}>
                <Settings id={router} />
            </div>
        </div>
    )
}