'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaEnvelope, FaEye, FaEyeSlash, FaGithub, FaLock } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc'

export default function Login() {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()

    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        const res = await signIn("Credentials", { redirect: false, email, password, callbackUrl: `${window.location.origin}/dashboard` })
        if(res?.error) {
            setError(res.error)
        }
        else {
            setError(null)
        }
        if (res.msg) {
            router.push("/dashboard")
        }
        settLoading(false)
    }

    return (
        <div className="md:px-[10%] px-[5%] py-[5%] dark:bg-gray-900">
            <form className="p-[20px] md:px-[40px] bg-slate-100 dark:bg-gray-800 rounded md:w-[500px] w-full m-auto">

                <h1 className="text-center py-6 text-blue text-2xl font-bold">Sign in to your Account</h1>
                <p className="text-center pb-10">Sign in to access all your forms, manage submissions and create new ones with ease</p>
                
                { (error !== "") ? <p className="text-red-500 text-center p-4">{error}</p> : "" }

                <div className="py-[30px] grid md:grid-cols-2 grid-cols-1 gap-2">
                    {
                        [{key: 1, id: "google", name: "Google"}, {key: 2, id: "github", name: "Github"}].map((provider) => ( 
                            <a key={provider.key} onClick={() => signIn(provider.id, {callbackUrl: `${window.location.origin}/dashboard`})} className="flex items-center justify-center bg-white dark:bg-gray-900 cursor-pointer p-4 my-2 rounded border border-gray-400">
                                { provider.name === "Google" ? <FcGoogle className="mr-2" />: <FaGithub className="mr-2" /> } 
                                Login with {provider.name}
                            </a>
                        ))
                    }
                </div>

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

                <button type="submit" onClick={e => submitForm(e)} className="flex justify-center items-center p-[13px] w-full bg-blue hover:bg-hoverblue text-white rounded mt-5">{loading ? <CgSpinner className="animate-spin" /> : ""} Login</button>

                <div className="my-10 flex flex-wrap justify-between">
                    <p>Don't have an Account? <a href="/signup" className="text-blue">Signup</a></p>
                    <a href="/forgotPassword" className="text-red-500">Forgot Password?</a>
                </div>
            </form>
        </div>
    )
}