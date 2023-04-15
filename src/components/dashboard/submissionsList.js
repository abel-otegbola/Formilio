import { fetchData } from "@/helper/fetchData";
import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import Popup from "../general/popup";
import Submission from "./submission";


export default function SubmissionList({ type, router, setSubmissions, limit }) {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    
    const { data: submissions, isLoading: submissionsLoading, error: submissionsError } = fetchData(type, router, true, limit)

    useEffect(() => {
        setSubmissions(submissions)
    }, [submissions])

    return (
        <div>
            
            { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
            { (error !== "") ? <Popup text={error} color={"red"} /> : "" }

            {
                submissionsError || submissions?.error
                ? 
                <div>
                    <Popup text={submissionsError || submissions.error} color={"red"} /> 
                    <div className="py-6">
                        <p className="mb-4">Could not connect.</p>
                        <button className="p-2 text-sm px-6 rounded bg-blue text-white hover:bg-hoverblue" onClick={() => window.location.reload()}>Refresh</button>
                    </div>
                </div>
                :
                (submissionsLoading) ? 
                <div className="flex justify-center items-center min-h-[70px]">
                    <FiLoader className="animate-spin text-blue text-3xl" />    
                </div> : 

                <div>
                    {
                        submissions?.splice(0,1).map(submission => (
                            <div className="grid grid-cols-3 flex-1 items-center overflow-x-auto">
                            {
                                Object.keys(submission.data && JSON.parse(submission.data)).splice(0, 3).map((key, index) => (
                                    <div key={index} className="py-2 px-4 overflow-hidden">
                                        <h5 className="text-[12px] opacity-[0.5] uppercase">{key}</h5>
                                    </div>
                                ))
                            }
                            </div>
                        ))
                    }
                            
                {
                     submissions?.map(submission => (
                        <div key={submission._id} >
                            <Submission data={submission.data && JSON.parse(submission.data)} submission={submission} setSuccess={setSuccess} setError={setError} />
                        </div>
                    ))
                }
                </div>
            }
        </div>
    )
}