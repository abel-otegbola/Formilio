'use client'
import BuilderSidebar from "@/components/builderSidebar";
import DragCard from "@/components/formComponents/dragCard";
import DropBox from "@/components/formComponents/dropBox";
import Preview from "@/components/formComponents/preview";
import { useState } from "react";

export default function Builder() {
    const [active, setActive] = useState()
    const [show, setShow] = useState("Build")
    const [components, setComponents] = useState([])
    

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
        <div className="">
            <h3 className="font-semibold text-lg text-gray-300">DASHBOARD / BUILDER</h3>
            <div className="flex">
                <div className="flex-1">
                    <div className="flex items-center justify-between mt-5 mr-2">
                        <ul className="flex">
                            <li className={`p-2 px-5 border border-gray-100/[0.1] hover:border-b-blue hover:text-blue cursor-pointer mr-2 ${show === "Build" ? "border-b-blue text-blue": ""}`} onClick={() => setShow("Build")}>Build</li>
                            <li className={`p-2 px-5 border border-gray-100/[0.1] hover:border-b-blue hover:text-blue cursor-pointer mr-2 ${show === "Preview" ? "border-b-blue text-blue": ""}`} onClick={() => setShow("Preview")}>Preview</li>
                            <li className={`p-2 px-5 border border-gray-100/[0.1] hover:border-b-blue hover:text-blue cursor-pointer mr-2 ${show === "Publish" ? "border-b-blue text-blue": ""}`} onClick={() => setShow("Publish")}>Publish</li>
                        </ul>
                    </div>
                    <div className={`${show === "Build" ? "block": "hidden"}`}>
                        {
                            components.length === 0 ?
                            <DropBox />
                            :
                                <div 
                                    className="p-4 bg-gray-300/[0.2] dark:bg-gray-800"
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