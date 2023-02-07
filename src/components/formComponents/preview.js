'use client'
import { useRef } from "react"

export default function Preview({ components }) {
    const hRef = useRef(null)

    return (
        <div className="m-2 p-4 rounded">
            <h4 className="text-semibold text-xl">Preview :</h4>
            <div ref={hRef} className="p-4 mb-10 bg-gray-100 dark:bg-gray-900">
            <form action="formilio.com/user/form2" method="post">
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
                    <div
                        key={i} 
                        style={{ marginTop: "20px", alignItems: "center", display: item.options.type === "checkbox" || item.options.type === "radio" ? "flex" : "block" }}
                    >
                        <div style={{ display: "flex", marginTop: "5px", alignItems: "center", order: item.options.type === "checkbox" || item.options.type === "radio" ? 2 : 0} }>
                            { item.options.label !== "" ? <label htmlFor={item.options.id}>{item.options.label}</label>: "" }
                            { item.settings.required ? <sup style={{ marginLeft: 5, color: "red" }}>*</sup> : "" }
                        </div> 
                        <input 
                            type={item.options.type}
                            placeholder={item.options.placeholder} 
                            id={item.options.id} name={item.options.name} 
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
                        <div style={{ display: "flex", alignItems: "center" }}>
                            { item.options.label !== "" ? <label htmlFor={item.settings.id}>{item.options.label}</label>: "" }
                            { item.settings.required ? <sup style={{ marginLeft: 5, color: "red" }}>*</sup> : "" }
                        </div>
                        <textarea 
                            placeholder={item.options.placeholder} 
                            id={item.options.id} name={item.options.name} 
                            required={item.settings.required} 
                            disabled={item.settings.disabled}
                            style={{ display: item.settings.hidden ? "none" : "block", padding: 12, borderRadius: 5, backgroundColor: "#fff", color: "#000", width: "100%", marginTop: 5, height: "150px" }}
                        ></textarea>
                    </div>
                    : ""
                ))
            }
            </form>
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