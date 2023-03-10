'use client'
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react";
import Popup from "../popup"
import { FiLoader } from "react-icons/fi";
import { FaTimes, FaUpload } from "react-icons/fa";

export default function Publish({ type, id, components, templateTags }) {
    const [templateType, setTemplateType] = useState(type)
    const [templateKey, setTemplateKey] = useState(id)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const [tags, setTags] = useState([])
    const [name, setName] = useState("")
    const { data: session } = useSession()

    useEffect(() => {
        if(templateTags) {
            setTags(templateTags)
        }
    }, [templateTags])

    const updateTemplate = async () => {
        setLoading(true)
        await fetch(`/api/addTemplate`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ key: templateKey, user: session.user.email, type: templateType, tags: tags.join(","), components: JSON.stringify(components) })
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setError(data.error)
            }
            else {
                setSuccess("Template updated successfully")
                setLoading(false)
            }
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }
    
    const addTag = () => {
        if(name !== "") {
            setTags([...tags, name]); 
            setName("")
        }
        else {
            setError("Input field should not be empty")
        }
    }


    return (
        <div className="p-4">

            { (success !== "") ? <Popup text={success} color={"green"} /> : "" }
            { (error !== "") ? <Popup text={error} color={"red"} /> : "" }

            <div className="p-4 my-2 bg-gray-100 dark:bg-gray-800">
                <h3 className="font-semibold mb-2">Type:</h3>
                <select className="p-2 rounded bg-transparent border border-gray-500/[0.1]" defaultValue={type} onChange={(e) => setTemplateType(e.target.value)}>
                    {
                        ["thank you", "email", "form", "quotation", "invoice"].map((item,i) => (
                            <option key={i} className="dark:bg-gray-900" >{item}</option>
                        ))
                    }
                </select>
            </div>
            <div className="p-4 my-2 bg-gray-100 dark:bg-gray-800">
                <h3 className="font-semibold mb-2">Endpoint:</h3>
                <input className="p-2 rounded bg-transparent border border-gray-500/[0.1]" defaultValue={id} onChange={e => setTemplateKey(e.target.value)} />
            </div>
            <div className="p-4 my-2 bg-gray-100 dark:bg-gray-800">
                <h3 className="font-semibold mb-2">Tags:</h3>
                <div className="flex items-center flex-wrap w-fit gap-2 border border-gray-200 dark:border-gray-100/[0.3] p-1 rounded">
                    {
                        tags.map((tag, i) => (
                            <p key={i} className="p-3 px-6 bg-blue text-white rounded hover:bg-hoverblue flex items-center">{tag} <FaTimes className="ml-2" onClick={() => setTags(tags.filter(item => item !== tag))} /></p>
                        ))
                    }
                    <input className="border border-transparent p-2 dark:bg-gray-900 rounded" name="tag" type="text" value={name} placeholder="Type tag here" onChange={(e) => setName(e.target.value)} />
                    <button className="p-2 px-6 rounded-sm border border-blue text-blue" onClick={() => addTag()} >Add</button>
                </div>
            </div>
            <button className="flex items-center mx-4 p-2 px-6 bg-green-500 text-white rounded hover:bg-green-700 my-4" onClick={() => updateTemplate()}>
                { loading ? 
                    <FiLoader className="animate-spin mr-2" />:
                    <FaUpload className="mr-2" /> 
                     }
                Save
            </button>
        </div>
    )
}