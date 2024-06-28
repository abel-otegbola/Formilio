'use client'
import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useSWR from 'swr'


export const SubmissionsContext = createContext()


export default function SubmissionsContextProvider({ children }) {
    const { data: session } = useSession()
    const [options, setOptions] = useState({  })
    const [submissions, setSubmissions] = useState([])
    const [error, setError] = useState([])

    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const getAll = `getData/submissions/${session?.user.email}/0/0`

    const getByKey = `getData/submissions/${session?.user.email}/${options.start}/${options.limit}/${options.endpointKey}`

    const swrOptions = {
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnRecoonect: true
    }

    const { data, isLoading } = useSWR(session?.user.email ? `/api/${options.endpointKey ? getByKey : getAll}`: null, fetcher, swrOptions)

    useEffect(() => {
        if(data?.error || !data) {
            setError("Could not get data")
            setSubmissions([])
        }
        else {
            setSubmissions(data)
        }
    }, [data])

    return (
        <SubmissionsContext.Provider value={{ submissions, isLoading, error, options, setOptions }}>
            { children }
        </SubmissionsContext.Provider>
    )
}