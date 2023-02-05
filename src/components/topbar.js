'use client'

import Link from "next/link";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";

export default function Topbar() {
    const [open, setOpen] = useState(false)
    const router = usePathname();
    const { data: session } = useSession()

    return (
        <div className="fixed w-full flex shadow-sm font-body justify-between items-center p-2 md:py-2 py-4 md:px-[10%] px-[5%] bg-white dark:bg-gray-900 border border-slate-50/[0.1] border-b-gray-100 dark:border-b-gray-200/[0.1] z-[100]">
            <h3 className={`text-2xl font-bold ${router.indexOf("dashboard") !== -1 ? "md:ml-0 ml-[40px]" : ""}`}>Mail<span className="text-blue">me</span></h3>
            <ul className={`bg-white dark:bg-gray-900 flex md:flex-row flex-col md:w-auto h-full md:relative md:shadow-none shadow-lg fixed top-0 right-0 transition-all duration-700 overflow-hidden ml-[4%] z-10 ${open ? "w-[75%]": "w-0"}`}>
                {(session) ?  
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
                <li className="flex md:p-0 p-2"><a href="/doc" className={`lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full hover:text-blue ${router === "/doc"? "text-blue": ""}`}>Doc</a></li>
                <li className="flex md:p-0 p-2"><a href="/contact" className={`lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full hover:text-blue ${router === "/contact"? "text-blue": ""}`}>Contact</a></li>
                {
                    session ? 
                    <li className="flex md:p-0 p-2 mx-4"><a href="/" onClick={() => signOut()} className={`md:hidden flex items-center rounded lg:mx-3 md:mx-2 px-4 p-2 md:w-auto w-full bg-blue text-white`}><FaSignOutAlt className="mr-3" /> Logout</a></li> :
                    
                    <Link href="/login" className="md:hidden flex items-center justify-center p-[10px] px-4 mx-[4%] mt-4 bg-blue hover:bg-hoverblue text-white rounded"><FiUser className="mr-2"/> Login</Link>
                    
                }
            </ul>
            <div className="flex items-center">
                <div className="relative mr-[25px] text-gray-500 font-bold text-2xl">
                    <FiSearch />
                </div>
                <div className="relative mr-[35px] text-gray-500 font-bold text-2xl">
                    <FiBell />
                    <sup className="absolute -top-2 -right-4 p-[5px] py-[7px] text-[8px] bg-purple-400 text-white rounded-full">2</sup>
                </div>
                {
                    (session) ? 
                    <Link href="/dashboard" className="md:flex hidden items-center p-[10px] px-[20px] bg-blue hover:bg-hoverblue text-white rounded"><FiUser className="mr-2"/>dashboard</Link> : 
                    <Link href="/login" className="md:flex hidden items-center p-[10px] px-[20px] bg-blue hover:bg-hoverblue text-white rounded"><FiUser className="mr-2"/> Login</Link>
                }
                <div className="text-gray-500 font-bold text-2xl md:hidden block z-50" onClick={() => setOpen(!open)} >
                    {
                        open ? <FaTimes /> : <FaBars />
                    }
                </div>
            </div>
        </div>
    )
}