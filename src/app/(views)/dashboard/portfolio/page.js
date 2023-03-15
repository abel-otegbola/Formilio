'use client'
import { useState } from "react"
import Image from 'next/image'
import { FaEnvelope, FaPen, FaUser } from "react-icons/fa"

export default function Portfolio() {
    const [active, setActive] = useState("Editor")
    const [fullname, setFullname] = useState("John Doe")
    const [bio, setBio] = useState("Android developer with 5+ years experience creating amazing android applications")
    const [img, setImg] = useState({ title: "profile", url: "" })
    const [form, setForm] = useState(true)
    const [links, setLinks] = useState({
        twitter: "Abel_Otegbola", instagram: "Abel_Otegbola", linkedIn: "abel-otegbola", medium: "abel-otegbola", dribbble: "abel-otegbola"
    })
    const [projects, setProjects] = useState([
        { id: 1, title: "Formilio", description: "A form generation website for static html websites. Can be used for portfolios, landing pages etc.", link: "https://mailme.vercel.app" },
        { id: 1, title: "Medium", description: "A blogging platform for developers, designers and all software engineers.", link: "https://mailme.vercel.app" },
    ])

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
                                <textarea className="w-full border border-gray-200 dark:border-gray-100/[0.3] p-2 bg-gray-100 dark:bg-gray-900 focus:outline-blue rounded" name="bio" placeholder="e.g Android Developer with 5+ years experience creating amazing android applications."></textarea>
                            </div>
                        </div>

                        <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                            <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Projects & Works</h3>
                            <p className="opacity-[0.5] p-4">Share some recent and amazing projects you worked on</p>
                            <div className="m-4">
                                <textarea className="w-full border border-gray-200 dark:border-gray-100/[0.3] p-2 bg-gray-100 dark:bg-gray-900 focus:outline-blue rounded" name="bio" placeholder="e.g Android Developer with 5+ years experience creating amazing android applications."></textarea>
                            </div>
                        </div>

                        <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
                            <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">Contact me</h3>
                            <p className="opacity-[0.5] p-4">Add a contact me form to your portfolio and choose endpoint to save submissions.</p>
                            <div className="m-4">
                                <div className="relative w-[40px] h-[20px] border border-gray-500 rounded-full" onClick={() => setForm(!form)}>
                                    <div className={`absolute w-[22px] h-[22px] rounded-full border-2 border-gray-700 top-[-2px] shadow-lg transition-all duration-500 ${form ? "right-[-1px] bg-blue" : "right-[20px] bg-gray-500"} `}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`p-4 ${active === "Preview" ? "block" : "hidden"}`}>
                        <div className="p-[5%]">
                            <div className="">
                                <Image src={img.url} alt={img.title} className="border-2 border-blue rounded-lg mb-2" width={200} height={200} />
                                <h1 className="text-3xl font-bold py-2">{fullname}</h1>
                                <p className="py-2">{bio}</p>
                            </div>
                        </div>

                        {
                            form ?
                                <div className="p-[5%]">
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

                                        <button type="submit" className="flex justify-center items-center p-[13px] w-full bg-blue hover:bg-hoverblue text-white rounded mt-5">Submit</button>

                                    </form>
                                </div>
                            : ''
                        }
                    </div>
            </div>
        </div>
    )
}