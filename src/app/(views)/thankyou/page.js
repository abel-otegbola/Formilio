'use client'
import { fetchData } from "@/helper/fetchData";
import { useSearchParams } from "next/navigation"
import { FiInfo, FiLoader } from "react-icons/fi";
import TemplatePreview from "@/components/templatePreview";

export default function Thankyou() {
    const defaultComponents = [
        { id: 0, title: 'heading', text: "Submission successful!", styles: { align: "center", size: 24, italic: false, underline: false, color: "#000", padding: "10px", margin: "10px", bgColor: "none" }},
        { id: 1, title: 'para', text: "Thank you! Your submission has been sent. You will receive a feedback very soon.", styles: { align: "center", bold: false, size: 14, italic: false, underline: false, link: false, strike: false, color: "#000", padding: "10px", margin: "10px", bgColor: "none"} },
        { id: 2, title: 'button', text: "Go back", styles: { color: "#000", padding: "10px", margin: "10px", bgColor: "none"} }
    ]
    const key = useSearchParams().get("id")

    if(key) {
        const { data, isLoading, error } = fetchData(`getTemplates/one/thank you`, key, false) 

        if(isLoading) {return ( 
            <div className="flex justify-center items-center min-h-[70vh]">
                <FiLoader className="animate-spin text-blue text-3xl" />    
            </div>
         )}
        if(error) {return (
            <div className="flex justify-center items-center min-h-[70vh]">
                <FiInfo className="animate-spin text-blue text-3xl" />  
                <p>{error}</p>  
            </div>
        )}
        if(data) {return (
            <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 flex justify-center items-center flex-col z-[1000]">
                <TemplatePreview components={JSON.parse(data.components)} />
            </div>
        )}
    }

    else {
        return (
            <div className="flex justify-center items-center min-h-[70vh]">
                <TemplatePreview components={defaultComponents} />
            </div>
        )
    }

    
}