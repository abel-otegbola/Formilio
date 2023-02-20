'use client'
import { useRouter } from "next/navigation"

export default function Thankyou() {
    const router = useRouter();

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <h1 className="text-2xl font-semibold p-2 text-center">Thank you! Your submission has been received.</h1>
            <button className="p-2 px-4 rounded bg-blue text-white hover:bg-hoverblue" onClick={() => router.back()}>Go back</button>
        </div>
    )
}