'use client'
import Header from "@/components/dashboard/header";
import SettingBox from "@/components/dashboard/settingBox";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import { FaCogs, FaEdit, FaMoon, FaSun, FaTrashAlt, FaUserCircle } from "react-icons/fa";

export default function Settings() {
    const [theme, setTheme] = useState("theme")
    const { data: session } = useSession()

    const handleDarkmode = (mode) => {
        if(mode === "theme") {
            // Whenever the user explicitly chooses to respect the OS preference
            localStorage.removeItem('theme')
            setTheme("theme")
        }
        else {
            localStorage.theme = mode
            setTheme(mode)
        }
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
        document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        setTheme(!localStorage.theme || localStorage.theme === null ? "theme" : localStorage.theme)
    }, [])

    return (
        <div className="md:px-[10%] px-[5%] PY-[40px]">
            <Header text={"SETTINGS"} icon={<FaCogs />}></Header>

            <SettingBox text={"Interface Theme"} subtext={"Use the default UI theme or Choose between light and dark theme."}>
                <div className="flex flex-wrap gap-2">
                    <button className={`flex items-center p-2 px-6 rounded ${theme === "theme" ? "bg-blue text-white" : "bg-gray-200 text-black"}`} onClick={() => handleDarkmode("theme")}>
                        <FaEdit className="mr-2"/>
                        System preference
                    </button>
                    <button className={`flex items-center p-2 px-6 rounded ${theme === "light" ? "bg-blue text-white" : "bg-gray-200 text-black"}`} onClick={() => handleDarkmode("light")}>
                        <FaSun className="mr-2"/> 
                        Light
                    </button>
                    <button className={`flex items-center p-2 px-6 rounded ${theme === "dark" ? "bg-blue text-white" : "bg-gray-200 text-black"}`} onClick={() => handleDarkmode("dark")}>
                        <FaMoon className="mr-2"/> 
                        Dark
                    </button>
                </div>
            </SettingBox>
            
            {(session) ?  
            <SettingBox text={"Account settings"} subtext={"Information, account settings"}>
                <div className=" border border-gray-100/[0.1] border-b-gray-300/[0.2] pb-3">
                    <div className="">
                    {(!session.user.image)
                        ? <FaUserCircle className="p-1 mt-6 mx-2 text-gray-300 w-[40px] h-[40px] bg-gray-400 rounded-full" /> : 
                        <img src={session.user.image} alt="user" width={40} height={40} className="rounded-full bg-gray-400 mr-2 border-2 border-white shadow-lg" />
                    }
                    </div>
                    <div className="m-2 mt-6">
                        <p className="opacity-[0.7] mb-2 text-sm"> Full Name:</p> 
                        <p>{session.user.name}</p>
                    </div>
                    <div className="m-2 mt-6">
                        <p className="opacity-[0.7] mb-2 text-sm"> Email Address:</p> 
                        <p>{session.user.email}</p>
                    </div>
                </div> 

                <p className="dark:opacity-[0.5] py-4">Account deletion</p>
                <button className=" flex items-center p-2 px-6 bg-red-500 hover:bg-red-700 text-white rounded">
                    <FaTrashAlt className="mr-2"/> 
                    Delete my account
                </button>
            </SettingBox>: 
            "" }
        </div>
    )
}