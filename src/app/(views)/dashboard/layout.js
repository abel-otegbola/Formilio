'use client'
import Sidebar from "@/components/dashboard/sidebar";
import Popup from "@/components/general/popup";
import { fetchData } from "@/helper/fetchData";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

export const NotificationContext = createContext()

export default function Layout({ children }) {
    const [open, setOpen] = useState(true)
    const [submissionsOptions, setSubmissionOptions] = useState({ start: 0, limit: 7, endpointKey: "" })
    const [data, setData] = useState(
        {
            endpoints: [], endpointsLoading: false, endpointsError: null,
            notifications: [], notificationsLoading: false, notificationsError: null,
            submissions: [], submissionsLoading: false, submissionsError: null
        }
    )

    const { data: endpoints, isLoading: endpointsLoading, error: endpointsError } = fetchData("getData/endpoints", 0)

    const { data: notifications, isLoading: notificationsLoading, error: notificationsError } = fetchData("getData/messages", 3)

    const { data: submissions, isLoading: submissionsLoading, error: submissionsError } = fetchData(submissionsOptions.endpointKey !== "" ? `getData/submissions/${submissionsOptions.endpointKey}/${submissonsOptons.start}/${submissionsOptions.limit}` : "getData/submissions", 0)

    const useOpen = () => {
        
    }

    useEffect(() => {
        setData({ 
            endpoints, endpointsLoading, endpointsError, 
            notifications, notificationsLoading, notificationsError,
            submissions, submissionsLoading, submissionsError, setSubmissionOptions
        })
    }, [endpointsLoading, notificationsLoading, submissionsLoading])

    return (
        <DataContext.Provider value={data}>
            <div className="lg:flex bg-slate-100 dark:bg-gray-800 md:p-2">

                {
                    endpointsError || notificationsError || submissionsError ?
                    <Popup text={"Could not get data"} color={"red"} /> :
                    ""
                }

                <div className="lg:block hidden z-[2]">
                    <Sidebar open={open} setOpen={useOpen}/>
                </div>
                <div className="md:ml-2 py-4 md:flex-1 bg-white dark:bg-gray-900">
                    {children}
                </div>
                
            </div>
        </DataContext.Provider>
    )
}