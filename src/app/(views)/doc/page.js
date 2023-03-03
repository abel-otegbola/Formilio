'use client'
import { usePathname } from "next/navigation"

export default function Doc() {
    const path = usePathname()
    const links = [
        { name: "Get Started", to: "#"},
        { name: "Introduction", to: "#introduction"},
        { name: "Features", to: "/builder" },
        { name: "Builder", to: "/templates" },
        { name: "Templates", to: "/analytics" },
    ]

    return (
        <div className="md:px-[10%] px-[5%] py-[5%]">
            <div className="flex flex-wrap">
                <div className="md:w-[30%] w-full">
                    {
                        links.map((link,i) => {
                            return (
                                    <a key={i} href={link.to} className={`p-[10px] flex justify-between  items-center hover:bg-blue hover:text-white w-full rounded ${path === `/doc${link.to}`? "bg-blue text-white": ""}`}>
                                        {link.name}
                                    </a>
                            )
                        })
                    }
                </div>
                <div className="md:w-[70%] w-full">
                    <h3 className="text-2xl text-blue font-semibold">Documentation</h3>
                </div>
            </div>
        </div>
    )
}