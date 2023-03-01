'use client'
import { useState } from "react";
import { useSearchParams } from 'next/navigation'
import Setup from "@/components/setup";
import SubmissionModal from "@/components/submissionModal";
import Popup from "@/components/popup";
import { FiLoader } from "react-icons/fi";
import { fetchData } from "@/helper/fetchData";

export default function View() {
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [active, setActive] = useState("Submissions")
    const router = useSearchParams().get("endpoint")
    const title = useSearchParams().get("title")

    const handleMsg = (msg, action) => {
        action(msg)
        setTimeout(() => {
            action("")
        }, 3000)
    }

    const { data: submissions, isLoading: submissionsLoading, error: submissionsError } = fetchData("getSubmissions", router)

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
                                className={`p-3 rounded w-full border text-sm hover:border-blue hover:text-blue text-center cursor-pointer border  ${active === item ? "border-blue text-blue" : "border-transparent"}`}
                                onClick={() => setActive(item)}
                            >{item}</p>
                        ))
                    }
                </div>
                
                { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
                { (error !== "") ? <Popup text={error} color={"red"} /> : "" }
            </div>
            <div className={`dark:bg-gray-800 ${active === "Submissions"? "block" : "hidden"} [&>*:nth-child(odd)]:bg-gray-300/[0.3]`}>

                {
                submissionsError || submissions?.error
                ? 
                <Popup text={submissionsError || submissions.error} color={"red"} /> 
                :
                (submissionsLoading) ? 
                    <div className="flex justify-center items-center min-h-[70px]">
                        <FiLoader className="animate-spin text-blue text-3xl" />    
                    </div> : 
                    submissions && submissions.map(submission => (
                        <SubmissionModal key={submission._id} data={submission.data && JSON.parse(submission.data)} submission={submission} setSuccess={setSuccess} setError={setError} handleMsg={handleMsg} />
                    ))
                }
            </div>
            <div className={`w-full overflow-x-auto dark:bg-gray-800 ${active === "Setup"? "block" : "hidden"}`}>
                <Setup endpoint={router} />
            </div>
        </div>
    )
}