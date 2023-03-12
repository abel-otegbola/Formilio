import { closeBlock } from "@/helper/closeBlock";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
    const [open, setOpen] = useState(false)
    const searchRef = useRef(null)

    useEffect(() => {
        // close the search block when clicked outside
        closeBlock(searchRef, open, setOpen)
    }, [open])

    return (
        <form ref={searchRef} className={`flex items-center mr-[25px] p-1 px-3 rounded-full overflow-hidden border ${open ? "border-gray-200 dark:border-gray-700" : "border-transparent"} transition-all duration-700`}>
            <input className={`p-1 border border-transparent bg-transparent focus:outline-none ${open ? "w-[90px]" : "w-0"} transition-all duration-700`} placeholder="Search..."/>
            <p className="relative text-gray-500 pl-2 text-xl cursor-pointer" onClick={() => setOpen(!open)}><FaSearch /></p>
        </form>
    )
}