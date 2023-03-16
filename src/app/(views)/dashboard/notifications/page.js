'use client'
import Header from "@/components/dashboard/header";
import { convert } from "@/helper/convertDate";
import { fetchData } from "@/helper/fetchData";
import { getInitials } from "@/helper/getInitials";
import { useContext, useEffect, useState } from "react";
import { FaCheckCircle, FaCommentAlt } from "react-icons/fa";
import { NotificationContext } from "../layout";

export default function Notifications() {
    const [notifications, setNotifications] = useState([
        {id: 1, createdAt: "02-03-2023T12:00", msg: "Welcome to formilio. We are glad to have you here", sender: "Formilio", opened: false}
    ])
    const [active, setActive] = useState(1)

    const { notifications: data, notitficationsLoading: isLoading, notificationsError: error } = useContext(NotificationContext)

    useEffect(() => {
        if(data) {
            setNotifications(data)
        }
        console.log(active)
    }, [data, isLoading, error])

    return (
        <div className="px-4">
            <Header text={"Notifications"} icon={<FaCommentAlt />}>
                <p className="text-white">View all your notifications here</p>
            </Header>
            {
                notifications.length === 0 ?
                <div className="h-[70px] flex justify-center items-center">
                    <p>You have no notifications</p>
                </div>
                :
                <div className="flex flex-wrap">
                    <div className="md:w-[30%] w-full">
                    {
                        [...new Map(notifications.map(m => [m.sender, m])).values()].map(notification => (
                            <div key={notification.id} onClick={() => setActive(notification.sender)} 
                                className={`flex md:flex-no-wrap flex-wrap items-center justify-between ${ notification.sender === active ? "bg-blue" : "bg-gray-100 dark:bg-gray-900" } border border-transparent border-y-gray-300/[0.2] hover:bg-blue hover:text-white cursor-pointer`}>

                                <p className="px-[10px] border-2 border-white/[0.3] bg-fuchsia-500/[0.1] md:block hidden uppercase text-[12px] font-semibold m-3 shadow-lg rounded-full">{getInitials(notification.sender || "user")}</p>
                                <div className="flex-1 items-center overflow-x-auto">
                                    {notification.sender}
                                </div>
                                <div className="flex items-center p-1">
                                    <p className="pl-2 text-[10px]">{convert(notification.createdAt)}</p>
                                    <FaCheckCircle className="text-green-400 p-3 text-4xl cursor-pointer"/>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="md:w-[70%] w-full">
                    {
                        notifications.filter(element => element.sender === active).map(item => (
                            <div key={item.id} className="md:px-[5%] my-6">
                                <div className="">
                                    <h3 className="text-xl font-semibold">{item.sender}</h3>
                                    <div className="flex items-center">
                                        <p className="text-[10px]">{convert(item.createdAt)}</p>
                                        <FaCheckCircle className="text-green-400 p-3 text-4xl cursor-pointer"/>
                                    </div>
                                    <div className="my-2 py-4 px-4 bg-gray-100 dark:bg-gray-800">{item.message}</div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            }
        </div>
    )
}