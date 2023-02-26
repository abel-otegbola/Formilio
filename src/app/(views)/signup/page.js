'use client'

import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { validateSignup } from "@/helper/validateSignup";
import { useRouter } from "next/navigation";
import Popup from "@/components/popup";

export default function Signup() {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const router = useRouter()

    const submitForm = async (e) => {
        e.preventDefault();
        let valid = validateSignup({ fullname, email, password, cpassword }).error
        if (!valid) {
            setLoading(true);
            await fetch(`/api/auth/signup`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullname, email, password })
            })
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess("User created successfully")
                    router.push("/login")
                }
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            }) 
            
        }
        else {
            setError(valid)
        }
    }

    return (
        <div className="md:px-[10%] px-[5%] py-[5%] dark:bg-gray-900">
            <form className="p-[20px] md:px-[40px] bg-slate-100 dark:bg-gray-800 rounded md:w-[500px] w-full m-auto" method="post">
                <h1 className="text-center py-6 text-blue text-2xl font-bold">Create your Account</h1>
                <p className="text-center pb-10">Sign up to create and manage your forms</p>

                { (error !== "") ? <Popup text={error} color={"red"} /> : "" }
                { (success !== "") ? <Popup text={success} color={"green"} /> : "" }

                <label className="pb-2" htmlFor="fullname">Full Name:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-5">
                    <FaEnvelope className="m-2 mx-3 text-xl text-gray-500" />
                    <input type="text" id="fullname" name="fullname" onChange={(e) => setFullname(e.target.value)} className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " />
                </div>

                <label className="pb-2" htmlFor="email">Email:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-5">
                    <FaEnvelope className="m-2 mx-3 text-xl text-gray-500" />
                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}  className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " />
                </div>
                
                <label className="pb-2" htmlFor="password">Password:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-5">
                    <FaLock className="m-2 mx-3 text-xl text-gray-500" />
                    <input type={show? "text" : "password"} id="password" onChange={(e) => setPassword(e.target.value)}  name="password" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " />
                    <div className="m-2 mx-3 text-xl text-gray-500" onClick={() => setShow(!show)}>{show ? <FaEyeSlash /> : <FaEye />}</div>
                </div>
                  
                <label className="pb-2" htmlFor="cpassword">Confirm Password:</label>
                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-5">
                    <FaLock className="m-2 mx-3 text-xl text-gray-500" />
                    <input type={show? "text" : "password"} id="cpassword" onChange={(e) => setCPassword(e.target.value)} className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " />
                    <div className="m-2 mx-3 text-xl text-gray-500 " onClick={() => setShow(!show)}>{show ? <FaEyeSlash /> : <FaEye />}</div>
                </div>

                <button type="submit" onClick={(e) => submitForm(e)} className="flex justify-center items-center p-[13px] w-full bg-blue hover:bg-hoverblue text-white rounded mt-5">{loading ? <CgSpinner className="animate-spin" /> : ""} Sign up</button>

                <div className="my-10 flex flex-wrap justify-between">
                    <p>Already have an Account? <a href="/login" className="text-blue mt-3">Signin</a></p>
                </div>
            </form>
        </div>
    )
}