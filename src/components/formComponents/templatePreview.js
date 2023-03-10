'use client'
import { useRouter } from "next/navigation"

export default function TemplatePreview({ components }) {
    const router = useRouter();

    return (
        <div className="p-2">
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
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button
                            onClick={() => router.back()}
                            key={i} 
                            style={{ padding: 12, paddingInline: 30, borderRadius: 5, backgroundColor: "#6252f2", color: "#fff", width: "200px", marginTop: 20, cursor: "pointer" }}
                        >
                            {item.text}
                        </button>
                    </div>
                    : ""
                ))
            }
            </div>
    )
}