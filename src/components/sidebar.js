"use client"
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaAdjust, FaArrowAltCircleRight, FaAtom, FaBoxes, FaChartLine, FaCog, FaCommentAlt, FaInfoCircle, FaLink, FaMoneyBill, FaPlusCircle, FaRobot, FaSignOutAlt, FaTimes, FaUserCircle } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { signOut } from "next-auth/react";
import { closeBlock } from "@/helper/closeBlock";

export default function Sidebar() {
    const [open, setOpen] = useState(false)
    const path = usePathname()
    const menuRef = useRef(null)

    const links = [
        { name: "Dashboard", to: "", icon: <FaAtom />, iconRight: <FaArrowAltCircleRight/> },
        { name: "Endpoints", to: "/endpoints", icon: <FaLink />,  iconRight: <span className="bg-purple-500 text-white p-1 rounded text-[9px]">new</span> },
        { name: "Builder", to: "/builder", icon: <FaRobot />,  iconRight: <FaPlusCircle/> },
        { name: "Manage forms", to: "/manage", icon: <FaBoxes />,  iconRight: <span className="bg-green-500 text-white p-1 px-2 rounded text-[9px]">3</span> },
        { name: "Analytics", to: "/analytics", icon: <FaChartLine />,  iconRight: <FaArrowAltCircleRight/> },
        { name: "Notifications", to: "/notifications", icon: <FaCommentAlt />,  iconRight: <span className="bg-purple-400 text-white p-1 px-2 rounded text-[8px]">3</span> },
        { name: "Profile", to: "/profile", icon: <FaUserCircle />,  iconRight: <FaAdjust/> },
        { name: "Settings", to: "/settings", icon: <FaCog />,  iconRight: <FaInfoCircle/> },
        { name: "Billing & Payments", to: "/billing", icon: <FaMoneyBill />,  iconRight: <FiCheckCircle/> },
        { name: "Logout", to: "#", icon: <FaSignOutAlt />,  iconRight: <FaArrowAltCircleRight/> },
    ]

    // Close sidebar when clicked outside
    useEffect(() => {
        closeBlock(menuRef, open, setOpen)
    }, [open])

    return(
        <>
        {/* Button to close and open sidebar */}
        <div className="fixed top-1 left-1 text-gray-500 font-bold text-2xl p-4 border border-gray-100/[0.2] md:hidden block z-[150]" onClick={() => setOpen(!open)} >
                    {
                        open ? <FaTimes /> : <BsLayoutSidebarInset />
                    }
        </div>

        {/* Sidebar for dashboard */}
        <div ref={menuRef} className={`md:relative fixed md:pt-0 pt-[50px] top-0 left-0 w-[250px] z-10 bg-white dark:bg-gray-900 shadow-lg text-gray-500 dark:text-gray-300 transition-all duration-700 overflow-hidden ${open ? "w-[250px]" : "md:w-[250px] w-0"}`}>
            
            <ul className="my-3 w-full p-2">
                {
                    links.slice(0,4).map((link,i) => {
                        return (
                            <li key={i} className="flex w-full my-1">
                                <a href={`/dashboard${link.to}`} className={`p-[15px] flex justify-between  items-center hover:bg-blue hover:text-white w-full rounded ${path === `/dashboard${link.to}`? "bg-blue text-white": ""}`}>
                                    <div className="flex items-center">
                                        <div className="mr-2 text-xl text-gray-300">{link.icon}</div> 
                                        {link.name}
                                    </div>
                                    <span className="text-gray-300">{link.iconRight}</span>
                                </a>
                            </li> 
                        )
                    })
                }
            </ul>
            <hr className="mx-2 text-gray-200/[0.2]g" />
            <ul className="my-3 w-full p-2">
                {
                    links.slice(5,10).map((link,i) => {
                        return (
                            <li key={i} className="flex w-full my-1">
                                <a href={`/dashboard${link.to}`} onClick={() => link.name === "Logout" ? signOut() : ""} className={`p-[15px] flex justify-between  items-center hover:bg-blue hover:text-white w-full rounded ${path === `/dashboard${link.to}`? "bg-blue text-white": ""}`}>
                                    <div className="flex items-center">
                                        <div className="mr-2 text-xl text-gray-300">{link.icon}</div> 
                                        {link.name}
                                    </div>
                                    <span className="text-gray-300">{link.iconRight}</span>
                                </a>
                            </li> 
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}