import { useState } from "react"
import { FaLink, FaPenFancy, FaTimes, FaTrashAlt, FaUpload } from "react-icons/fa"
import Popup from "./popup"
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { FiLoader } from "react-icons/fi"

export default function Settings({ id }) {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const [emails, setEmails] = useState([])
    const [name, setName] = useState("")
    const router = useRouter()

    const addEmail = () => {
        if(name !== "") {
            setEmails([...emails, name]); 
            setName("")
        }
        else {
            setError("Input field should not be empty")
        }
    }

    const handleDelete = async () => {
        console.log(id)
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
                router.push("/dashboard/endpoints")
            }
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        }) 
    }

    return (
        <div className="">

            { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
            { (error !== "") ? <Popup text={error} color={"red"} /> : "" }

            <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Thank you Page</h3>
                <p className="opacity-[0.5] p-4">Create a custom thank you page or use the default.</p>
                <div className="flex flex-wrap mx-4 gap-2">
                    <Link href={{pathname: `/dashboard/builder`, query: {type: "thank you", endpoint: id}}} className=" flex items-center p-2 px-6 bg-blue text-white rounded hover:bg-hoverblue">
                        <FaPenFancy className="mr-2"/> 
                        Customize
                    </Link>
                    <button className=" flex items-center p-2 px-6 bg-blue text-white rounded hover:bg-hoverblue">
                        <FaLink className="mr-2"/> 
                        Custom link
                    </button>
                </div>
            </div>
            
            <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Emails</h3>
                <p className="opacity-[0.5] p-4">Email addresses to notify of submissions</p>
                <div className="flex items-center flex-wrap w-fit gap-2 border border-gray-200 dark:border-gray-100/[0.3] p-1 m-4 rounded">
                    {
                        emails.map(email => (
                            <p className="p-3 px-6 bg-blue text-white rounded hover:bg-hoverblue flex items-center">{email} <FaTimes className="ml-2" onClick={() => setEmails(emails.filter(item => item !== email))} /></p>
                        ))
                    }
                    <input className="border border-transparent p-2 bg-gray-900 rounded text-white" name="email" type="email" value={name} placeholder="Type email here" onChange={(e) => setName(e.target.value)} />
                    <button className="p-2 px-6 rounded-sm border border-blue text-blue" onClick={() => addEmail()} >Add</button>
                </div>
                <button className="flex items-center mx-4 p-2 px-6 bg-blue text-white rounded hover:bg-hoverblue">
                    { loading ? 
                    <FiLoader className="animate-spin mr-2" />:
                    <FaUpload className="mr-2"/> 
                     }
                    Update
                </button>
            </div>

            <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Email Notification template</h3>
                <p className="opacity-[0.5] p-4">Create a custom template page or use the default.</p>
                <Link href={{pathname: `/dashboard/builder`, query: {type: "email template", endpoint: id}}} className="w-fit flex items-center mx-4 p-2 px-6 bg-blue text-white rounded hover:bg-hoverblue">
                    <FaPenFancy className="mr-2"/>
                    Customize
                </Link>
            </div>
            
            <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Auto Respond email</h3>
                <p className="opacity-[0.5] p-4">Send message to user email. Add the auto respond message below.</p>
                <div className="m-4">
                    <textarea className="w-full border border-gray-200 dark:border-gray-100/[0.3] p-2 bg-gray-900 rounded text-white" name="autoRespond" placeholder="Type message here"></textarea>
                    <button className="p-2 px-6 mt-2 rounded-sm border border-green-500 text-green-500">Save</button>
                </div>
            </div>

            <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                <h3 className="text-lg font-semibold text-red-500 p-4 bg-gray-100 dark:bg-gray-800">Delete Endpoint?</h3>
                <p className="opacity-[0.5] p-4">Click the button below to delete the endpoint permanently.</p>
                <button className=" flex items-center mx-4 p-2 px-6 bg-red-500 text-white rounded hover:bg-red-700" onClick={() => handleDelete()}>
                    { loading ? 
                    <FiLoader className="animate-spin mr-2" />:
                    <FaTrashAlt className="mr-2" /> 
                     }
                    Delete
                </button>
            </div>
        </div>
    )
}