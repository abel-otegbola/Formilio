'use client'

import Link from "next/link";
import { FiBell, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaSignOutAlt, FaTimes, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { closeBlock } from "@/helper/closeBlock";
import Searchbar from "./searchbar";

export default function Topbar() {
    const [open, setOpen] = useState(false)
    const router = usePathname();
    const { data: session } = useSession()
    const menuRef = useRef(null)

    // Close navbar for mobile when clicked outside
    useEffect(() => {
        closeBlock(menuRef, open, setOpen)
    }, [open])

    return (
        <div className="fixed w-full flex shadow-sm font-body justify-between items-center p-2 md:py-2 py-3 md:px-[10%] px-[5%] backdrop-blur-md bg-white/[0.7] dark:bg-gray-900/[0.7] border border-slate-50/[0.1] border-b-gray-100 dark:border-b-gray-200/[0.1] z-[100]">
            
            <a href="/" className={`flex items-center text-2xl font-display ${router.indexOf("dashboard") !== -1 ? "md:ml-0 ml-[40px]" : ""}`}><Image src={"/logo.png"} className="mr-1" width={15} height={25} alt="formilio logo" />ormilio<span className="text-blue">.</span></a>
            
            {/* Navigation menu */}
            <ul ref={menuRef} className={`bg-white md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent flex md:flex-row flex-col md:w-auto md:h-auto h-screen md:relative md:shadow-none overflow-hidden shadow-lg fixed top-0 right-0 transition-all duration-700  ml-[4%] z-10 ${open ? "w-[75%]": "w-0"}`}>
                
                {(session) ?  // Show user details for mobile menu if signed in
                <a href="/dashboard" className="md:hidden border border-gray-100/[0.1] border-b-gray-300/[0.2] p-6">
                    <div className="flex items-center">
                        <img src={session.user.image} alt="user" width={25} height={25} className="rounded-full mr-2" />
                        <div>
                            <p> {session.user.name}</p> 
                            <p className="text-[9px]">{session.user.email}</p>
                        </div>
                    </div>
                </a> : ""}

                <li className="flex md:p-0 p-2"><a href="/" className={`lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full hover:text-blue ${router === "/"? "text-blue": ""}`}>Home</a></li>
                <li className="flex md:p-0 p-2"><a href="/about" className={`lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full hover:text-blue ${router === "/about"? "text-blue": ""}`}>About</a></li>
                <li className="flex md:p-0 p-2"><a href="/documentations" className={`lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full hover:text-blue ${router === "/documentations"? "text-blue": ""}`}>Doc</a></li>
                <li className="flex md:p-0 p-2"><a href="/contact" className={`lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full hover:text-blue ${router === "/contact"? "text-blue": ""}`}>Contact</a></li>
                {
                    session ? // Show logout button instead of login if signed in
                    <>
                        <li className="flex md:p-0 p-2 mx-4"><a href="/dashboard" className={`md:hidden flex items-center rounded lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full bg-blue text-white`}><FaUserAlt className="mr-3" /> Dashboard</a></li>
                        <li className="flex md:p-0 p-2 mx-4"><a href="#" onClick={() => signOut()} className={`md:hidden flex items-center rounded lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full bg-blue text-white`}><FaSignOutAlt className="mr-3" /> Logout</a></li>
                    </> :
                    
                    <Link href="/login" className="md:hidden flex items-center p-[10px] px-4 mx-[4%] mt-4 bg-blue hover:bg-hoverblue text-white rounded"><FiUser className="mr-2"/> Login</Link>
                    
                }
            </ul>
            <div className="flex items-center">
                <Searchbar />
                {
                    (session) ? // Show dashboard button instead of login if signed in
                    <>
                        <Link href="/dashboard/notifications" className="relative mr-[25px] text-gray-500 font-bold text-2xl">
                            <FiBell />
                            <sup className="absolute -top-2 -right-2 p-[5px] py-[7px] text-[8px] bg-purple-400 text-white rounded-full">2</sup>
                        </Link>
                        <Link href="/dashboard" className="w-fit p-1 rounded-full bg-blue/[0.1]">
                            {(!session.user.image)
                            ? <p className="flex items-start pt-[2px] justify-center w-[30px] h-[28px] text-gray-300 bg-gray-400 rounded-full">{session.user.email.charAt(0)}</p> : 
                            <img src={session.user.image} alt="user" width={30} height={30} className="rounded-full bg-gray-400 shadow-lg" />
                            }
                        </Link>
                    </> : 
                    <Link href="/login" className="md:flex hidden items-center p-[10px] px-[20px] bg-blue hover:bg-hoverblue text-white rounded"><FiUser className="mr-2"/> Login</Link>
                }
                <div className="ml-4 text-gray-500 text-2xl md:hidden block z-50" onClick={() =>  setOpen(!open) }>
                    {
                        open ? <FaTimes /> : <FaBars />
                    }
                </div>
            </div>
        </div>
    )
}