'use client'
import { useState } from "react"
import Image from 'next/image'
import { FaBehance, FaDribbble, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLink, FaPen, FaTimes, FaTwitter, FaUser } from "react-icons/fa"
import { v4 } from "uuid"

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
        setLinks(
            links.map(item => 
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
                        <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                            <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Full name</h3>
                            <div className="m-4">
                                <input 
                                    className="w-full border border-gray-200 dark:border-gray-100/[0.3] p-2 bg-gray-100 dark:bg-gray-900 focus:outline-blue rounded" 
                                    name="fullname" 
                                    placeholder="e.g John Doe" 
                                    onChange={(e) => setFullname(e.target.value)}/>
                            </div>
                        </div>

                        <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                            <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Profile Image</h3>
                            <div className="m-4">
                                <input className="w-full border border-gray-200 dark:border-gray-100/[0.3] p-2 bg-gray-100 dark:bg-gray-900 focus:outline-blue rounded" type="file" onChange={(e) => handleThumbnail(e.target.files[0])} />
                            </div>
                        </div>

                        <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                            <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Bio</h3>
                            <p className="opacity-[0.5] p-4">A brief introduction of yourself and what you do.</p>
                            <div className="m-4">
                                <textarea 
                                    className="w-full border border-gray-200 dark:border-gray-100/[0.3] p-2 bg-gray-100 dark:bg-gray-900 focus:outline-blue rounded" 
                                    name="bio" 
                                    placeholder="e.g Android Developer with 5+ years experience creating amazing android applications."
                                    onChange={(e) => setBio(e.target.value)}></textarea>
                            </div>
                        </div>

                        <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                            <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Social Links</h3>
                            <p className="opacity-[0.5] p-4">Add your social media links</p>
                            <div className="m-4">
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
                            </div>
                        </div>

                        <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                            <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Projects & Works</h3>
                            <p className="opacity-[0.5] p-4">Share some recent and amazing projects you worked on</p>
                            <div className="m-4">
                                {
                                    projects.map((project, i) => (
                                        <div key={i} className="flex items-center justify-between gap-2 flex-wrap shadow-md border border-gray-500/[0.3] p-3">
                                            <input defaultValue={project.username} placeholder="Project title" className="border bg-transparent border-gray-400 p-2 rounded" onChange={(e) => handleProject("title", project.id, e.target.value)}/>
                                            <input className="border bg-transparent border-gray-400 p-2 rounded" type="file" onChange={(e) => handleProjectThumbnail(e.target.files[0], project.id)} />
                                            <input className="border bg-transparent border-gray-400 p-2 rounded" placeholder="Project link" onChange={(e) => handleProject("link", project.id, e.target.value)} />
                                            <textarea defaultValue={project.description} placeholder="Project description" className="border bg-transparent border-gray-400 p-2 rounded" onChange={(e) => handleProject("description", project.id, e.target.value)} ></textarea>
                                            <FaTimes className="text-red" onClick={() => setProjects(projects.filter(item => item.id !== project.id))} />
                                        </div>
                                    ))
                                }
                                <div className="my-4">
                                    <button className="p-2 px-6 bg-blue text-white rounded border border-gray-500/[0.3] " onClick={(e) => setProjects([...projects, { id: v4(), title: "Custom", type: "", description: "Your project description", img: "/formui.png", link: "" }])}>Add new</button>
                                </div>
                            </div>
                        </div>

                        <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                            <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Contact me</h3>
                            <p className="opacity-[0.5] p-4">Add a contact me form to your portfolio and choose endpoint to save submissions.</p>
                            <div className="m-4 flex gap-2">
                                <div className="relative w-[40px] h-[20px] border border-gray-500 rounded-full" onClick={() => setForm(!form)}>
                                    <div className={`absolute w-[22px] h-[22px] rounded-full border-2 border-gray-700 top-[-2px] shadow-lg transition-all duration-500 ${form ? "right-[-1px] bg-blue" : "right-[20px] bg-gray-500"} `}></div>
                                </div>
                                <p>Add contact form</p>
                            </div>
                        </div>
                    </div>



                    <div className={`p-4 ${active === "Preview" ? "block" : "hidden"}`}>
                        <div className="p-[5%] my-[20px]">
                            <div className="">
                                <Image src={img.url} alt={img.title} className="border-2 border-blue rounded-lg mb-2" width={200} height={200} />
                                <h1 className="text-3xl font-bold py-4">{fullname}</h1>
                                <p className="py-2">{bio}</p>
                            </div>
                        </div>

                        {
                            links.length > 0 ?
                                <div className="p-[5%] my-[20px]">
                                    <h2 className="font-bold text-xl my-8">SOCIAL LINKS</h2>
                                    <div className="my-4 grid md:grid-cols-4 gap-4 grid-cols-2">
                                    {
                                        links.map((link, i) => (
                                            <a href={link.link} key={i} className="p-6 dark:bg-gray-800 rounded-xl shadow-xl">
                                                <div className="text-2xl p-2 rounded-lg shadow-lg bg-blue text-white w-fit">{link.icon}</div>
                                                <p className="pt-2">{link.username}</p>
                                            </a>
                                        ))
                                    }
                                    </div>
                                </div>
                            :
                            ""
                        }

                        {
                            projects.length > 0 ?
                                <div className="p-[5%] my-[20px]">
                                    <h2 className="font-bold text-xl my-8">PROJECTS AND WORKS</h2>
                                    <div className="my-4 grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-1">
                                    {
                                        projects.map((project) => (
                                            <a href={project.link} key={project.id} className="p-4 dark:bg-gray-800 rounded-xl shadow-xl">
                                                {
                                                    project.img.type.indexOf("video") !== -1 ?
                                                    <video src={project.img.url} alt={project.img.title} className="w-full" controls>
                                                        <source src={project.img.url} type="video/mp4"></source>
                                                        <source src={project.img.url} type="video/ogg"></source>
                                                    </video>
                                                    :
                                                    <Image src={project.img.url} alt={project.img.title} className="w-full" width={300} height={300} />
                                                }
                                                <h2 className="text-2xl py-6">{project.title}</h2>
                                                <p className="pt-2">{project.description}</p>
                                            </a>
                                        ))
                                    }
                                    </div>
                                </div>
                            :
                            ""
                        }

                        {
                            form ?
                                <div className="p-[5%] my-[20px]">
                                    <h2 className="font-bold text-xl my-8">CONTACT ME</h2>
                                    <form action="" method="post" className="md:w-[50%] w-full">

                                        <label className="mb-2">Full name:</label>
                                        <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                                            <FaUser className="p-2 px-3 text-4xl text-gray-500" />
                                            <input type="text" name="fullname" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " required={true} />
                                        </div>

                                        <label className="mb-2">Email:</label>
                                        <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                                            <FaEnvelope className="p-2 px-3 text-4xl text-gray-500" />
                                            <input type="email" name="email" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " required={true} />
                                        </div>

                                        <label className="mb-2">Message:</label>
                                        <div className="flex w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                                            <FaPen className="p-2 px-3 text-4xl text-gray-500" />
                                            <textarea type="text" name="message" className="p-[12px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " required={true}></textarea>
                                        </div>

                                        <button type="submit" className="flex justify-center items-center p-[13px] w-full bg-blue border border-blue hover:bg-hoverblue text-white rounded mt-5">Submit</button>

                                    </form>
                                </div>
                            : ''
                        }
                    </div>
            </div>
        </div>
    )
}