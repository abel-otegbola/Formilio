'use client'
import { useRef } from "react"

export default function Preview({ components }) {
    const hRef = useRef(null)

    return (
        <div className="m-2 p-4 rounded">
            <h4 className="text-semibold text-xl">Preview :</h4>
            <div ref={hRef} className="p-4 mb-10 bg-gray-100 dark:bg-gray-900">
            {
                components.map((item, i) => (
                    item.title === "heading" ? 
                        <h1
                            key={i}
                            style={{ 
                                fontSize: item.styles.size, 
                                textAlign: item.styles.align, 
                                width: "100%", 
                                padding: "20px",
                                fontWeight: item.styles.bold ? "700" : "400",
                                fontStyle: item.styles.italic ? "italic" : "",
                                textDecoration: item.styles.underline ? "underline" : "none"
                          }}>{item.text}</h1>
                    : item.title === "para" ? 
                        <p
                            key={i}
                            style={{ 
                                fontSize: item.styles.size, 
                                textAlign: item.styles.align, 
                                width: "100%", 
                                padding: "20px",
                                fontWeight: item.styles.bold ? "700" : "400",
                                fontStyle: item.styles.italic ? "italic" : "none",
                                textDecoration: item.styles.underline ? "underline" : item.styles.strike ? "strike-through" : "none"
                            }}>{item.text}</p>
                    : item.title === "input" ? 
                        <input key={i} />
                    : item.title === "textarea" ? 
                        <textarea key={i}></textarea>
                    : ""
                ))
            }
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 p-4">
                <h4 className="text-semibold text-xl">HTML code:</h4>
                <div className="py-3">
                    { hRef.current && hRef.current.innerHTML }
                </div>
                
            </div>
        </div>
    )
}