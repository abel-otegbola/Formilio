import Sidebar from "@/components/sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex bg-slate-100 dark:bg-gray-800 p-2">
            <Sidebar />
            <div className="md:ml-2 flex-1 min-h-screen bg-white dark:bg-gray-900 p-[20px] px-2">
                {children}
            </div>
            
        </div>
    )
}