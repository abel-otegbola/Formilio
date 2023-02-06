'use client'
import Sidebar from "@/components/sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Layout({ children }) {
    return (
        <div className="flex bg-slate-100 dark:bg-gray-800 p-2">

            <Sidebar />
            
            <DndProvider backend={HTML5Backend}>
                <div className="md:ml-2 flex-1 min-h-screen bg-white dark:bg-gray-900 p-[20px] px-2">
                    {children}
                </div>
            </DndProvider>
            
        </div>
    )
}