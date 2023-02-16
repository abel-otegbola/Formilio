'use client'
import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

export default function Login() {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true);
            await fetch(`/api/endpoint/abel15655@gmail.com/Contracts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setError(data.error)
                }
                else {
                    setError(data.msg)
                }
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            }) 
    }

    return (
        <div className="md:px-[10%] px-[5%] py-[5%] dark:bg-gray-900">
            <form className="p-[20px] md:px-[40px] bg-slate-100 dark:bg-gray-800 rounded md:w-[500px] w-full m-auto">

                <h1 className="text-center py-6 text-blue text-2xl font-bold">Sign in to your Account</h1>
                <p className="text-center pb-10">Sign in to access all your forms, manage submissions and create new ones with ease</p>
                
                { (error !== "") ? <p className="text-red-500 text-center p-4">{error}</p> : "" }

                <label className="mb-2">Email:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                    <FaEnvelope className="m-2 mx-3 text-xl text-gray-500" />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " />
                </div>
                
                <label className="mb-2">Password:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                    <FaLock className="m-2 mx-3 text-xl text-gray-500" />
                    <input type={show ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " />
                    <div className="p-2 px-3 text-xl text-gray-500" onClick={() => setShow(!show)}>
                        {show ? <FaEyeSlash/> : <FaEye />}
                    </div>
                </div>

                <button type="submit" onClick={e => submitForm(e)} className="flex justify-center items-center p-[13px] w-full bg-blue hover:bg-hoverblue text-white rounded mt-5">{loading ? <CgSpinner className="animate-spin" /> : ""} Submit</button>

            </form>
        </div>
    )
}