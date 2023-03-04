'use-client'
import { useSession } from "next-auth/react";
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'

const getKey = (type, key, limit) => {
    return `/api/${type}/${key}/0/${limit}`
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const fetchData = (type, key, usePage, limit) => {
    const { data: session } = useSession()
    let totalUsers = 0

    if(usePage) {
        const { data, size, setSize } = useSWR(session ? getKey(type, key || session.user.email, limit) : null, fetcher)
        if (!data) return { isLoading: true }
        if (data.error) return { error: data.error }
        
        // We can now calculate the number of all data
        for (let i = 0; i < data.length; i++) {
            totalUsers += data.length;
        }
        return {
            data,
            totalUsers,
            size,
            setSize,
            isLoading: false,
            error: false
        }
    }
    else {
        const { data, error, isLoading } = useSWR(session ? `/api/${type}/${key || session.user.email}` : null, fetcher)
        return {
            data,
            isLoading,
            error,
        }
    }

 

}