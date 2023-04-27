"use client"
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { FaArrowAltCircleRight, FaAtom, FaBookOpen, FaCog, FaCommentAlt, FaHome, FaInfoCircle, FaLink, FaSignOutAlt, FaTimes, FaUserCircle } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { closeBlock } from "@/helper/closeBlock";

export default function Sidebar({ open, setOpen }) {
    const { data: session } = useSession()
    const path = usePathname()
    const menuRef = useRef(null)

    const links = [
        { name: "Home", to: "/", icon: <FaHome />, iconRight: "" },
        { name: "Dashboard", to: "/dashboard", icon: <FaAtom />, iconRight: <FaArrowAltCircleRight/> },
        { name: "Endpoints", to: "/dashboard/endpoints", icon: <FaLink />,  iconRight: "" },
        { name: "Documentations", to: "/documentations", icon: <FaBookOpen />,  iconRight: <FaInfoCircle/> },
        { name: "Notifications", to: "/dashboard/notifications", icon: <FaCommentAlt />,  iconRight: ""},
        { name: "Settings", to: "/settings", icon: <FaCog />,  iconRight: "" },
        { name: "About formilio", to: "/about", icon: <FaInfoCircle />,  iconRight: <FaInfoCircle/> },
        { name: "Logout", to: "#", icon: <FaSignOutAlt />,  iconRight: "" },
    ]

    // Close sidebar when clicked outside
    useEffect(() => {
        closeBlock(menuRef, open, setOpen)
    }, [open])

    return(
        <>

        {/* Sidebar for dashboard */}
        <div ref={menuRef} className={`md:relative fixed top-0 right-0 h-full z-10 bg-white dark:bg-gray-900 shadow-lg dark:shadow-2xl text-gray-500 dark:text-gray-300 transition-all duration-700 overflow-hidden ${open ? "w-[250px]" : "w-0"}`}>
        
            {(session) ?  // Show user details for mobile menu if signed in
            <a href="/dashboard" className="">
                <div className="flex items-center p-[15px] border border-gray-100/[0.1] border-b-gray-300/[0.2]">
                    {(!session.user.image)
                        ? <p className="flex items-start pt-[2px] justify-center w-[30px] h-[28px] text-gray-300 bg-gray-400 rounded-full">{session.user.email.charAt(0)}</p> : 
                        <img src={session.user.image} alt="user" width={30} height={30} className="rounded-full bg-gray-400 shadow-lg" />
                    }
                    <div className="ml-4">
                        <p> {session.user.name}</p> 
                        <p className="text-[9px]">{session.user.email}</p>
                    </div>
                </div>
            </a> : ""}

            <ul className="w-full p-2">
                {
                    links.map((link,i) => {
                        return (
                            <div key={i} >
                                <li className={`flex w-full ${link.name === "Logout" ? "mt-[50px]" : (i === 0 && path.indexOf("dashboard") !== -1) ? "hidden" : ""} my-1  ${(!session && [1,2,4].indexOf(i) !== -1) ? "hidden" : ""}`}>
                                    <a href={link.name !== "Logout" ? link.to : session ? "#" : "login"} onClick={() => link.name === "Logout" ? signOut() : ""} className={`flex justify-between  items-center hover:bg-blue hover:text-white w-full rounded ${path === link.to ? "bg-blue text-white": ""} ${link.name !== "Logout" ? "p-[15px]" : !session ? "p-[10px] px-[15px] bg-blue text-white" : "p-[10px] px-[15px] bg-gray-800 text-white"}`}>
                                        <div className="flex items-center">
                                            <div className="mr-4 text-xl text-gray-300">{link.icon}</div> 
                                            {link.name !== "Logout" ? link.name : session ? "Logout" : "Login"}
                                        </div>
                                        <span className="text-gray-300">{link.iconRight}</span>
                                    </a>
                                </li>
                                { i === 4 ? <hr color="rgba(100, 100, 100, 0.5)" className="my-4"/> : "" } 
                            </div>
                        )
                    })
                }
            </ul>

        </div>
        </>
    )
}