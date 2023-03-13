'use client'
import { fetchData } from "@/helper/fetchData";
import { useRouter } from "next/navigation"

export default function Thankyou() {
    const router = useRouter()

    return (
        <div className="fixed z-[1000] top-0 left-0 w-full h-full bg-white dark:bg-gray-900 flex justify-center flex-col items-center min-h-[70vh]">
            <h1 className="text-3xl py-4 text-center w-full font-semibold text-green-500">Submission successful!</h1>
            <p className="pb-6 text-center w-full">Thank you! We have received your submission</p>
            <a className="p-3 px-12 rounded-full bg-blue hover:bg-hoverblue text-white" onClick={() => router.back()}>Go back</a>
        </div>
    )    
}