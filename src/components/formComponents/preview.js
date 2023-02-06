'use client'
import { useRef } from "react"

export default function Preview({ components }) {
    const hRef = useRef(null)

    return (
        <div className="m-2 p-4 rounded">
            <h4>Preview :</h4>
            <div ref={hRef}>
            {
                components.map(item => (
                    item.title === "heading" ? 
                        <h1
                            style={{ 
                                fontSize: item.styles.size, 
                                textAlign: item.styles.align, 
                                width: "100%", 
                                padding: "20px",
                                fontWeight: item.styles.bold ? "700" : "400",
                                fontStyle: item.styles.italic ? "italic" : "none",
                                textDecoration: item.styles.underline ? "underline" : "none"
                          }}>{item.text}</h1>
                    : item.title === "para" ? 
                        <p
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
                        <input />
                    : item.title === "textarea" ? 
                        <textarea></textarea>
                    : ""
                ))
            }
            </div>
                { hRef.current.innerHTML }
            <div>
            </div>
        </div>
    )
}