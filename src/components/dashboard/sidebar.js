"use client"
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaAdjust, FaArrowAltCircleRight, FaAtom, FaBriefcase, FaChartLine, FaCog, FaCommentAlt, FaInfoCircle, FaLink, FaSignOutAlt, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { signOut } from "next-auth/react";
import { closeBlock } from "@/helper/closeBlock";

export default function Sidebar() {
    const [open, setOpen] = useState(false)
    const path = usePathname()
    const menuRef = useRef(null)

    const links = [
        { name: "Dashboard", to: "", icon: <FaAtom />, iconRight: <FaArrowAltCircleRight/> },
        { name: "Endpoints", to: "/endpoints", icon: <FaLink />,  iconRight: <span className="bg-green-500 text-white p-1 px-2 rounded-full text-[9px]">1</span> },
        { name: "Portfolio", to: "/portfolio", icon: <FaBriefcase />,  iconRight: <BsFillEmojiSunglassesFill className="text-orange-500" /> },
        { name: "Notifications", to: "/notifications", icon: <FaCommentAlt />,  iconRight: <span className="bg-purple-400 text-white p-1 px-2 rounded text-[8px]">new</span> },
        { name: "Profile", to: "/profile", icon: <FaUserCircle />,  iconRight: <FaAdjust/> },
        { name: "Settings", to: "/settings", icon: <FaCog />,  iconRight: <FaInfoCircle/> },
        { name: "Logout", to: "#", icon: <FaSignOutAlt />,  iconRight: <FaArrowAltCircleRight/> },
    ]

    // Close sidebar when clicked outside
    useEffect(() => {
        closeBlock(menuRef, open, setOpen)
    }, [open])

    return(
        <>
        {/* Button to close and open sidebar */}
        <div className="fixed top-3 left-0 text-gray-500 font-bold text-2xl p-4 md:hidden block z-[150] transition-all duration-500" onClick={() => setOpen(!open)} >
                    {
                        open ? <FaTimes /> : <HiMenuAlt1 />
                    }
        </div>

        {/* Sidebar for dashboard */}
        <div ref={menuRef} className={`md:relative fixed md:pt-0 pt-[50px] top-0 left-0 md:h-auto h-full z-10 bg-white dark:bg-gray-900 shadow-lg dark:shadow-2xl text-gray-500 dark:text-gray-300 transition-all duration-700 overflow-hidden ${open ? "w-[250px]" : "md:w-[250px] w-0"}`}>
            
            <ul className="my-3 w-full p-2">
                {
                    links.map((link,i) => {
                        return (
                            <div key={i} >
                                <li className="flex w-full my-1">
                                    <a href={`/dashboard${link.to}`} onClick={() => link.name === "Logout" ? signOut() : ""} className={`p-[15px] flex justify-between  items-center hover:bg-blue hover:text-white w-full rounded ${path === `/dashboard${link.to}`? "bg-blue text-white": ""}`}>
                                        <div className="flex items-center">
                                            <div className="mr-4 text-xl text-gray-300">{link.icon}</div> 
                                            {link.name}
                                        </div>
                                        <span className="text-gray-300">{link.iconRight}</span>
                                    </a>
                                </li>
                                { i === 2 ? <hr color="rgba(100, 100, 100, 0.5)" className="my-4"/> : "" } 
                            </div>
                        )
                    })
                }
            </ul>

        </div>
        </>
    )
}