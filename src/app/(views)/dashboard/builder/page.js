import BuilderSidebar from "@/components/builderSidebar";
import { FaFolderPlus } from "react-icons/fa";

export default function Builder() {
    return (
        <div className="">
            <h3 className="font-semibold text-lg text-gray-300">DASHBOARD / BUILDER</h3>
            <div className="flex">
                <div className="flex-1 mr-2">
                    <div className="flex flex-col items-center justify-center w-full p-[20%] mt-[20px] bg-slate-200 dark:bg-gray-900 rounded text-center">
                        <a href="/dashboard/builder"><FaFolderPlus className="p-3 mb-10 text-5xl bg-gray-600/[0.2] text-blue" /></a>
                        <a href="/dashboard/builder">Drag and drop components here</a>
                    </div>
                </div>
                <BuilderSidebar />
            </div>
        </div>
    )
}