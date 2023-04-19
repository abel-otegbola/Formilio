'use client'

import Link from "next/link";
import { FiBell, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaSignOutAlt, FaTimes, FaUserAlt } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { closeBlock } from "@/helper/closeBlock";
import Searchbar from "./searchbar";
import Sidebar from "../dashboard/sidebar";

export default function Topbar() {
    const [open, setOpen] = useState(false)
    const router = usePathname();
    const { data: session } = useSession()
    const menuRef = useRef(null)

    return (
        <>    
        <div className="fixed w-full flex shadow-md font-body justify-between items-center p-2 md:py-2 py-3 md:pl-[10%] pl-[5%] pr-[15%] backdrop-blur-sm bg-white/[0.7] dark:bg-gray-900/[0.7] border border-slate-50/[0.1] border-b-gray-100 dark:border-b-gray-200/[0.1] z-10">
            
            <a href="/" className={`flex items-center text-2xl font-display `}><Image src={"/logo.png"} className="mr-1" width={15} height={25} alt="formilio logo" />ormilio<span className="text-blue">.</span></a>
           
            {/* Navigation menu */}
            
            <ul ref={menuRef} className={`bg-transparent dark:bg-transparent md:flex hidden md:flex-rowmd:w-auto md:h-auto md:relative ml-[4%]`}>
               
                <li className="flex md:p-0 p-2"><a href="/" className={`lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full hover:text-blue ${router === "/"? "text-blue": ""}`}>Home</a></li>
                <li className="flex md:p-0 p-2"><a href="/about" className={`lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full hover:text-blue ${router === "/about"? "text-blue": ""}`}>About</a></li>
                <li className="flex md:p-0 p-2"><a href="/documentations" className={`lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full hover:text-blue ${router === "/documentations"? "text-blue": ""}`}>Documentations</a></li>
                {
                    session ? // Show logout button instead of login if signed in
                    <>
                        <li className="flex md:p-0 p-2 mx-4"><a href="/dashboard" className={`md:hidden flex items-center rounded lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full bg-blue text-white`}><FaUserAlt className="mr-3" /> Dashboard</a></li>
                        <li className="flex md:p-0 p-2 mx-4"><a href="#" onClick={() => signOut()} className={`md:hidden flex items-center rounded lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full bg-blue text-white`}><FaSignOutAlt className="mr-3" /> Logout</a></li>
                    </> :
                    
                    <Link href="/login" className="md:hidden flex items-center p-[10px] px-4 mx-[4%] mt-4 bg-blue hover:bg-hoverblue text-white rounded">Login</Link>
                    
                }
            </ul>
            <div className="flex items-center">
                <Searchbar />
                {
                    (session) ? // Show dashboard button instead of login if signed in
                    <>
                        <Link href="/dashboard" className="w-fit p-1 rounded-full mr-3 bg-blue/[0.1]">
                            {(!session.user.image)
                            ? <p className="flex items-start pt-[2px] justify-center w-[30px] h-[28px] text-gray-300 bg-gray-400 rounded-full">{session.user.email.charAt(0)}</p> : 
                            <img src={session.user.image} alt="user" width={30} height={30} className="rounded-full bg-gray-400 shadow-lg" />
                            }
                        </Link>
                    </> : 
                    <Link href="/login" className="md:flex hidden items-center p-[10px] px-[20px] bg-blue hover:bg-hoverblue text-white rounded"><FiUser className="mr-2"/> Login</Link>
                }
            </div> 
            </div>
            <div className={`${router.indexOf("dashboard") !== -1 ? "md:hidden" : ""} fixed md:top-[1%] top-[1.7%] ml-4 text-gray-500 text-2xl p-4 transition-all duration-700 z-50 ${open ? "md:right-[3%] right-[3%]": " md:right-[10%] right-[5%]"}`} onClick={() =>  setOpen(!open) }>
                {
                    open ? <FaTimes /> : <FaBars />
                }
            </div>
            <div className={`${router.indexOf("dashboard") !== -1 ? "md:hidden" : ""} absolute top-0 right-0 h-screen z-20`}>
                <Sidebar open={open} setOpen={setOpen} />
            </div>
        </>
    )
}