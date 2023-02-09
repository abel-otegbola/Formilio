'use client'

import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

export default function Signup() {
    const [show, setShow] = useState(false)

    return (
        <div className="md:px-[10%] px-[5%] py-[5%] dark:bg-gray-900">
            <form className="p-[20px] md:px-[40px] bg-slate-100 dark:bg-gray-800 rounded md:w-[500px] w-full m-auto" action="http://localhost:3000/api/auth/signup" method="post">
                <h1 className="text-center py-2 text-2xl font-bold">Create your Account</h1>
                <p className="text-center pb-10">Sign up to create and manage your forms</p>

                <label className="pb-2" htmlFor="fullname">Full Name:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-5">
                    <FaEnvelope className="m-2 mx-3 text-xl text-gray-500" />
                    <input type="text" id="fullname" name="fullname" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " />
                </div>

                <label className="pb-2" htmlFor="email">Email:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-5">
                    <FaEnvelope className="m-2 mx-3 text-xl text-gray-500" />
                    <input type="email" id="email" name="email" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " />
                </div>
                
                <label className="pb-2" htmlFor="password">Password:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-5">
                    <FaLock className="m-2 mx-3 text-xl text-gray-500" />
                    <input type={show? "text" : "password"} id="password" name="password" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " />
                    <div className="m-2 mx-3 text-xl text-gray-500" onClick={() => setShow(!show)}>{show ? <FaEyeSlash /> : <FaEye />}</div>
                </div>
                  
                <label className="pb-2" htmlFor="cpassword">Confirm Password:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-5">
                    <FaLock className="m-2 mx-3 text-xl text-gray-500" />
                    <input type={show? "text" : "password"} id="cpassword" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " />
                    <div className="m-2 mx-3 text-xl text-gray-500 " onClick={() => setShow(!show)}>{show ? <FaEyeSlash /> : <FaEye />}</div>
                </div>

                <button type="submit" onSubmit={() => si} className="p-[13px] w-full bg-blue hover:bg-hoverblue text-white rounded mt-5">Sign up</button>

                <div className="my-10 flex flex-wrap justify-between">
                    <p>Already have an Account? <a href="/login" className="text-blue mt-3">Signin</a></p>
                </div>
            </form>
        </div>
    )
}