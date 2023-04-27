'use-client'
import { useSession } from "next-auth/react";
import useSWR from 'swr'

const getKey = (type, user, limit) => {
    return `/api/${type}/${user}/0/${limit}`
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const fetchData = (type, limit) => {
    const { data: session } = useSession()

    const { data, error, isLoading } = useSWR(session ? getKey(type, session.user.email, limit) : null, fetcher)
        return {
            data,
            isLoading,
            error,
    }
}