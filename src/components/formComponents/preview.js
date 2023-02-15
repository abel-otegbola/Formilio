'use client'
import hljs from "highlight.js"
import { useRef } from "react"
import "./preview.css"

export default function Preview({ components }) {
    const hRef = useRef("")

    return (
        <div className="p-4 rounded">
            <h4 className="text-semibold text-xl ml-2">Preview :</h4>
            <div ref={hRef} className="mb-10 bg-gray-200 dark:bg-gray-800 p-4">
            <form action="formilio.com/user/form2" method="post" className="p-2">
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
                                padding: "5px 20px",
                                fontWeight: item.styles.bold ? "700" : "400",
                                fontStyle: item.styles.italic ? "italic" : "none",
                                textDecoration: item.styles.underline ? "underline" : item.styles.strike ? "strike-through" : "none"
                            }}>{item.text}</p>
                    : item.title === "input" ? 
                    <div
                        key={i} 
                        style={{ marginTop: "10px", alignItems: "center", display: item.options.type === "checkbox" || item.options.type === "radio" ? "flex" : "block" }}
                    >
                        { item.options.label !== "" ? 
                        <div style={{ display: "flex", marginTop: "5px", alignItems: "center", order: item.options.type === "checkbox" || item.options.type === "radio" ? 2 : 0} }>
                             <label htmlFor={item.options.id}>{item.options.label}</label>
                            { item.settings.required ? <sup style={{ marginLeft: 5, color: "red" }}>*</sup> : "" }
                        </div> : "" }
                        <input 
                            type={item.options.type}
                            placeholder={item.options.placeholder} 
                            id={item.options.id} 
                            name={item.options.name} 
                            required={item.settings.required} 
                            disabled={item.settings.disabled}
                            style={{ display: item.settings.hidden ? "none" : "block",
                                    padding: 12, 
                                    borderRadius: 5, 
                                    backgroundColor: "#fff", 
                                    color: "#000", 
                                    width: (item.options.type === "checkbox" || item.options.type === "radio") ? "30px" : "100%", 
                                    marginTop: 5,
                                    
                                }}
                        />
                    </div>
                    : item.title === "textarea" ? 
                    <div
                        key={i} 
                        style={{ marginTop: "20px" }}
                    >
                        { item.options.label !== "" ?
                        <div style={{ display: "flex", alignItems: "center" }}>
                             <label htmlFor={item.settings.id}>{item.options.label}</label>
                            { item.settings.required ? <sup style={{ marginLeft: 5, color: "red" }}>*</sup> : "" }
                        </div>
                        : "" }
                        <textarea 
                            placeholder={item.options.placeholder} 
                            id={item.options.id} name={item.options.name} 
                            required={item.settings.required} 
                            disabled={item.settings.disabled}
                            style={{ display: item.settings.hidden ? "none" : "block", padding: 12, borderRadius: 5, backgroundColor: "#fff", color: "#000", width: "100%", marginTop: 5, height: "150px" }}
                        ></textarea>
                    </div>
                    : item.title === "button" ? 
                    <button
                        key={i} 
                        style={{ padding: 12, borderRadius: 5, backgroundColor: "darkblue", color: "#fff", width: "100%", marginTop: 5 }}
                    >
                        {item.text}
                    </button>
                    : ""
                ))
            }
            </form>
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