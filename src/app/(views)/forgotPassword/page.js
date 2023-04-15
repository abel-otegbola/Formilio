'use client'
import Popup from "@/components/general/popup";
import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";

export default function Login() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        await signIn("credentials", { redirect: false, email, callbackUrl: `/dashboard` })
        .then(res => {
            if(res.ok) {
                setSuccess("Login successful")
                router.push(res.url)
            }
            else {
                setError(res.error)
            }
        })
        .catch(error => console.log(error))
        setLoading(false)
    }

    return (
        <div className="md:px-[10%] px-[5%] py-[5%] dark:bg-gray-900">
            <form className="p-[20px] md:px-[40px] bg-slate-100 dark:bg-gray-800 rounded md:w-[500px] w-full m-auto">

                <h1 className="text-center py-6 text-blue text-2xl font-bold">FORGOT PASSWORD?</h1>
                <p className="text-center pb-10">Input your email to set-up your new password</p>
                
                { (error !== "") ? <Popup text={error} color={"red"} /> : "" }
                { (success !== "") ? <Popup text={success} color={"green"} /> : "" }

                <div className="flex w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 rounded" />
                </div>

                <button type="submit" onClick={e => submitForm(e)} className="flex justify-center items-center p-[13px] w-full bg-blue hover:bg-hoverblue text-white rounded my-[30px]">{loading ? <CgSpinner className="animate-spin" /> : ""}Submit</button>

            </form>
        </div>
    )
}