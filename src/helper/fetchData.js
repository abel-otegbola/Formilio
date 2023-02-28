'use-client'
import { useSession } from "next-auth/react";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const fetchData = (type, key) => {
    const { data: session } = useSession()

    const { data, error, isLoading } = useSWR(session ? `/api/${type}/${key || session.user.email}` : null, fetcher)

    return {
        data,
        isLoading,
        error
    }
}