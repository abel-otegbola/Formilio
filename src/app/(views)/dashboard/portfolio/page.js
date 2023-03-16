'use client'
import { useState } from "react"
import { FaBehance, FaDribbble, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLink, FaPen, FaTimes, FaTwitter, FaUser } from "react-icons/fa"
import { v4 } from "uuid"
import Checkbox from "@/components/general/checkbox"
import SettingBox from "@/components/dashboard/settingBox"
import Preview from "@/components/portfolio/preview"

export default function Portfolio() {
    const [active, setActive] = useState("Editor")
    const [fullname, setFullname] = useState("John Doe")
    const [bio, setBio] = useState("Android developer with 5+ years experience creating amazing android applications")
    const [img, setImg] = useState({ title: "profile", url: "" })
    const [form, setForm] = useState(true)
    const [links, setLinks] = useState([])
    const [projects, setProjects] = useState([
        { id: 1, title: "Formilio", description: "A form generation website for static html websites. Can be used for portfolios, landing pages etc.", img: {title: "project", type: "image/jpg" ,url: "/formui.webp", }, link: "https://mailme.vercel.app" },
        { id: 2, title: "Medium", description: "A blogging platform for developers, designers and all software engineers.", img: {title: "project", type: "image/jpg" ,url: "/formui.webp", }, link: "https://mailme.vercel.app" },
    ])

    const socials = [
        {id: 0, title: "Custom", icon: <FaLink />},
        {id: 1, title: "Twitter", icon: <FaTwitter />},
        {id: 2, title: "Instagram", icon: <FaInstagram />},
        {id: 3, title: "Facebook", icon: <FaFacebook />},
        {id: 4, title: "Github", icon: <FaGithub />},
        {id: 5, title: "Behance", icon: <FaBehance />},
        {id: 6, title: "Dribbble", icon: <FaDribbble />},
    ]

    const filetoDataUri = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            resolve(e.target.result)
        }
        reader.readAsDataURL(file)
    })

    const handleThumbnail = (file) => {        
        filetoDataUri(file)
        .then(dataUri => {
            setImg({ title: file.name, url: dataUri })
        })
    }

    const handleProjectThumbnail = (file, id) => {
        filetoDataUri(file)
        .then(dataUri => {
            setProjects(
                projects.map(project => 
                    project.id === id ? (
                        { ...project, img: { title: file.name, url: dataUri, type: file.type }}
                    )
                    :
                    (
                        project
                    )
                )
            )
        })
    }

    
    const handleProjects = (query, id, value) => {
        setProjects(
            projects.map(item => 
                item.id === id ? 
                (
                    query === "title" ?
                    {...item, title: value }
                    : 
                    query === "link" ?
                    {...item, link: value}
                    :
                    {...item, description: e.target.value}
                ) :
                item
            )
        )
    }

    const handleLinks = (e, title, query) => {
        setLinks(
            links.map(item => 
                item.title === title ? 
                (
                    query === "username" ?
                    {...item, username: e.target.value }
                    :
                    {...item, link: e.target.value}
                ) :
                item
            )
        )
    }

    return (
        <div >
            <div className="grid grid-cols-2 w-fit gap-2 p-2 m-4 rounded bg-gray-100 dark:bg-gray-800">
                {
                    ["Editor", "Preview"].map((item, i) => (
                        <p 
                            key={i} 
                            className={`p-3 px-6 rounded border text-sm text-center hover:bg-white hover:dark:bg-gray-900 hover:border-blue hover:text-blue text-center cursor-pointer border  ${active === item ? "border-blue text-blue shadow-lg bg-white dark:bg-gray-900 dark:shadow-3xl" : "border-transparent"}`}
                            onClick={() => setActive(item)}
                        >{item}</p>
                    ))
                }
            </div>

            <div className="w-full">
                    <div className={`p-4 ${active === "Editor" ? "block" : "hidden"}`}>
                        <SettingBox text={"Full name"}>
                            <input 
                                className="w-full border border-gray-200 dark:border-gray-100/[0.3] p-2 bg-gray-100 dark:bg-gray-900 focus:outline-blue rounded" 
                                name="fullname" 
                                placeholder="e.g John Doe" 
                                onChange={(e) => setFullname(e.target.value)}
                            />
                        </SettingBox>

                        <SettingBox text={"Profile Image"}>
                                <input className="w-full border border-gray-200 dark:border-gray-100/[0.3] p-2 bg-gray-100 dark:bg-gray-900 focus:outline-blue rounded" type="file" onChange={(e) => handleThumbnail(e.target.files[0])} />
                        </SettingBox>

                        
                        <SettingBox text={"Bio (A brief introduction of yourself and what you do)"}>
                            <textarea 
                                className="w-full border border-gray-200 dark:border-gray-100/[0.3] p-2 bg-gray-100 dark:bg-gray-900 focus:outline-blue rounded" 
                                name="bio" 
                                placeholder="e.g Android Developer with 5+ years experience creating amazing android applications."
                                onChange={(e) => setBio(e.target.value)}>
                            </textarea>
                        </SettingBox>
                                

                        <SettingBox text={"Social Links"}>
                            {
                                links.map((link, i) => (
                                    <div key={i} className="flex items-center justify-between gap-2 flex-wrap shadow-md border border-gray-500/[0.3] p-3">
                                        <p className="w-[20%]">{link.title}</p>
                                        <input defaultValue={link.username} placeholder={`${link.title} username`} className="border bg-transparent border-gray-400 p-2 rounded" onChange={(e) => handleLinks(e, link.title, "username")} />
                                        <input defaultValue={link.link} placeholder={`${link.title} link`} className="border bg-transparent border-gray-400 p-2 rounded" onChange={(e) => handleLinks(e, link.title, "link")} />
                                        <FaTimes className="text-red" onClick={() => setLinks(links.filter(item => item.title !== link.title))} />
                                    </div>
                                ))
                            }
                            <div className="my-4">
                                <select className="p-2 bg-transparent rounded border border-gray-500/[0.3] " onChange={(e) => setLinks([...links, { title: e.target.value !== "Custom" ? e.target.value : e.target.value + " " + links.filter(l => l.title.indexOf("Custom") !== -1).length , icon: socials.filter(item => item.title === e.target.value).map(link => link.icon), link: "", username : "" }])}>
                                    {
                                        socials.filter(item => (links.map(m => (m.title))).indexOf(item.title) === -1).map((link, i) => (
                                            <option key={i} className="dark:bg-gray-900">{link.title}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </SettingBox>

                        <SettingBox text={"Projects & Works (Share some recent and amazing projects you worked on"}>
                            {
                                projects.map((project) => (
                                    <div key={project.id} className="flex items-center justify-between gap-2 flex-wrap shadow-md border border-gray-500/[0.3] p-3">
                                        <input defaultValue={project.username} placeholder="Project title" className="border bg-transparent border-gray-400 p-2 rounded" onChange={(e) => handleProjects("title", project.id, e.target.value)}/>
                                        <input className="border bg-transparent border-gray-400 p-2 rounded" type="file" onChange={(e) => handleProjectThumbnail(e.target.files[0], project.id)} />
                                        <input className="border bg-transparent border-gray-400 p-2 rounded" placeholder="Project link" onChange={(e) => handleProjects("link", project.id, e.target.value)} />
                                        <textarea defaultValue={project.description} placeholder="Project description" className="border bg-transparent border-gray-400 p-2 rounded" onChange={(e) => handleProjects("description", project.id, e.target.value)} ></textarea>
                                        <FaTimes className="text-red" onClick={() => setProjects(projects.filter(item => item.id !== project.id))} />
                                    </div>
                                ))
                            }
                            <div className="my-4">
                                <button className="p-2 px-6 bg-blue text-white rounded border border-gray-500/[0.3] " onClick={(e) => setProjects([...projects, { id: v4(), title: "Custom", description: "Your project description", img: {title: "project", type: "image/jpg" ,url: "/formui.webp", }, link: "" }])}>Add new</button>
                            </div>
                        </SettingBox>
                                
                        <SettingBox text={"Contact Form (Add a contact me form to your portfolio and choose endpoint to save submissions.)"}>
                            <Checkbox check={form} setCheck={setForm} text={"Add Contact Form"} />
                        </SettingBox>
                    </div>



                    <div className={`p-4 ${active === "Preview" ? "block" : "hidden"}`}>
                        <Preview data={{ img, fullname, bio, links, projects, form }} />
                    </div>
            </div>
        </div>
    )
}