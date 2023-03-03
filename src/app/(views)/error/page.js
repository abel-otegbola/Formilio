'use client'
import Image from "next/image";
import { useRouter } from "next/navigation"

export default function Error() {
    const router = useRouter();

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 flex justify-center items-center flex-col z-[1000]">
            <div className="flex flex-col justify-center items-center relative p-[5%] rounded shadow-2xl text-center">
                <p className="absolute text-[80px] font-bold opacity-[0.2] text-center w-full">Sorry!</p>
                <Image src="/error.gif" width={200} height={200} alt="successful" className="m-auto" />
                <h1 className="text-lg font-semibold p-2 text-center py-4">Your submission could not be received.</h1>
                <button className="p-2 px-6 rounded bg-blue text-white hover:bg-hoverblue" onClick={() => router.back()}>Go back</button>
            </div>
        </div>
    )
}