'use client'
import BuilderSidebar from "@/components/builderSidebar";
import InputBlock from "@/components/formComponents/InputBlock";
import { useState } from "react";
import { FaFolderPlus } from "react-icons/fa";

export default function Builder() {
    const [active, setActive] = useState()
    const [show, setShow] = useState("Build")
    const [components, setComponents] = useState([
        { id: 1, title: 'input' },
        { id: 2, title: 'input' }
    ])

    return (
        <div className="">
            <h3 className="font-semibold text-lg text-gray-300">DASHBOARD / BUILDER</h3>
            <div className="flex">
                <div className="flex-1 mr-2">
                    <div className="flex items-center justify-between mt-5">
                        <ul className="flex">
                            <li className={`p-3 px-5 border border-gray-400/[0.1] hover:bg-blue hover:text-white cursor-pointer rounded mr-2 ${show === "Build" ? "bg-blue text-white": ""}`}>Build</li>
                            <li className={`p-3 px-5 border border-gray-400/[0.1] hover:bg-blue hover:text-white cursor-pointer rounded mr-2 ${show === "Code" ? "bg-blue text-white": ""}`}>Code</li>
                            <li className={`p-3 px-5 border border-gray-400/[0.1] hover:bg-blue hover:text-white cursor-pointer rounded mr-2 ${show === "Connect" ? "bg-blue text-white": ""}`}>Connect</li>
                        </ul>
                    </div>
                    {
                        components.length < 1 ?
                            <div className="flex flex-col items-center justify-center w-full p-[20%] mt-[20px] bg-slate-200 dark:bg-gray-800 rounded text-center">
                                <div><FaFolderPlus className="p-3 mb-10 text-5xl bg-gray-600/[0.2] text-blue" /></div>
                                <div>Drag and drop components here</div>
                            </div>
                        :
                            <div className="p-2 bg-gray-300/[0.2]">
                                { 
                                    components.map(item => {
                                        return (
                                            item.title === "input" ? <div onClick={() => setActive(item.id)} key={item.id} className="my-2"><InputBlock active={active === item.id ? true: false} /></div> : ""
                                        )
                                    })
                                }
                            </div>
                    }
                </div>
                <BuilderSidebar />
            </div>
        </div>
    )
}