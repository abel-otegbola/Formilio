"use client"
import { usePathname } from "next/navigation";
import { FaAtom, FaBoxes, FaBoxOpen, FaChartLine, FaCog, FaFolderPlus, FaMoneyBill, FaRobot, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
    const path = usePathname()

    const links = [
        { name: "Dashboard", to: "", icon: <FaAtom /> },
        { name: "Builder", to: "/builder", icon: <FaRobot /> },
        { name: "Entries", to: "/entries", icon: <FaBoxOpen /> },
        { name: "Manage forms", to: "/manage", icon: <FaBoxes /> },
        { name: "Analytics", to: "/analytics", icon: <FaChartLine /> },
        { name: "Settings", to: "/settings", icon: <FaCog /> },
        { name: "Billing & Payments", to: "/billing", icon: <FaMoneyBill /> },
        { name: "Logout", to: "/", icon: <FaSignOutAlt /> },
    ]

    return(
        <div className="w-[250px] p-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-300">
            <ul className="mt-3 w-full">
                <h4 className="text-lg text-gray-300">GENERAL</h4>
                {
                    links.slice(0,4).map((link,i) => {
                        return (
                            <li key={i} className="flex w-full my-1"><a href={`/dashboard${link.to}`} className={`p-[10px] flex items-center hover:bg-blue hover:text-white w-full rounded ${path === `/dashboard${link.to}`? "bg-blue text-white": ""}`}><div className="mr-2 text-xl text-gray-300">{link.icon}</div> {link.name}</a></li> 
                        )
                    })
                }
            </ul>
            <ul className="mt-7 w-full">
                <h4 className="text-lg text-gray-300">OTHERS</h4>
                {
                    links.slice(5,9).map((link,i) => {
                        return (
                            <li key={i} className="flex w-full my-1"><a href={`/dashboard${link.to}`} className={`p-[10px] flex items-center hover:bg-blue hover:text-white w-full rounded ${path === `/dashboard${link.to}`? "bg-blue text-white": ""}`}><div className="mr-2 text-xl text-gray-300">{link.icon}</div> {link.name}</a></li> 
                        )
                    })
                }
            </ul>
            <div className="flex flex-col items-center justify-center w-full p-[20%] mt-[40px] bg-slate-200 dark:bg-gray-800 rounded text-center">
                <a href="/dashboard/builder"><FaFolderPlus className="p-3 mb-10 text-5xl bg-gray-600/[0.2] text-blue" /></a>
                <a href="/dashboard/builder">Build new form</a>
            </div>
        </div>
    )
}