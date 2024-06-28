'use client'
import Sidebar from "@/components/dashboard/sidebar";
import EndpointsContextProvider from "@/context/endpointsContext";
import SubmissionsContextProvider from "@/context/submissionsContext";


export default function Layout({ children }) {

    return (
        <EndpointsContextProvider>
            <SubmissionsContextProvider>
                <div className="lg:flex md:p-2">

                    <div className="md:block hidden z-[2]">
                        <Sidebar/>
                    </div>
                    <div className="lg:ml-2 py-4 md:flex-1">
                        {children}
                    </div>
                    
                </div>
            </SubmissionsContextProvider>
        </EndpointsContextProvider>
    )
}