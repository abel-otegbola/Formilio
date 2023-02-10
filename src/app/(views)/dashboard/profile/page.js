'use client'
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { FaUserCircle } from "react-icons/fa"

export default function Profile() {
    const { data: session } = useSession()

    useEffect(() => {
        console.log(session)
    }, [session])

    return (
        <div className="p-4">
            {(session) ?  
                <div className=" border border-gray-100/[0.1] border-b-gray-300/[0.2] px-6 py-3">
                    <div className="w-full h-[130px] bg-blue"></div>
                    <div className="relative -top-10 ml-3">
                    {(!session.user.image)
                        ? <FaUserCircle className="p-2 mr-2 text-gray-300 w-[80px] h-[80px] bg-gray-400 rounded-full" /> : 
                        <img src={session.user.image} alt="user" width={80} height={80} className="rounded-full bg-gray-400 mr-2 border-2 border-white shadow-lg" />
                    }
                    </div>
                    <div className="m-6">
                        <p className="font-semibold mb-2"> Full Name:</p> 
                        <p>{session.user.name}</p>
                    </div>
                    <div className="m-6">
                        <p className="font-semibold mb-2"> Email Address:</p> 
                        <p>{session.user.email}</p>
                    </div>
                </div> : ""}
        </div>
    )
}