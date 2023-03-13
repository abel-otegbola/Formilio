import { closeBlock } from "@/helper/closeBlock";
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Searchbar() {
    const [open, setOpen] = useState(false)
    const searchRef = useRef(null)

    useEffect(() => {
        // close the search block when clicked outside
        closeBlock(searchRef, open, setOpen)
    }, [open])

    return (
        <form ref={searchRef} className={`flex items-center mr-1 p-1 px-3 rounded overflow-hidden border ${open ? "border-gray-200 dark:border-gray-700" : "border-transparent"} transition-all duration-700`}>
            <p className="relative text-gray-500  text-2xl cursor-pointer transition-all duration-700 " onClick={() => setOpen(!open)}><FiSearch /></p>
            <input className={`p-2 border border-transparent bg-transparent focus:outline-none ${open ? "w-[90px]" : "w-0"} transition-all duration-700`} placeholder="Search..."/>
        </form>
    )
}