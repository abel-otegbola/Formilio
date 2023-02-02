'use client'
import BuilderSidebar from "@/components/builderSidebar";
import DropBox from "@/components/formComponents/dropBox";
import HeadingBlock from "@/components/formComponents/headingBlock";
import InputBlock from "@/components/formComponents/InputBlock";
import ParaBlock from "@/components/formComponents/paraBlock";
import TextAreaBlock from "@/components/formComponents/textAreaBlock";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Builder() {
    const [active, setActive] = useState()
    const [show, setShow] = useState("Build")
    const [components, setComponents] = useState([
        { id: 1, title: 'heading', html: '<h1>heading</h1>'},
        { id: 2, title: 'para', html: '<p>Paragraph</p>' },
        { id: 3, title: 'input', html: '<input type="text" placeholder="input" />' },
        { id: 4, title: 'textarea', html: '<textarea>Message...</textarea>' }
    ])

    const onDragEnd = () => {

    }

    return (
        <div className="">
            <h3 className="font-semibold text-lg text-gray-300">DASHBOARD / BUILDER</h3>
            <div className="flex">
                <div className="flex-1">
                    <div className="flex items-center justify-between mt-5">
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
                                    className="p-2 bg-gray-300/[0.2] dark:bg-gray-800">
                                    { 
                                        components.map((item, index) => {
                                            return (
                                                <div 
                                                    key={item.id}
                                                    onClick={() => setActive(item.id)} 
                                                    className="my-2">
                                                    {
                                                    item.title === "input" ? <InputBlock active={active === item.id ? true: false}  id={item.id} index={index}></InputBlock> : 
                                                    item.title === "heading" ? <HeadingBlock active={active === item.id ? true: false} id={item.id} index={index}></HeadingBlock> :
                                                    item.title === "para" ? <ParaBlock active={active === item.id ? true: false} id={item.id} index={index}></ParaBlock>: 
                                                    item.title === "textarea" ? <TextAreaBlock active={active === item.id ? true: false} id={item.id} index={index}></TextAreaBlock> : ""
                                                    }
                                                </div>
                                            )
                                        })
                                        
                                    }
                                </div>
                            }
        
                    <code>
                        {
                            components.map(item => {
                                return (
                                    <div key={item.id}>{item.html}</div>
                                )
                            })
                        }
                    </code>
                </div>
                <BuilderSidebar />
            </div>
        </div>
    )
}