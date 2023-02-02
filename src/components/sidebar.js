"use client"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaArrowAltCircleRight, FaAtom, FaBoxes, FaBoxOpen, FaChartLine, FaCog, FaFolderPlus, FaInfoCircle, FaMoneyBill, FaPlusCircle, FaRobot, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { BsLayoutSidebarInset } from "react-icons/bs";

export default function Sidebar() {
    const [open, setOpen] = useState(false)
    const path = usePathname()

    const links = [
        { name: "Dashboard", to: "", icon: <FaAtom />, iconRight: <FaArrowAltCircleRight/> },
        { name: "Builder", to: "/builder", icon: <FaRobot />,  iconRight: <FaPlusCircle/> },
        { name: "Entries", to: "/entries", icon: <FaBoxOpen />,  iconRight: <span className="bg-purple-400 text-white p-1 rounded text-[8px]">new</span> },
        { name: "Manage forms", to: "/manage", icon: <FaBoxes />,  iconRight: <span className="bg-green-400 text-white p-1 px-2 rounded text-[8px]">3</span> },
        { name: "Analytics", to: "/analytics", icon: <FaChartLine />,  iconRight: <FaArrowAltCircleRight/> },
        { name: "Settings", to: "/settings", icon: <FaCog />,  iconRight: <FaInfoCircle/> },
        { name: "Billing & Payments", to: "/billing", icon: <FaMoneyBill />,  iconRight: <FiCheckCircle/> },
        { name: "Logout", to: "/", icon: <FaSignOutAlt />,  iconRight: <FaArrowAltCircleRight/> },
    ]

    return(
        <>
        <div className="absolute top-1 left-1 text-gray-500 font-bold text-2xl p-4 border border-gray-100/[0.2] md:hidden block z-50" onClick={() => setOpen(!open)} >
                    {
                        open ? <FaTimes /> : <BsLayoutSidebarInset />
                    }
        </div>
        <div className={`md:relative absolute md:pt-0 pt-[50px] top-0 left-0 w-[250px] h-full md:h-auto z-10 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-300 transition-all duration-700 overflow-hidden ${open ? "w-[250px]" : "md:w-[250px] w-0"}`}>
            
            <ul className="mt-3 w-full p-2">
                <h4 className="text-lg text-gray-300 ml-3">GENERAL</h4>
                {
                    links.slice(0,4).map((link,i) => {
                        return (
                            <li key={i} className="flex w-full my-1">
                                <a href={`/dashboard${link.to}`} className={`p-[10px] flex justify-between  items-center hover:bg-blue hover:text-white w-full rounded ${path === `/dashboard${link.to}`? "bg-blue text-white": ""}`}>
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
            <ul className="mt-7 w-full p-2">
                <h4 className="text-lg text-gray-300 ml-3">OTHERS</h4>
                {
                    links.slice(5,9).map((link,i) => {
                        return (
                            <li key={i} className="flex w-full my-1">
                                <a href={`/dashboard${link.to}`} className={`p-[10px] flex justify-between  items-center hover:bg-blue hover:text-white w-full rounded ${path === `/dashboard${link.to}`? "bg-blue text-white": ""}`}>
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
            <div className="flex flex-col items-center justify-center m-2 p-[20%] mt-[40px] bg-slate-200 dark:bg-gray-800 rounded text-center">
                <a href="/dashboard/builder"><FaFolderPlus className="p-3 mb-10 text-5xl bg-gray-600/[0.2] text-blue" /></a>
                <a href="/dashboard/builder">Build new form</a>
            </div>
        </div>
        </>
    )
}