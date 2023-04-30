import { useState } from "react";
import Popup from "../general/popup";
import Submission from "./submission";


export default function SubmissionList({ submissions }) {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    return (
        <div>
            
            { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
            { (error !== "") ? <Popup text={error} color={"red"} /> : "" }

            {
                <div>                            
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