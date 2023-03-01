import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import Popup from "./popup"

export default function Settings({ id }) {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    const handleDelete = async () => {
        setLoading(true)
        await fetch(`/api/deleteEndpoint/${id}`)
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setError(data.error)
            }
            else {
                setSuccess("Endpoint deleted successfully")
                setLoading(false)
                window.location.pathname("/dashboard/endpoints")
            }
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        }) 
    }

    return (
        <div className="py-2">
            { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
            { (error !== "") ? <Popup text={error} color={"red"} /> : "" }
            <div className="rounded border pb-4 border-gray-400/[0.2]">
                <h3 className="text-lg font-semibold text-red-500 p-4 bg-gray-100 ">Delete Endpoint?</h3>
                <p className="opacity-[0.5] p-4">Click the button below to delete the endpoint permanently.</p>
                <button className=" flex items-center mx-4 p-3 px-6 bg-red-500 text-white rounded hover:bg-red-700">
                    { loading ? 
                    <div className="flex justify-center items-center min-h-[70px]">
                        <FiLoader className="animate-spin text-blue text-3xl" />    
                    </div>:
                    <FaTrashAlt className="mr-2" onClick={() => handleDelete()}/> 
                     }
                    Delete
                </button>
            </div>
        </div>
    )
}