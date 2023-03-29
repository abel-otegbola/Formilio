"use client"
import hljs from "highlight.js";
import Image from "next/image";
import { useState } from "react";
import { FaCode, FaLink, FaPaperPlane, FaSave } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";
import "../components/dashboard/jsonformat.css"


export default function Home() {
    const [active, setActive] = useState("HTML")
    const [activeFeature, setActiveFeature] = useState("Email Submission")
    const features = [
        {id: 1, title: "Email Submission", description: "Formilio sends the submission to your email. You can also set other emails to receive submissions."},
        {id: 2, title: "Auto Responder", description: "Formilio sends the auto respond message when you set it up in the endpoint."},
        {id: 3, title: "File Upload", description: "Formilio makes it easy to receive files when uploaded."},
        {id: 4, title: "Drag and Drop Builder", description: "Formilio allows you to build your own email template, Invoice and Quotes as well as a fully working form."}
    ]
    const forms = ["HTML", "PREVIEW"]


    return(
        <div>
            {/* header section */}
            <header className="flex md:flex-nowrap flex-wrap items-center mb-[7%] md:px-[10%] px-[5%] font-body bg-[url('/bg.png')] bg-cover bg-slate-200/[0.2] dark:bg-gray-900">
                <div className="md:w-[50%] w-full md:pt-0 pt-[20%] md:text-left text-center">
                    <div className="flex items-center p-1 pl-6 border border-blue mb-4 rounded-full w-fit md:mx-0 m-auto bg-white/[0.1] backdrop-blur-sm">
                        <IoIosRocket className="text-orange-500 mr-2" /> 
                        All your data in one place
                        <div className="ml-4">
                            <Image src={"/memoji_man_18.webp"} width="30" height="30" alt="memoji man" className="border border-white bg-blue rounded-full"/>
                        </div>
                    </div>
                    <h1 className="md:text-5xl text-4xl md:leading-[50px] leading-[45px] font-bold">Effortlessly generate HTML endpoints for your static forms.</h1>
                    <p className="my-4 leading-[25px]">With our website, you can easily generate endpoints for your static forms and start collecting data in no time.
                    </p>
                    <div className="md:flex mt-7 gap-4">
                        <a href="/login" className="flex items-center justify-center p-[10px] px-[20px] md:my-0 my-2 md:mb-0 mb-6 bg-blue hover:bg-hoverblue text-white rounded">Get Started <FaPaperPlane className="ml-2"/></a>
                        <a href="/documentations" className="flex items-center justify-center p-[10px] px-[20px] hover:text-white hover:bg-hoverblue border border-blue text-blue rounded">Learn more <FiArrowRightCircle className="ml-2"/></a>   
                    </div>
                </div>
                {/* hero image */}
                <div className="relative md:w-[50%] md:mt-0 mt-[40px] w-full">
                    <Image src={"/herobg.png"} width="700" height="500" alt="man sitting pressing laptop" className="drop-shadow-xl"/>
                    <div className="absolute top-[40px] right-[30px] p-2 rounded-full bg-white">
                        <Image src={"/memoji_man_14.webp"} width="100" height="100" alt="memoji man" className="rounded-full bg-blue/[0.6] backdrop-blur-sm p-4 shadow-xl"/>
                    </div>
                </div>
            </header>
            
            <section className="md:px-[10%] p-[5%] font-body dark:bg-gray-800">
                <div className="md:w-[60%] m-auto w-full pb-5 pt-[5%] text-center">
                    <h1 className="md:text-5xl text-4xl md:leading-[50px] leading-[45px] font-bold">How it works</h1>
                    <p className="my-4 mb-7 leading-[25px]">No coding knowledge required! Our user-friendly platform makes it easy for anyone to create endpoints for their static forms and start collecting data immediately.
                    </p>
                </div>
                <div className="flex flex-wrap justify-between w-full bg-[url('/bg.png')] bg-cover bg-gray-300[0.1]">
                        {/* <div className="bg-[url('/macos.svg')] bg-no-repeat md:h-[350px] h-[300px] p-[25px]" style={{ backgroundSize: "100% 100%" }}> */}
                            
                            {/* <div className="overflow-x-auto leading-[25px] md:text-[14px] text-[12px]">
                                <p>1<span className="ml-2" dangerouslySetInnerHTML={{__html: hljs.highlight(`<form action='https://formilio.vercel.app/api/endpoint/{My endpoint}' method='post'>`, { language: "HTML" }).value}}></span></p>
                                <p>2<span className="ml-6" dangerouslySetInnerHTML={{__html: hljs.highlight(`<input type='text' name='fullname'/>`, {language: "HTML" }).value}}></span></p>
                                <p>3<span className="ml-6" dangerouslySetInnerHTML={{__html: hljs.highlight(`<input type='email' name='email'/>`, {language: "HTML" }).value}}></span></p>
                                <p>4<span className="ml-6" dangerouslySetInnerHTML={{__html: hljs.highlight(`<textarea name='message'></textarea>`, {language: "HTML" }).value}}></span></p>
                                <p>5<span className="ml-6" dangerouslySetInnerHTML={{__html: hljs.highlight(`<button type='submit'>Send message</button>`, {language: "HTML" }).value}}></span></p>
                                <p>6<span className="ml-2" dangerouslySetInnerHTML={{__html: hljs.highlight(`</form>`, {language: "HTML" }).value}}></span></p>
                            </div> */}
                            <div className="md:w-[30%] my-[30px] w-full text-center">
                                <div className="w-fit m-auto rounded-xl bg-gradient-to-r p-[15px] backdrop-blur-xl from-blue/[0.2] to-fuchsia-500/[0.2]">
                                    <video src={"/generate.webm"} alt={"generate"} width={200} height={150} className="rounded-lg" autoPlay  muted loop>
                                        <source src={"/generate.webm"} type="video/mp4"></source>
                                        <source src={"/generate.webm"} type="video/ogg"></source>
                                    </video>
                                </div>
                                <h2 className="text-blue py-2 font-semibold text-xl">Generate endpoint</h2>
                                <p className="py-4">Once signed in, create a new endpoint indicating the title.</p>
                            </div>
                            
                            <div className="md:w-[30%] my-[30px] w-full text-center">
                                <div className="w-fit m-auto rounded-xl bg-gradient-to-r p-[15px] backdrop-blur-xl from-blue/[0.2] to-fuchsia-500/[0.2]">
                                    <video src={"/form.webm"} alt={"generate"} width={200} height={150} className="rounded-lg" autoPlay  muted loop>
                                        <source src={"/generate.webm"} type="video/mp4"></source>
                                        <source src={"/generate.webm"} type="video/ogg"></source>
                                    </video>
                                </div>
                                <h2 className="text-blue py-2 font-semibold text-xl">Add endpoint to your form</h2>
                                <p className="py-4">Together with the generated key, add the url in your form</p>
                            </div>
                            
                            <div className="md:w-[30%] my-[30px] w-full text-center">
                                <div className="w-fit m-auto rounded-xl bg-gradient-to-r p-[15px] backdrop-blur-xl from-blue/[0.2] to-fuchsia-500/[0.2]">
                                    <video src={"/submission.webm"} alt={"generate"} width={200} height={150} className="rounded-lg" autoPlay  muted loop>
                                        <source src={"/generate.webm"} type="video/mp4"></source>
                                        <source src={"/generate.webm"} type="video/ogg"></source>
                                    </video>
                                </div>
                                <h2 className="text-blue py-2 font-semibold text-xl">Receive submissions</h2>
                                <p className="py-4">Publish your form and start receiving submissions.</p>
                            </div>
                </div>
            </section>
            
            {/* features section */}
            <section className="md:px-[10%] p-[5%] font-body">
                {/* features heading */}
                <div className="md:w-[60%] m-auto w-full pb-5 pt-[5%] text-center">
                    <h1 className="md:text-5xl text-4xl md:leading-[50px] leading-[45px] font-bold">Features</h1>
                    <p className="my-4 mb-7 leading-[25px]">Formilio offers you the best features that you'll ever need in your form. Keeping simplicity in mind, we've crafted the best way to integrate powerful features into your form within minutes.
                    </p>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-2 p-2 rounded bg-gray-100 dark:bg-gray-800">
                    {
                        features.map((item) => (
                            <p 
                                key={item.id} 
                                className={`p-3 px-6 rounded border text-sm text-center hover:bg-white hover:dark:bg-gray-900 hover:border-blue hover:text-blue text-center cursor-pointer border  ${activeFeature === item.title ? "border-blue text-blue shadow-lg bg-white dark:bg-gray-900 dark:shadow-3xl" : "border-transparent"}`}
                                onClick={() => setActiveFeature(item.title)}
                            >{item.title}</p>
                        ))
                    }
                </div>
                {
                    features.filter(item => item.title === activeFeature).map(feature => (
                        <div className="md:w-[75%] w-full m-auto bg-gray-300[0.1]" key={feature.id}>
                            <div className="flex md:flex-nowrap flex-wrap md:px-[10%] px-[5%] py-[7%] font-body bg-[url('/bg.png')] bg-cover bg-slate-200/[0.2] dark:bg-gray-900">
                                <div className="md:w-[50%] w-full mr-[3%] ">
                                    <h1 className="md:text-3xl text-2xl md:leading-[40px] leading-[35px] font-bold">{feature.title}</h1>
                                    <p className="my-4 leading-[25px]">{feature.description}
                                    </p>
                                    <div className="md:flex mt-7">
                                        <a href="/documentations" className="flex items-center justify-center p-[10px] px-[20px] md:my-0 my-2 md:mb-0 mb-6 bg-blue hover:bg-hoverblue text-white rounded">Visit Documentations <FaPaperPlane className="ml-2"/></a>
                                    </div>
                                </div>
                                <div className="relative md:w-[50%] md:mt-0 mt-[40px] w-full bg-gradient-to-r p-[20px] backdrop-blur-xl from-blue/[0.2] to-fuchsia-500/[0.2]">
                                    <Image src={"/bgdashboard.png"} width="700" height="500" alt="form ui" className="drop-shadow-xl"/>
                                    <div className="absolute animate-pulse top-[30px] w-[200px] right-4 p-4 px-6 shadow-2xl w-fit rounded-lg text-white backdrop-blur-sm bg-blue/[0.6]">
                                        <h3 className="font-bold pb-2">NEW ENDPOINT</h3>
                                        <p className="flex items-center py-2"><FaLink className="p-1 text-xl bg-blue text-white mr-2 rounded-full" /> Portfolio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}