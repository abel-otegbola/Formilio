'use client'
import Sidebar from "@/components/dashboard/sidebar";
import { fetchData } from "@/helper/fetchData";
import { createContext, useState } from "react";

export const DataContext = createContext()

export const NotificationContext = createContext()

export default function Layout({ children }) {
    const [open, setOpen] = useState(true)

    const { data: endpoints, isLoading: endpointsLoading, error: endpointsError } = fetchData("getEndpoints", null, true,  0)

    const { data: notifications, isLoading: notificationsLoading, error: notificationsError } = fetchData("getNotifications", null, true, 5)

    return (
        <DataContext.Provider value={{ endpoints, endpointsError, endpointsLoading }}>
            <NotificationContext.Provider value={{ notifications, notificationsLoading, notificationsError }}>
                <div className="flex bg-slate-100 dark:bg-gray-800 md:p-2">

                    <div className="md:block hidden">
                        <Sidebar open ={true} setOpen={setOpen}/>
                    </div>
                    <div className="md:ml-2 py-4 flex-1 min-h-screen bg-white dark:bg-gray-900">
                        {children}
                    </div>
                    
                </div>
            </NotificationContext.Provider>
        </DataContext.Provider>
    )
}