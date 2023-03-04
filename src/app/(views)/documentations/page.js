'use client'
import { useState } from "react"
import { FaAtom, FaDesktop, FaInfo, FaRobot } from "react-icons/fa"
import { AiOutlinePartition } from 'react-icons/ai'
import Image from 'next/image'

export default function Documentations() {
    const [path, setPath] = useState("#")
    const links = [
        { name: "Get Started", to: "#", icon: <FaAtom />},
        { name: "Introduction", to: "#introduction", icon: <FaInfo />},
        { name: "Features", to: "#features", icon: <AiOutlinePartition /> },
        { name: "Builder", to: "#builder", icon: <FaRobot /> },
        { name: "Templates", to: "#templates", icon: <FaDesktop /> },
    ]

    const checkPath = (link) => {
        setPath(link)
    }

    return (
        <div className="md:px-[10%] px-[5%] py-[5%]">
            <div className="flex flex-wrap">
                <div className="md:w-[30%] w-full p-[5%] bg-gray-100 dark:bg-gray-800 rounded">
                    {
                        links.map((link,i) => {
                            return (
                                    <a key={i} href={link.to} onClick={() => checkPath(link.to)} className={`p-[10px] my-1 text-xl flex items-center hover:bg-blue hover:text-white w-full rounded ${path === `${link.to}`? "bg-blue text-white": ""}`}>
                                        {link.icon}
                                        <span className="ml-3 text-sm">{link.name}</span>
                                    </a>
                            )
                        })
                    }
                </div>
                <div className="md:w-[70%] w-full md:p-[5%] py-[40px]">
                    <h3 className="text-4xl text-blue font-bold">Getting Started</h3>
                    <div className="flex items-center justify-center bg-gradient-to-r my-[30px] from-blue to-fuchsia-500 h-[200px] rounded-xl">
                        <h3 className="text-2xl font-display">Formilio</h3>
                    </div>
                    <div>Formilio easily gives you a backend endpoint for your static website. Useful for any type of form including 
                        <ul className="list-disc p-4 leading-[30px]">
                            <li><a href="/dashboard/templates?landingpage" className="text-blue"> landing page forms</a></li>
                            <li><a href="/dashboard/templates?portfolio" className="text-blue">Portfolio forms</a></li>
                            <li><a href="/dashboard/templates?client feedback" className="text-blue">Client feedback forms</a></li>
                            <li><a href="/dashboard/templates?job application" className="text-blue">Job application forms</a></li>
                            <li>and lots <a href="/dashboard/templates" className="text-blue">More</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}