import { useState } from "react"
import { FaPenFancy, FaSave, FaTrashAlt } from "react-icons/fa"
import Popup from "./general/popup"
import { useRouter } from "next/navigation"
import { FiLoader } from "react-icons/fi"

export default function Settings({ id }) {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const [emails, setEmails] = useState([])
    const [name, setName] = useState("")
    const [autoRespond, setAutoRespond] = useState("")
    const [thankyouLink, setThankyouLink] = useState("")
    const [active, setActive] = useState("Default")
    const [openModal, setOpenModal] = useState(true)
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

    const handleUpdate = async (type) => {
        setLoading(true)
        let data = {}
        if(type === "autoRespond") {
            data.autoRespond = autoRespond
        }
        else if(type === "thankyouLink") {
            data.thankyouLink = thankyouLink
        }
        await fetch(`/api/updateEndpoint/${id}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setError(data.error)
            }
            else {
                setSuccess(`${type} added successfully`)
                setLoading(false)
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
                <p className="opacity-[0.5] p-4">Use a your custom link or customize the default.</p>
                <div className="grid grid-cols-2 w-fit m-4 gap-2 p-2 bg-gray-100 dark:bg-gray-900">
                {
                    ["Default", "Custom link"].map((item, i) => (
                        <p 
                            key={i} 
                            className={`p-3 px-6 rounded border text-sm text-center hover:bg-white hover:dark:bg-gray-900 hover:border-blue hover:text-blue text-center cursor-pointer border  ${active === item ? "border-blue text-blue shadow-lg bg-white dark:bg-gray-900 dark:shadow-3xl" : "border-transparent"}`}
                            onClick={() => setActive(item)}
                        >{item}</p>
                    ))
                }
                </div>
                <div className="p-4">
                    {
                        active === "Default" ?
                            <div className="">
                                <button className="flex items-center bg-blue text-white p-2 px-6 rounded" onClick={() => setOpenModal(!openModal)}><FaPenFancy className="mr-2" /> Customize</button>
                                {openModal ? "" : ""}
                            </div>
                        :
                            <div className="flex items-center gap-2">
                                <input className="p-2 bg-transparent border border-gray-600/[0.3] rounded focus:outline-blue" onChange={(e) => setThankyouLink(e.target.value)} placeholder="Enter link" />
                                <button className="flex items-center bg-green-500 text-white p-2 px-6 rounded" onClick={() => handleUpdate("thankyouLink")}>
                                { loading ? 
                                    <FiLoader className="animate-spin mr-2" />:
                                    <FaSave className="mr-2"/> 
                                }
                                    Save
                                </button>
                            </div>
                    }
                </div>
            </div>
            
            {/* <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Emails</h3>
                <p className="opacity-[0.5] p-4">Email addresses to notify of submissions</p>
                <div className="flex items-center flex-wrap w-fit gap-2 border border-gray-200 dark:border-gray-100/[0.3] p-1 m-4 rounded">
                    {
                        emails.map(email => (
                            <p className="p-3 px-6 bg-blue text-white rounded hover:bg-hoverblue flex items-center">{email} <FaTimes className="ml-2" onClick={() => setEmails(emails.filter(item => item !== email))} /></p>
                        ))
                    }
                    <input className="border border-transparent p-2 bg-gray-100 dark:bg-gray-900 focus:outline-blue rounded" name="email" type="email" value={name} placeholder="Type email here" onChange={(e) => setName(e.target.value)} />
                    <button className="p-2 px-6 rounded-sm border border-blue text-blue" onClick={() => addEmail()} >Add</button>
                </div>
                <button className="flex items-center mx-4 p-2 px-6 bg-blue text-white rounded hover:bg-hoverblue">
                    { loading ? 
                    <FiLoader className="animate-spin mr-2" />:
                    <FaUpload className="mr-2"/> 
                     }
                    Update
                </button>
            </div> */}
            
            <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Auto Respond email</h3>
                <p className="opacity-[0.5] p-4">Send message to user email. Add the auto respond message below.</p>
                <div className="m-4">
                    <textarea className="w-full border border-gray-200 dark:border-gray-100/[0.3] p-2 bg-gray-100 dark:bg-gray-900 focus:outline-blue rounded text-white" name="autoRespond" onChange={(e) => setAutoRespond(e.target.value)} placeholder="Type message here"></textarea>
                    <button className="p-2 px-6 mt-2 rounded text-white bg-green-500" onClick={() => handleUpdate()}>Save</button>
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