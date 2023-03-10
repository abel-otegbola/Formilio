'use client'
import { fetchData } from "@/helper/fetchData";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation"
import { FiInfo, FiLoader } from "react-icons/fi";
import TemplatePreview from "@/components/formComponents/templatePreview";

export default function Thankyou() {
    const router = useRouter();
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
            <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 flex justify-center items-center flex-col z-[1000]">
                <div className="flex flex-col justify-center items-center relative p-[5%] rounded shadow-2xl text-center">
                    <p className="absolute text-[60px] font-bold opacity-[0.2] text-center w-full">Thank You!</p>
                    <Image src="/successful.gif" width={200} height={200} alt="successful" className="m-auto" />
                    <h1 className="text-lg font-semibold p-2 text-center py-4">Your submission was successful.</h1>
                    <button className="p-2 px-6 rounded bg-blue text-white hover:bg-hoverblue" onClick={() => router.back()}>Go back</button>
                </div>
            </div>
        )
    }

    
}