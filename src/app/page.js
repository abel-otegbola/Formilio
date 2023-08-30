"use client"
import 'aos/dist/aos.css'
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FiArrowRightCircle, FiFolderPlus, FiPenTool, FiSave } from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";
import "../components/dashboard/jsonformat.css"


export default function Home() {
    const [dark, setDark] = useState(false)
    const features = [
        {id: 1, title: "Email", description: "Formilio sends the submission to your email. You can also set other emails to receive submissions.", img: dark ? "email-dark.svg" : "/email.svg"},
        {id: 2, title: "Auto-Respond", description: "Formilio sends the auto respond message when you set it up in the endpoint.", img: dark ? "auto-respond-dark.svg" : "/auto-respond.svg"},
        {id: 3, title: "File-Upload", description: "Formilio makes it easy to receive files when uploaded.", img: dark ? "email-dark.svg" : "email.svg"}
    ]
    const forms = ["HTML", "PREVIEW"]

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDark(true)
        } else {
        setDark(false)
        }
    })


    return(
        <div>
            {/* header section */}
            <header className="flex flex-col md:flex-nowrap flex-wrap items-center justify-center p-[5%] font-display bg-slate-200/[0.2] dark:bg-gray-900">
                <div className="lg:w-[75%] mb-[60px] w-full md:pt-0 pt-[10%] md:text-left md:text-center">
                    <div className="flex items-center md:mx-auto p-1 pl-6 border border-gray-300/[0.5] mb-4 rounded-full w-fit bg-white/[0.1] backdrop-blur-sm">
                        <IoIosRocket className="text-orange-500 mr-2" /> 
                        All your data in one place
                        <div className="ml-4">
                            <Image src={"/memoji_man_18.webp"} width="30" height="30" alt="memoji man" className="border border-white bg-blue rounded-full"/>
                        </div>
                    </div>
                    <h1 className="md:text-7xl md:text-center text-4xl md:leading-[75px] leading-[45px] font-bold">Collect Data From Your Website Forms with Ease.</h1>
                    <p className="my-4 leading-[25px] md:text-center" >With our website, you can easily generate endpoints for your static forms and start collecting data in no time.
                    </p>
                    <div className="md:flex justify-center mt-7 gap-4" >
                        <a href="/login" className="flex gap-2 items-center justify-center p-[13px] px-[20px] md:my-0 my-2 md:mb-0 mb-6 bg-blue hover:bg-hoverblue border border-blue text-white rounded">Get Started <FaPaperPlane/></a>
                        <a href="/documentations" className="flex items-center justify-center p-[13px] px-[20px] hover:text-white hover:bg-hoverblue border border-blue text-blue rounded">Learn more <FiArrowRightCircle className="ml-2"/></a>   
                    </div>
                </div>
                {/* hero image */}
                <div className="lg:w-[50%] md:mt-0 my-[40px] w-full">
                    <Image src={"/code_snippet.png"} width="700" height="500" alt="man sitting pressing laptop" className="drop-shadow-xl rounded-[30px]"/>
                </div> 
            </header>
            
            <section className="md:px-[10%] px-[5%] py-[50px] font-body bg-gray-800 text-white dark:bg-gray-800">
                <div className="md:w-[60%] m-auto w-full pb-5 pt-[5%] md:text-center">
                    <h1 className="md:text-5xl text-3xl md:leading-[50px] leading-[45px] font-bold">How it works</h1>
                    <p className="my-4 mb-7 leading-[25px]" >No coding knowledge required! Our user-friendly platform makes it easy for anyone to create endpoints for their static forms and start collecting data immediately.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    <div className="p-[5%] bg-gradient-to-b from-gray-500/[0.05] to-gray-700/[0.1] rounded-lg">
                        <p className="text-white text-2xl w-fit md:mx-auto p-4 my-4 rounded bg-blue" ><FiPenTool /></p>
                        <h2 className="py-2 md:text-center font-bold text-xl" >Sign up and create endpoint</h2>
                        <p className="py-4 md:text-center" >Once signed in, create a new endpoint indicating the title.</p>
                    </div>
                    
                    <div className="p-[5%] bg-gradient-to-b from-gray-500/[0.05] to-gray-700/[0.1] rounded-lg">
                        <p className="text-white text-2xl w-fit md:mx-auto p-4 my-4 rounded bg-blue" ><FiFolderPlus /></p>
                        <h2 className="py-2 md:text-center font-bold text-xl" >Insert endpoint into your form</h2>
                        <p className="py-4 md:text-center" >Together with the generated key, add the url in your form</p>
                    </div>
                    
                    <div className="p-[5%] bg-gradient-to-b from-gray-500/[0.05] to-gray-700/[0.1] rounded-lg">
                        <p className="text-white text-2xl w-fit md:mx-auto p-4 my-4 rounded bg-blue" ><FiSave /></p>
                        <h2 className="py-2 md:text-center font-bold text-xl" >Publish your form and receive data</h2>
                        <p className="py-4 md:text-center" >Make your form live and start receiving submissions.</p>
                    </div>
                </div>
            </section>
            
            {/* features section */}
            <section className="md:px-[10%] px-[5%] py-[50px] font-body">
                {/* features heading */}
                <div className="md:w-[60%] m-auto w-full pb-5 pt-[5%] md:text-center">
                    <h1 className="md:text-5xl text-3xl md:leading-[50px] leading-[45px] font-bold" >Features</h1>
                    <p className="my-4 mb-7 leading-[25px]" >Formilio offers you the best features that you'll ever need in your form. Keeping simplicity in mind, we've crafted the best way to integrate powerful features into your form within minutes.
                    </p>
                </div>
                
                {/* {
                    features.map(feature => (
                        <div className="md:w-[85%] w-full m-auto bg-gray-300[0.1]" key={feature.id}>
                            <div className="flex md:flex-nowrap flex-wrap py-[7%] font-body dark:bg-gray-900">
                                <div className="md:w-[50%] w-full mr-[3%] ">
                                    <h1 className="md:text-3xl text-2xl md:leading-[40px] leading-[35px] font-bold">{feature.title}</h1>
                                    <p className="my-4 leading-[25px]">{feature.description}
                                    </p>
                                    <div className="md:flex mt-7">
                                        <a href="/documentations" className="flex items-center justify-center p-[10px] px-[20px] md:my-0 my-2 md:mb-0 mb-6 bg-blue hover:bg-hoverblue text-white rounded">Visit Documentations <FaPaperPlane className="ml-2"/></a>
                                    </div>
                                </div>
                                <div className="md:w-[50%] md:mt-0 mt-[40px] w-full">
                                    <Image src={feature.img} width="350" height="350" alt="form ui" className="drop-shadow-xl"/>
                                </div>
                            </div>
                        </div>
                    ))
                } */}
            </section>

            <section className="md:px-[10%] px-[5%] py-[50px] font-body">
                <div className="flex flex-col items-center justify-center items-center bg-gray-800 text-white backdrop-blur-sm w-full py-[10%] text-center rounded-lg">
                    <div className="flex items-center p-1 pl-6 border border-blue mb-4 rounded-full w-fit md:mx-0 m-auto bg-white/[0.1] backdrop-blur-sm">
                        <IoIosRocket className="text-orange-500 mr-2" /> 
                            Start creating your endpoints
                        <div className="ml-4">
                            <Image src={"/memoji_man_18.webp"} width="30" height="30" alt="memoji man" className="border border-white bg-blue rounded-full"/>
                        </div>
                    </div>
                    <h1 className="md:text-5xl text-4xl md:leading-[50px] leading-[45px] font-bold" >Lets Get Started</h1>
                    <p className="my-4 w-[75%] mx-auto leading-[25px]" >Get started by signing up and create your first endpoint.
                    </p>
                    <div className="flex justify-center mt-7 gap-4" >
                        <a href="/login" className="flex items-center justify-center p-[10px] px-[20px] md:my-0 my-2 md:mb-0 mb-6 bg-blue hover:bg-hoverblue border border-blue text-white rounded">Get Started <FaPaperPlane className="animate-bounce ml-2"/></a> 
                    </div>
                </div>
            </section>
        </div>
    )
}