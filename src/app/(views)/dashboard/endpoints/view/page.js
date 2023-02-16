'use client'
import { useRouter } from "next/navigation"

export default function View() {
    const router = useRouter()
    const data = router.query;

    return(
        <div>
            {data}
        </div>
    )
}