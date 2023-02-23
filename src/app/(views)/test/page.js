'use client'
import React from "react";
import { useSearchParams } from "next/navigation"
import { FaEnvelope, FaPen, FaUser } from "react-icons/fa";

export default function Login() {
    const query = useSearchParams().get("endpoint")

    return (
        <div className="md:px-[10%] px-[5%] py-[5%] dark:bg-gray-900">
            <form action={`${process.env.NEXTAUTH_URL}/api/endpoint/${query}`} className="p-[20px] md:px-[40px] bg-slate-100 dark:bg-gray-800 rounded md:w-[500px] w-full m-auto">

                <h1 className="text-center py-6 text-blue text-2xl font-bold">Test the endpoint generated</h1>
                <p className="text-center pb-10">Fill the form and submit</p>

                <label className="mb-2">Full name:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                    <FaUser className="m-2 mx-3 text-xl text-gray-500" />
                    <input type="text" name="fullname" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " required={true} />
                </div>

                <label className="mb-2">Email:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                    <FaEnvelope className="m-2 mx-3 text-xl text-gray-500" />
                    <input type="email" name="email" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " required={true} />
                </div>
                
                <label className="mb-2">Subject:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                    <FaPen className="m-2 mx-3 text-xl text-gray-500" />
                    <input type="text" name="subject" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " required={true} />
                </div>

                <label className="mb-2">Message:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                    <FaPen className="m-2 mx-3 text-xl text-gray-500" />
                    <textarea type="text" name="message" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " required={true}></textarea>
                </div>

                <button type="submit" className="flex justify-center items-center p-[13px] w-full bg-blue hover:bg-hoverblue text-white rounded mt-5">Submit</button>

            </form>
        </div>
    )
}