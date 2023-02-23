'use client'
import hljs from "highlight.js"
import { useState } from "react"
import "./jsonformat.css"

export default function Setup ({ endpoint }) {
    const [active, setActive] = useState("HTML")
    return (
        <div className="mt-4 p-2">
            <div className="flex gap-2">
                {
                    ["HTML"].map((item, index) => (
                        <button key={index} className={`p-2 border border-transparent text-sm hover:border-b-blue hover:text-blue ${active === item ? "border-b-blue text-blue" : " border-b-gray-300/[0.4]"}`}>{item}</button>
                    ))
                }
            </div>

            <div className="md:flex items-start py-6">
                <p className="p-1 w-fit px-3 bg-fuchsia-200 rounded-full border-2 border-white shadow-lg mr-2">1</p>
                <div>
                    <h3 className="font-semibold">Paste your endpoint into your form</h3>
                    <p className="opacity-[0.5]">Change the form action attribute to the endpoint</p>

                    <div className="flex p-4 my-4 overflow-x-auto">
                        <div className={`block mt-2`}
                            dangerouslySetInnerHTML={{ __html: hljs.highlight(
                                `<form action="https://formilio.com/api/endpoint/${endpoint}" method="POST">
                                
                                </form>`
                                , { language: "HTML" }).value }}>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="md:flex items-start py-6">
                <p className="p-1 w-fit px-3 bg-fuchsia-200 rounded-full border-2 border-white shadow-lg mr-2">2</p>
                <div>
                    <h3 className="font-semibold">Name each field of your form</h3>
                    <p className="opacity-[0.5]">All the fields should have name attribute so formilio can detect them</p>

                    <div className="p-4 my-4 overflow-x-auto">
                        <p dangerouslySetInnerHTML={{__html: hljs.highlight(`<input type="email" name="email"><!-- use this to reply visitors and prevent spam -->`, { language: "HTML" }).value}}></p>
                        <p dangerouslySetInnerHTML={{__html: hljs.highlight(`<input type="text" name="firstName">`, {language: "HTML" }).value}}></p>
                        <p dangerouslySetInnerHTML={{__html: hljs.highlight(`<input type="text" name="lastName">`, {language: "HTML" }).value}}></p>
                        <p dangerouslySetInnerHTML={{__html: hljs.highlight(`<input type="text" name="anotherInput">`, {language: "HTML" }).value}}></p>
                        <p dangerouslySetInnerHTML={{__html: hljs.highlight(`<input type="hidden" name="_gotcha"><!-- use this to prevent spam -->`, {language: "HTML" }).value}}></p>
                    </div>
                    
                </div>
            </div>
            
            <div className="md:flex items-start py-6">
                <p className="p-1 w-fit px-3 bg-fuchsia-200 rounded-full border-2 border-white shadow-lg mr-2">3</p>
                <div>
                    <h3 className="font-semibold">Your form is ready</h3>
                    <p className="opacity-[0.5]">Your form is ready to recieve submissions</p>

                    <div className="my-4">
                        <a href={`/test?endpoint=${endpoint}`} className="p-3 px-4 rounded bg-blue text-white">Test the endpoint</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}