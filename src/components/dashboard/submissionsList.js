import { useState } from "react";
import Popup from "../general/popup";
import Submission from "./submission";


export default function SubmissionList({ submissions }) {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [page, setPage] = useState({ start: 0, end: 7 })

    return (
        <div className="w-full">
            
            { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
            { (error !== "") ? <Popup text={error} color={"red"} /> : "" }

            {
                <div className="w-full overflow-x-auto">              
                {
                     submissions?.slice(page.start, page.end).map(submission => (
                        <div key={submission._id} >
                            <Submission data={submission.data && JSON.parse(submission.data)} submission={submission} setSuccess={setSuccess} setError={setError} />
                        </div>
                    ))
                }
                </div>
            }

            <div className="flex justify-center items-center p-[5%]">
                <div className="flex items-center text-[12px] gap-2">
                    <span className={`p-2 px-4 rounded border border-gray-400/[0.4] hover:bg-blue hover:text-white cursor-pointer ${ page.start < 1 ? "hidden" : "" }`} 
                        onClick={() => setPage({ start: page.start - 7, end: page.end - 7 })}
                    >PREV</span>
                    { page.start/7 !== 0 ? "..." : "" }
                    {
                        submissions &&
                        Array.from({length: Math.round((submissions.length+6)/7)}, (_, i) => i + 1).slice(page.start/7, page.start/7 + 4).map(item => (
                            <span key={item} className={`p-2 px-4 rounded border border-gray-400/[0.4] hover:bg-blue hover:text-white cursor-pointer ${(page.start/7)+1 === item ? "bg-blue text-white": ""}`}
                                onClick={() => setPage({ start: item === 1 ? 0 : (item-1) * 7, end: item * 7 })}
                            >{item}</span>
                        ))
                    }
                    { page.end * 2 < submissions?.length ? "..." : "" }
                    <span className={`p-2 px-4 rounded border border-gray-400/[0.4] hover:bg-blue hover:text-white cursor-pointer ${ page.end > submissions?.length ? "hidden" : "" }`} 
                        onClick={() => setPage({ start: page.start + 7, end: page.end + 7 })}
                    >NEXT</span>
                </div>
            </div>
        </div>
    )
}