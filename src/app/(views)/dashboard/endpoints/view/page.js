'use client'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Submission from "@/components/submission";
import { FaTrashAlt } from "react-icons/fa";
import { convert } from "@/helper/convertDate";
import { getInitials } from "@/helper/getInitials";
import Setup from "@/components/setup";
import SubmissionModal from "@/components/submissionModal";

export default function View({ router }) {
    const [submissions, setSubmissions] = useState([])
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [active, setActive] = useState("Submissions")
    const [openModal, setOpenModal] = useState(false)
    const [activeSubmission, setActiveSubmission] = useState({})
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
                       console.log(data.error)
                    }
                    else {
                        setSubmissions(data.data)
                    }
                })
                .catch(err => {
                    console.log(err)
                }) 
            }
        }
        fetchEndpoints()
    }, [router, success])

    
    const handleDelete=  async (id) => {
        if(session) {
            await fetch(`/api/deleteSubmission/${id}`)
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    handleMsg(data.error, setError)
                }
                else {
                    handleMsg("Deleted successfully", setSuccess)
                }
            })
            .catch(err => {
                handleMsg(err, setError)
            }) 
        }
    }

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
                
                { (error !== "") ? <p className="text-red-500 text-center p-4">{error}</p> : "" }
                { (success !== "") ? <p className="text-green-500 text-center p-4">{success}</p> : "" }
            </div>
            <div className={`dark:bg-gray-800 ${active === "Submissions"? "block" : "hidden"}`}>

                {
                    submissions.map(submission => (
                        <div key={submission._id} className="flex items-start bg-gray-100 dark:bg-gray-900 border border-transparent border-y-gray-300/[0.2] hover:bg-blue hover:text-white cursor-pointer" onClick={() => {setOpenModal(true); setActiveSubmission(submission)}}>
                            <p className="p-2 px-[10px] border-2 border-white/[0.5] bg-fuchsia-500/[0.2] uppercase text-[12px] font-semibold m-3 shadow-lg rounded-full">{getInitials(JSON.parse(submission.data).email || "user")}</p>
                            <div className="grid gap-2 md:grid-cols-3 flex-1">
                                { submission.data && <Submission data={JSON.parse(submission.data)} />}
                            </div>
                            <p className="p-5 text-[10px]">{convert(submission.createdAt)}</p>
                            <FaTrashAlt className="text-red-400 m-5 cursor-pointer" onClick={() => handleDelete(submission._id)}/>

                            {openModal ? <SubmissionModal data={JSON.parse(activeSubmission.data)} closeModal={setOpenModal} open={openModal} /> : ""}
                        </div>
                    ))
                }
            </div>
            <div className={`dark:bg-gray-800 ${active === "Setup"? "block" : "hidden"}`}>
                <Setup endpoint={router} />
            </div>
        </div>
    )
}