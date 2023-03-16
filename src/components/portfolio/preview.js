import { FaEnvelope, FaPen, FaUser } from "react-icons/fa";
import Image from 'next/image'

export default function Preview({ data }) {

    const { img, fullname, bio, links, projects, form } = data;

    return (
        <div>
            <div className="p-[5%] my-[20px]">
                            <div className="">
                                {
                                    img.type.indexOf("video") !== -1 ?
                                    <video src={img.url} alt={img.title} width={200} height={200} className="rounded" autoPlay controls loop>
                                        <source src={img.url} type="video/mp4"></source>
                                        <source src={img.url} type="video/ogg"></source>
                                    </video>
                                    :
                                    <Image src={img.url} alt={img.title} className="border-2 border-blue rounded-lg mb-2" width={200} height={200} />
                                }
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
                                                    <video src={project.img.url} alt={project.img.title} className="w-full rounded" autoPlay controls loop>
                                                        <source src={project.img.url} type="video/mp4"></source>
                                                        <source src={project.img.url} type="video/ogg"></source>
                                                    </video>
                                                    :
                                                    <Image src={project.img.url} alt={project.img.title} className="w-full rounded" width={300} height={300} />
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
    )
}