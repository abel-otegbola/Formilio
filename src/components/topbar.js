'use client'

import Link from "next/link";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Topbar() {
    const router = usePathname();

    return (
        <div className="flex font-body justify-between items-center p-2 md:px-[10%] px-[5%] bg-white dark:bg-gray-900 border border-slate-50/[0.1] border-b-gray-100 dark:border-b-gray-200/[0.1]">
            <h3 className="text-2xl font-bold">Mail<span className="text-blue">me</span></h3>
            <ul className="flex ml-[10%]">
                <li><a href="/" className={`mx-3 p-2 px-4 hover:text-blue ${router === "/"? "text-blue": ""}`}>Home</a></li>
                <li><a href="/about" className={`mx-3 p-2 px-4 hover:text-blue ${router === "/about"? "text-blue": ""}`}>About</a></li>
                <li><a href="/doc" className={`mx-3 p-2 px-4 hover:text-blue ${router === "/doc"? "text-blue": ""}`}>Doc</a></li>
                <li><a href="/contact" className={`mx-3 p-2 px-4 hover:text-blue ${router === "/contact"? "text-blue": ""}`}>Contact</a></li>
            </ul>
            <div className="flex items-center">
                <FiSearch className="mr-[40px] text-gray-500 font-bold text-2xl" />
                <div className="relative mr-[40px] text-gray-500 font-bold text-2xl">
                    <FiBell />
                    <sup className="absolute -top-2 -right-4 p-[5px] py-[7px] text-[8px] bg-purple-400 text-white rounded-full">2</sup>
                </div>
                <Link href="/login" className="flex items-center p-[10px] px-[20px] bg-blue hover:bg-hoverblue text-white rounded"><FiUser className="mr-2"/> Login</Link>
            </div>
        </div>
    )
}