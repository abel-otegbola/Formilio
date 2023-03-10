'use client'
import hljs from "highlight.js"
import { useRef } from "react"
import "./preview.css"
import TemplatePreview from "./templatePreview"

export default function Preview({ components }) {
    const hRef = useRef("")

    return (
        <div className="p-4 rounded">
            <h4 className="text-semibold text-xl ml-2">Preview :</h4>
            <div ref={hRef} className="mb-10 bg-gray-200 dark:bg-gray-800 p-4">
                <TemplatePreview components={components} />
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 p-4">
                <h4 className="text-semibold text-xl">HTML code:</h4>
                <div className="py-3 hljs ">
                    <div className={`block mt-2`}
                            dangerouslySetInnerHTML={{ __html: hljs.highlight(hRef.current && hRef.current.innerHTML, { language: "xml" }).value }}>
                    </div> 
                </div>
                
            </div>
        </div>
    )
}