import Sidebar from "@/components/sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex bg-slate-100 dark:bg-gray-800 p-2">
            <Sidebar />
            <div className="ml-2 flex-1 bg-white dark:bg-gray-800 p-[20px] px-[30px]">
                {children}
            </div>
            
        </div>
    )
}