'use client'
import { useEffect, useState } from "react";
import Setup from "@/components/setup";
import SubmissionModal from "@/components/submissionModal";
import Popup from "@/components/popup";
import { FiLoader } from "react-icons/fi";
import { fetchData } from "@/helper/fetchData";

export default function View({ router }) {
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [active, setActive] = useState("Submissions")

    const handleMsg = (msg, action) => {
        action(msg)
        setTimeout(() => {
            action("")
        }, 3000)
    }

    const { data: submissions, isLoading: submissionsLoading, error: submissionsError } = fetchData("getSubmissions", router)

    useEffect(() => {
        console.log(submissions)
    }, [submissions])

    return(
        <div className="relative lg:px-4 w-full shadow-lg">
            <div className="w-full bg-gray-200[0.2] py-4 rounded">
                <div className="flex">
                    {
                        ["Submissions", "Setup", "Settings"].map((item, index) => (
                            <p 
                                key={index} 
                                className={`p-3 rounded-lg w-full border text-sm hover:border-blue hover:text-blue text-center cursor-pointer border  ${active === item ? "border-blue text-blue" : "border-transparent"}`}
                                onClick={() => setActive(item)}
                            >{item}</p>
                        ))
                    }
                </div>
                
                { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
                { (error !== "") ? <Popup text={error} color={"red"} /> : "" }
            </div>
            <div className={`dark:bg-gray-800 ${active === "Submissions"? "block" : "hidden"}`}>

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