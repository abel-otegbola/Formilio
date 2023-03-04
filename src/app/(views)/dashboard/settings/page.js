'use client'
import Header from "@/components/header";
import { useEffect, useState } from "react";
import { FaCogs, FaEdit, FaMoon, FaSun, FaTrashAlt } from "react-icons/fa";

export default function Settings() {
    const [theme, setTheme] = useState("theme")

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
        setTheme(localStorage.theme === null ? "theme" : localStorage.theme)
    }, [])

    return (
        <div className="px-4">
            <Header text={"Settings"} icon={<FaCogs />}></Header>

            <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-8">
                <h3 className="text-lg font-semibold p-4 py-6 bg-gray-100 dark:bg-gray-800">Interface Theme</h3>
                <p className="opacity-[0.5] p-4">Use the default UI theme or Choose between light and dark theme.</p>
                <div className="flex flex-wrap gap-2 mx-4">
                    <button className={`flex items-center p-2 px-6 rounded ${theme === "theme" ? "bg-blue text-white" : "bg-gray-100 text-black"}`} onClick={() => handleDarkmode("theme")}>
                        <FaEdit className="mr-2"/> 
                        System preference
                    </button>
                    <button className={`flex items-center p-2 px-6 rounded ${theme === "light" ? "bg-blue text-white" : "bg-gray-100 text-black"}`} onClick={() => handleDarkmode("light")}>
                        <FaSun className="mr-2"/> 
                        Light
                    </button>
                    <button className={`flex items-center p-2 px-6 rounded ${theme === "dark" ? "bg-blue text-white" : "bg-gray-100 text-black"}`} onClick={() => handleDarkmode("dark")}>
                        <FaMoon className="mr-2"/> 
                        Dark
                    </button>
                </div>
            </div>
            
            <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-8">
                <h3 className="text-lg font-semibold p-4 py-6 bg-gray-100 dark:bg-gray-800">Account</h3>
                <div className="mx-4">
                    <p className="opacity-[0.5] py-4">Information, account settings</p>
                    <a href={"/dashboard/profile"} className="w-fit flex items-center p-2 px-6 bg-blue text-white rounded hover:bg-hoverblue">
                        Profile
                    </a>
                    <p className="opacity-[0.5] py-4">Account deletion</p>
                    <button className=" flex items-center p-2 px-6 bg-red-500 hover:bg-red-700 text-white rounded">
                        <FaTrashAlt className="mr-2"/> 
                        Delete my account
                    </button>
                </div>
            </div>
        </div>
    )
}