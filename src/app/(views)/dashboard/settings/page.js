import Header from "@/components/header";
import { FaCogs, FaEdit, FaMoon, FaSun, FaTrashAlt } from "react-icons/fa";

export default function Settings() {
    return (
        <div className="px-4">
            <Header text={"Settings"} icon={<FaCogs />}></Header>

            <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-8">
                <h3 className="text-lg font-semibold p-4 py-6 bg-gray-100 dark:bg-gray-800">Interface Theme</h3>
                <p className="opacity-[0.5] p-4">Use the default UI theme or Choose between light and dark theme.</p>
                <div className="flex flex-wrap gap-2 mx-4">
                    <button className=" flex items-center p-2 px-6 bg-blue text-white rounded hover:bg-hoverblue">
                        <FaEdit className="mr-2"/> 
                        System preference
                    </button>
                    <button className=" flex items-center p-2 px-6 border border-gray-900 bg-white text-black rounded">
                        <FaSun className="mr-2"/> 
                        Light
                    </button>
                    <button className=" flex items-center p-2 px-6 rounded border border-gray-900 bg-white text-black">
                        <FaMoon className="mr-2"/> 
                        Dark
                    </button>
                </div>
            </div>
            
            <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-8">
                <h3 className="text-lg font-semibold p-4 py-6 bg-gray-100 dark:bg-gray-800">Account</h3>
                <div className="mx-4">
                    <p className="opacity-[0.5] py-4">Information, account settings</p>
                    <a href={"/dashboard/profile"} className="w-fit flex items-center p-2 px-6 bg-blue text-white rounded hover:bg-hoverblue">
                        Profile
                    </a>
                    <p className="opacity-[0.5] py-4">Account deletion</p>
                    <button className=" flex items-center p-2 px-6 bg-red-500 hover:bg-red-700 text-white rounded">
                        <FaTrashAlt className="mr-2"/> 
                        Delete my account
                    </button>
                </div>
            </div>
        </div>
    )
}