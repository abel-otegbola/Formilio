'use client'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Setup from "@/components/setup";
import SubmissionModal from "@/components/submissionModal";
import Popup from "@/components/popup";

export default function View({ router }) {
    const [submissions, setSubmissions] = useState([])
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [active, setActive] = useState("Submissions")
    const { data: session } = useSession()

    const handleMsg = (msg, action) => {
        action(msg)
        setTimeout(() => {
            action("")
        }, 3000)
    }

    useEffect(() => {
        const fetchEndpoints = async () => {
            if(session) {
                await fetch(`/api/getSubmissions/${router}`)
                .then(res => res.json())
                .then(data => {
                    if(data.error) {
                       handleMsg(data.error, setError)
                    }
                    else {
                        setSubmissions(data.data)
                    }
                })
                .catch(err => {
                    handleMsg(err, setError)
                }) 
            }
        }
        fetchEndpoints()
    }, [router, success])



    return(
        <div className="relative lg:px-4 w-full shadow-lg">
            <div className="w-full bg-gray-200[0.2] py-4 rounded">
                <div className="flex gap-1">
                    {
                        ["Submissions", "Setup", "Analytics", "Settings"].map((item, index) => (
                            <p 
                                key={index} 
                                className={`p-3 rounded w-full border text-sm hover:bg-white hover:shadow-lg hover:text-black text-center mr-2 cursor-pointer ${active === item ? "bg-white shadow-lg text-black" : " border-gray-100/[0.3]"}`}
                                onClick={() => setActive(item)}
                            >{item}</p>
                        ))
                    }
                </div>
                
                { (error !== "") ? <Popup text={error} color={"red"} /> : "" }
                { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
            </div>
            <div className={`dark:bg-gray-800 ${active === "Submissions"? "block" : "hidden"}`}>

                {
                    submissions.map(submission => (
                        <SubmissionModal key={submission._id} data={JSON.parse(submission.data)} submission={submission} setSuccess={setSuccess} setError={setError} handleMsg={handleMsg} />
                    ))
                }
            </div>
            <div className={`dark:bg-gray-800 ${active === "Setup"? "block" : "hidden"}`}>
                <Setup endpoint={router} />
            </div>
        </div>
    )
}