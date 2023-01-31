'use client'
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

export default function Login() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        console.log("hello")
    })

    return (
        <div className="px-[10%] py-[5%]">
            <form className="p-[20px] md:px-[40px] bg-slate-100 dark:bg-slate-100/[0.1] rounded md:w-[500px] w-full m-auto">
                <h1 className="text-center py-2 text-2xl font-bold">Sign in to your Account</h1>
                <p className="text-center pb-10">Sign in to access all your forms, manage submissions and create new ones with ease</p>

                <label className="pb-2">Email:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-5">
                    <FaEnvelope className="m-2 border text-xl text-gray-500 border-gray-300/[0.2]" />
                    <input type="email" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue " />
                </div>
                
                <label className="pb-2">Password:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-5">
                    <FaLock className="m-2 border text-xl text-gray-500 border-gray-300/[0.2]" />
                    <input type={show ? "text" : "password"} className="p-[12px] flex-1 focus:outline-2 focus:outline-blue " />
                    <div className="p-2 px-3 border text-xl text-gray-500 border-gray-300/[0.2]" onClick={() => setShow(!show)}>
                        {show ? <FaEyeSlash/> : <FaEye />}
                    </div>
                </div>

                <button type="submit" className="p-[13px] w-full bg-blue hover:bg-hoverblue text-white rounded mt-5">Login</button>

                <div className="my-10 flex flex-wrap justify-between">
                    <p>Don't have an Account? <a href="/signup" className="text-blue">Signup</a></p>
                    <a href="/forgotPassword" className="text-red-500">Forgot Password?</a>
                </div>
            </form>
        </div>
    )
}