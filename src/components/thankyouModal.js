import { useRouter } from "next/navigation"

export default function ThankyouModal() {
    const router = useRouter()

    return (
        <div className="shadow-xl rounded fixed bg-white dark:bg-gray-900 top-[10%] right-[15%] min-w-[50%] p-4 flex flex-col items-center justify-center min-h-[70vh]">
            {/* <input className="text-3xl py-4 text-center w-full" defaultValue={"Submission successful!"} />
            <input className="pb-4 text-center w-full" defaultValue={"Thank you! We have received your submission"} />
            <a onClick={() => router.back()}>Go back</a> */}
            <button className="p-3 px-12 rounded-full bg-blue text-white">Comming soon</button>
        </div>
    )
}