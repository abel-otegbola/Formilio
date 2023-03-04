import { fetchData } from "@/helper/fetchData";
import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import Popup from "./popup";
import SubmissionModal from "./submissionModal";


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
                        <button className="p-2 px-6 rounded bg-blue text-white hover:bg-hoverblue" onClick={() => window.location.reload()}>Refresh</button>
                    </div>
                </div>
                :
                (submissionsLoading) ? 
                <div className="flex justify-center items-center min-h-[70px]">
                    <FiLoader className="animate-spin text-blue text-3xl" />    
                </div> : 
                submissions && submissions.map(submission => (
                    <SubmissionModal key={submission._id} data={submission.data && JSON.parse(submission.data)} submission={submission} setSuccess={setSuccess} setError={setError} />
                ))
            }
        </div>
    )
}