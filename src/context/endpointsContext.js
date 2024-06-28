'use client'
import { createContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useSWR from 'swr'


export const EndpointsContext = createContext()


export default function EndpointsContextProvider({ children }) {
    const { data: session } = useSession()
    const [endpoints, setEndpoints] = useState([])
    const [error, setError] = useState([])

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    
    const swrOptions = {
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnRecoonect: true
    }

    const { data, isLoading } = useSWR(session?.user.email ? `/api/getData/endpoints/${session?.user.email}/0/0`: null, fetcher, swrOptions)

    useEffect(() => {
        if(data?.error || !data) {
            setError("Could not get data")
            setEndpoints([])
        }
        else {
            setEndpoints(data)
        }
    }, [data])

    return (
        <EndpointsContext.Provider value={{ endpoints, isLoading, error }}>
            { children }
        </EndpointsContext.Provider>
    )
}