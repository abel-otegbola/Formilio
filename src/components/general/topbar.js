'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { FaBars, FaSignOutAlt, FaTimes, FaUserAlt } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Searchbar from "./searchbar";
import { FiBell, FiHome, FiInfo, FiLink, FiServer, FiSettings } from "react-icons/fi";

export default function Topbar() {
    const [open, setOpen] = useState(false)
    const path = usePathname();
    const { data: session } = useSession()
    const menuRef = useRef(null)

    return (
        <>    
            <div className="fixed w-full flex shadow-sm justify-between items-center font-semibold p-2 md:py-[6px] py-3 md:px-[10%] px-[5%] backdrop-blur-sm bg-white/[0.7] dark:bg-black/[0.7] z-10">
            
                <a href="/" title="formilio" className={`flex gap-2 text-xl items-center text-blue`}>
                    <Image src={"/logo.png"} width={15} height={12} alt="formilio logo" /> 
                    ormilio
                </a>
            
                {/* Navigation menu */}
            
                <div className="flex items-center gap-6">
                    <nav ref={menuRef} className={`md:flex md:flex-row md:w-fit md:h-fit w-full h-[100vh] md:p-0 p-[5%] md:static fixed top-0 left-0 md:bg-transparent dark:md:bg-transparent bg-white dark:bg-gray-900 text-sm transition-all duration-700 z-[10] ${open ? "translate-x-0" : "md:translate-x-0 translate-x-[100%]"}`}>
                        <h2 className="md:hidden text-blue text-xl m-4">Formilio</h2>
                        <div className="md:hidden m-4">
                            <Searchbar />
                        </div>
                        <Link href="/" className={`flex items-center gap-2 lg:mx-3 md:mx-2 p-4 md:w-auto w-full hover:text-blue ${path === "/"? "text-blue": ""}`}><FiHome className="text-blue md:hidden text-xl" /> Home</Link>
                        <Link href="/about" className={`flex items-center gap-2 lg:mx-3 md:mx-2 p-4 md:w-auto w-full hover:text-blue ${path === "/about"? "text-blue": ""}`}><FiInfo className="text-blue md:hidden text-xl" /> About</Link>
                        <Link href="/docs" className={`flex items-center gap-2 lg:mx-3 md:mx-2 p-4 md:w-auto w-full hover:text-blue ${path === "/documentations"? "text-blue": ""}`}><FiServer className="text-blue md:hidden text-xl" /> Docs</Link>
                        {
                            path.indexOf("dashboard") !== -1 ?
                            <>
                            <Link href="/dashboard/endpoints" className={`flex items-center gap-2 lg:hidden lg:mx-3 md:mx-2 p-4 md:w-auto w-full hover:text-blue ${path === "/dashboard/endpoints"? "text-blue": ""}`}><FiLink className="text-blue md:hidden text-xl" /> Endpoints</Link>
                            <Link href="/dashboard/notifications" className={`flex items-center gap-2 lg:hidden lg:mx-3 md:mx-2 p-4 md:w-auto w-full hover:text-blue ${path === "/dashboard/notifications"? "text-blue": ""}`}><FiBell className="text-blue md:hidden text-xl" /> Notifications</Link>
                            </> : ""
                        }
                       {
                            session ? // Show logout button instead of login if signed in
                            <div className="grid grid-cols-2 gap-2 md:hidden m-4 pt-8 border border-transparent border-t-gray-400/[0.6]">
                                <Link href="/dashboard" className={`md:hidden flex items-center rounded lg:mx-3 md:mx-2 px-4 p-3 md:w-auto w-full bg-blue text-white`}><FaUserAlt className="mr-3" /> Dashboard</Link>
                                <Link href="#" onClick={() => signOut()} className={`md:hidden flex items-center rounded lg:mx-3 md:mx-2 px-4 p-3 md:w-auto w-full bg-blue/[0.7] text-white`}><FaSignOutAlt className="mr-3" /> Logout</Link>
                            </div> :
                            
                            <Link href="/login" className="md:hidden flex items-center p-[10px] px-4 mx-[4%] mt-4 bg-blue hover:bg-hoverblue text-white rounded">Login</Link>
                        }
                    </nav>
                    <div className="md:block hidden">
                        <Searchbar />
                    </div>
                    <Link href="/settings" className="text-lg"><FiSettings /></Link>
                    {
                        (session) ? // Show dashboard button instead of login if signed in
                        <>
                            <Link href="/dashboard" className="w-fit rounded-full p-1 bg-blue/[0.1]">
                                {(!session.user.image)
                                ? <p className="flex items-start pt-[2px] justify-center w-[30px] h-[28px] text-gray-300 bg-gray-400 rounded-full">{session.user.email.charAt(0)}</p> : 
                                <img src={session.user.image} alt="user" width={30} height={30} className="rounded-full bg-gray-400 shadow-lg" />
                                }
                            </Link>
                        </> : 
                        <Link href="/login" className="md:flex hidden items-center p-[10px] px-[20px] bg-black hover:bg-hoverblue text-white rounded">Login</Link>
                    }
                    <button className="text-lg md:hidden z-[50]" onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
                </div> 
            </div>
        </>
    )
}