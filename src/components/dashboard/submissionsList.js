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
                        submissions?.splice(0,1).map(submission => (
                            <div key={submission._id} className="grid grid-cols-3 flex-1 items-center overflow-x-auto">
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