'use client'
import BuilderSidebar from "@/components/builderSidebar";
import DragCard from "@/components/formComponents/dragCard";
import DropBox from "@/components/formComponents/dropBox";
import Preview from "@/components/formComponents/preview";
import { useState } from "react";
import { useSearchParams } from 'next/navigation'
import Header from "@/components/header";
import { FaRobot } from "react-icons/fa";

export default function Builder() {
    const [active, setActive] = useState()
    const [show, setShow] = useState("Build")
    const [components, setComponents] = useState([])
    const id = useSearchParams().get("id")
    const type = useSearchParams().get("type")
    

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
        console.log(components)
    }


    const handleAdd = (title) => {
            setComponents([
                ...components,
                title === "Input Field" ?
                    {id: components.length > 0 ? components[components.length - 1].id + 1 : 0, title: 'input', styles: {}, options: { label: "", placeholder: "", id: "", name: "" }, settings: { required: true, disabled: false, hidden: false }}
                : title === "Text Area" ?
                    { id: components.length > 0 ? components[components.length - 1].id + 1 : 0, title: 'textarea', styles: {}, options: { label: "", placeholder: "", id: "", name: "" }, settings: { required: true, disabled: false, hidden: false } }
                : title === "Heading" ?
                    { id: components.length > 0 ? components[components.length - 1].id + 1 : 0, title: 'heading', text: "Click to edit", styles: { align: "center", size: 24, italic: false, underline: false, color: "#000", padding: "10px", margin: "10px", bgColor: "none" }}
                : title === "Text" ?
                    { id: components.length > 0 ? components[components.length - 1].id + 1 : 0, title: 'para', text: "Click to edit", styles: { align: "center", bold: false, size: 14, italic: false, underline: false, link: false, strike: false, color: "#000", padding: "10px", margin: "10px", bgColor: "none"} }
                : title === "Button" ?
                { id: components.length > 0 ? components[components.length - 1].id + 1 : 0, title: 'button', text: "Submit", styles: { color: "#000", padding: "10px", margin: "10px", bgColor: "none"} }
                : ""
            ])
    }

    const handleDelete = (id) => {
        setComponents(
            components.filter(item => item.id !== id)
        )
    }


    return (
        <div className="px-4">
            <Header text={id ? `Customizing ${type} (${id})` : "Builder"} icon={<FaRobot />}>
                <div className="flex">
                    <a href="/dashboard/templates" className="p-3 px-6 rounded bg-hoverblue text-white mr-2 hover:bg-blue hover:border hover:border-white">Find templates</a>
                </div>
            </Header>
             <div className="md:w-[300px] grid grid-cols-3 gap-2 p-2 rounded bg-gray-100 dark:bg-gray-900">
             {
                 ["Build", "Preview", "Publish"].map((item, i) => (
                     <p
                         key={i} 
                         className={`p-3 px-6 rounded border text-sm text-center hover:bg-white hover:dark:bg-gray-900 hover:border-blue hover:text-blue text-center cursor-pointer border  ${show === item ? "border-blue text-blue shadow-lg bg-white dark:bg-gray-900 dark:shadow-3xl" : "border-transparent"}`}
                         onClick={() => setShow(item)}
                     >{item}</p>
                 ))
             }
         </div>
            <div className="flex">
                <div className="flex-1">
                    <div className={`${show === "Build" ? "block": "hidden"} p-4 bg-gray-500/[0.2] dark:bg-gray-800`}>
                        {
                            components.length === 0 ?
                            <DropBox />
                            :
                                <div 
                                    className="p-6 bg-gray-300/[0.2] dark:bg-gray-900"
                                    >
                                    { 
                                        components.map((item, index) => {
                                            return (
                                                <DragCard id={item.id} key={item.id} setActive={setActive} handleDrag={handleDrag} handleDelete={handleDelete} index={index} active={active} handleComponents={{components, setComponents}} item={item} />
                                            )
                                        })
                                        
                                    }
                                </div>
                            }
                    </div>
                    <div className={`${show === "Preview" ? "block": "hidden"}`}>
                        <Preview components={components} />
                    </div>
                    <div className={`${show === "Publish" ? "block": "hidden"}`}>
                        <Preview components={components} />
                    </div>
                </div>
                <BuilderSidebar addComponent={handleAdd} />
            </div>
        </div>
    )
}