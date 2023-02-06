'use client'
import BuilderSidebar from "@/components/builderSidebar";
import DragCard from "@/components/formComponents/dragCard";
import DropBox from "@/components/formComponents/dropBox";
import { useState } from "react";

export default function Builder() {
    const [active, setActive] = useState()
    const [show, setShow] = useState("Build")
    const [components, setComponents] = useState([
        { id: 1, title: 'heading', text: "Lorem", styles: { align: "center", size: 24, italic: false, underline: false }},
        { id: 2, title: 'para', text: "Lorem ipsum dolor", styles: { align: "center", bold: false, size: 14, italic: false, underline: false, link: false, strike: false } },
        { id: 3, title: 'input', styles: {}, options: { label: "", placeholder: "", id: "", name: "" }, settings: { required: true, disabled: false, hidden: false } },
        { id: 4, title: 'textarea', styles: {}, options: { label: "", placeholder: "", id: "", name: "" }, settings: { required: true, disabled: false, hidden: false } }
    ])
    

    const handleDrag = (dragIndex, hoverIndex) => {
        setComponents(prev => {
            const copy = [...prev];
            const component = copy[dragIndex];
            //remove origin
            copy.splice(dragIndex, 1);
            // add to target
            copy.splice(hoverIndex, 0, component);
            return copy;
        })
    }


    return (
        <div className="">
            <h3 className="font-semibold text-lg text-gray-300">DASHBOARD / BUILDER</h3>
            <div className="flex">
                <div className="flex-1">
                    <div className="flex items-center justify-between mt-5 mr-2">
                        <ul className="flex">
                            <li className={`p-3 px-5 border border-gray-400/[0.1] hover:bg-blue hover:text-white cursor-pointer rounded mr-2 ${show === "Build" ? "bg-blue text-white": ""}`}>Build</li>
                            <li className={`p-3 px-5 border border-gray-400/[0.1] hover:bg-blue hover:text-white cursor-pointer rounded mr-2 ${show === "Code" ? "bg-blue text-white": ""}`}>Code</li>
                            <li className={`p-3 px-5 border border-gray-400/[0.1] hover:bg-blue hover:text-white cursor-pointer rounded mr-2 ${show === "Connect" ? "bg-blue text-white": ""}`}>Connect</li>
                        </ul>
                    </div>
                        {
                            components.length < 1 ?
                            <DropBox />
                            :
                                <div 
                                    className="p-4 bg-gray-300/[0.2] dark:bg-gray-800"
                                    >
                                    { 
                                        components.map((item, index) => {
                                            return (
                                                <DragCard id={item.id} key={item.id} setActive={setActive} handleDrag={handleDrag} index={index} active={active} handleComponents={[components, setComponents]} item={item} />
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