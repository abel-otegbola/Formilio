'use client'
import React, { useState } from "react";
import { useSearchParams } from "next/navigation"
import { FaEnvelope, FaPen, FaUser } from "react-icons/fa";
import SubmissionList from "@/components/submissionsList";

export default function Login() {
    const [submissions, setSubmissions] = useState([])
    const query = useSearchParams().get("endpoint")
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submitForm = async (e) => {
        e.preventDefault()
        await fetch(`/api/endpoint/${query}`, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fullname, email, message })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }



    return (
        <div className="md:px-[10%] px-[5%] py-[5%] dark:bg-gray-900">

            <h1 className="text-center py-6 text-blue text-2xl font-bold">TEST</h1>
            <p className="text-center pb-10">Fill the form and submit</p>

            <div className="flex flex-wrap">
                <form onSubmit={(e) => submitForm(e)} method="post" className="md:w-[50%] w-full p-[20px] md:px-[40px] bg-slate-100 dark:bg-gray-800 rounded">

                    <label className="mb-2">Full name:</label>
                    <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                        <FaUser className="p-2 px-3 text-4xl text-gray-500" />
                        <input type="text" name="fullname" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " onChange={(e) => setFullname(e.target.value)} required={true} />
                    </div>

                    <label className="mb-2">Email:</label>
                    <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                        <FaEnvelope className="p-2 px-3 text-4xl text-gray-500" />
                        <input type="email" name="email" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " onChange={(e) => setEmail(e.target.value)} required={true} />
                    </div>

                    <label className="mb-2">Message:</label>
                    <div className="flex w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                        <FaPen className="p-2 px-3 text-4xl text-gray-500" />
                        <textarea type="text" name="message" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " onChange={(e) => setMessage(e.target.value)} required={true}></textarea>
                    </div>

                    <button type="submit" className="flex justify-center items-center p-[13px] w-full bg-blue hover:bg-hoverblue text-white rounded mt-5">Submit</button>

                </form>

                <div className="md:w-[50%] w-full p-[20px] bg-gray-200/[0.05] md:px-[40px]">
                    <h3 className="border border-transparent border-b-blue p-2 text-blue">Submissions</h3>
                    <SubmissionList type={"getSubmissions"} router={query} setSubmissions={setSubmissions} limit={5}/>
                </div>
            </div>

        </div>
    )
}