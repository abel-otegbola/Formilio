"use client"
import Aos from "aos";
import 'aos/dist/aos.css'
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLink, FaPaperPlane } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";
import "../components/dashboard/jsonformat.css"


export default function Home() {
    const [active, setActive] = useState("HTML")
    const [dark, setDark] = useState(false)
    const [activeFeature, setActiveFeature] = useState("Email")
    const features = [
        {id: 1, title: "Email", description: "Formilio sends the submission to your email. You can also set other emails to receive submissions.", img: dark ? "email-dark.svg" : "/email.svg"},
        {id: 2, title: "Auto-Respond", description: "Formilio sends the auto respond message when you set it up in the endpoint.", img: dark ? "auto-respond-dark.svg" : "/auto-respond.svg"},
        {id: 3, title: "File-Upload", description: "Formilio makes it easy to receive files when uploaded.", img: dark ? "email-dark.svg" : "email.svg"}
    ]
    const forms = ["HTML", "PREVIEW"]

    useEffect(() => {
        Aos.init({
            once: true,
            mirror: false,
            duration: 600,
            easing: "ease-in-out-cubic",
        });
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDark(true)
        } else {
        setDark(false)
        }
    })

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setActiveFeature(features[index].title)
            if(index > 1) {
                index = 0
            }
            else {
                index++
            }
        }, 3000)
        return () => clearInterval(interval)
    }, [])


    return(
        <div>
            {/* header section */}
            <header className="flex md:flex-nowrap flex-wrap items-center justify-between md:p-[10%] p-[5%] font-display bg-slate-200/[0.2] dark:bg-gray-900">
                <div className="lg:w-[45%] w-full md:pt-0 pt-[10%] md:text-left text-center">
                    <div className="flex items-center p-1 pl-6 border border-gray-300/[0.5] mb-4 rounded-full w-fit md:mx-0 m-auto bg-white/[0.1] backdrop-blur-sm" data-aos="fade-up">
                        <IoIosRocket className="text-orange-500 mr-2" /> 
                        All your data in one place
                        <div className="ml-4">
                            <Image src={"/memoji_man_18.webp"} width="30" height="30" alt="memoji man" className="border border-white bg-blue rounded-full"/>
                        </div>
                    </div>
                    <h1 className="md:text-5xl text-4xl md:leading-[50px] leading-[45px] font-bold">Effortlessly generate HTML endpoints for your static forms.</h1>
                    <p className="my-4 leading-[25px]" data-aos="fade-up" data-aos-delay="400">With our website, you can easily generate endpoints for your static forms and start collecting data in no time.
                    </p>
                    <div className="md:flex mt-7 gap-4" data-aos="fade-up" data-aos-delay="600">
                        <a href="/login" className="flex items-center justify-center p-[13px] px-[20px] md:my-0 my-2 md:mb-0 mb-6 bg-blue hover:bg-hoverblue border border-blue text-white rounded">Get Started <FaPaperPlane className="animate-bounce ml-2"/></a>
                        <a href="/documentations" className="flex items-center justify-center p-[13px] px-[20px] hover:text-white hover:bg-hoverblue border border-blue text-blue rounded">Learn more <FiArrowRightCircle className="ml-2"/></a>   
                    </div>
                </div>
                {/* hero image */}
                <div className="relative lg:w-[50%] md:mt-0 mt-[40px] w-full" data-aos="zoom-in">
                    <Image src={"/code_snippet.png"} width="700" height="500" alt="man sitting pressing laptop" className="drop-shadow-xl"/>
                </div> 
            </header>
            
            <section className="md:px-[10%] px-[5%] py-[50px] font-body dark:bg-gray-800">
                <div className="md:w-[60%] m-auto w-full pb-5 pt-[5%] text-center">
                    <h1 className="md:text-5xl text-4xl md:leading-[50px] leading-[45px] font-bold" data-aos="fade-up">How it works</h1>
                    <p className="my-4 mb-7 leading-[25px]" data-aos="fade-up" data-aos-delay="200">No coding knowledge required! Our user-friendly platform makes it easy for anyone to create endpoints for their static forms and start collecting data immediately.
                    </p>
                </div>
                <div className="">
                    <div className=" my-[50px] flex flex-wrap items-center">
                        <Image src={dark? "create-dark.svg" : "/create.svg"} width={450} height={200} alt="create" className="m-auto" data-aos="zoom-in" />
                        <div className="mx-[5%] mt-[30px]">
                            <p className="text-blue"  data-aos="fade-up" data-aos-delay="200">1. Create</p>
                            <h2 className="py-2 font-bold text-3xl"  data-aos="fade-up" data-aos-delay="400">Generate endpoint</h2>
                            <p className="py-4 w-[70%]"  data-aos="fade-up" data-aos-delay="600">Once signed in, create a new endpoint indicating the title.</p>
                        </div>
                    </div>
                    
                    <div className="my-[50px] py-[20px] flex flex-wrap items-center bg-gray-500/[0.05]">
                        <div className="mx-[5%] mt-[30px] md:order-1 order-2 md:pl-[5%]">
                            <p className="text-blue"  data-aos="fade-up" data-aos-delay="200">2. Add</p>
                            <h2 className="py-2 font-bold text-3xl"  data-aos="fade-up" data-aos-delay="400">Add endpoint to your form</h2>
                            <p className="py-4 w-[70%]"  data-aos="fade-up" data-aos-delay="600">Together with the generated key, add the url in your form</p>
                        </div>
                        <Image src={dark? "form-dark.svg" : "/form.svg"} width={500} height={200} alt="form" className="m-auto md:order-2" data-aos="zoom-in" />
                    </div>
                    
                    <div className=" my-[50px] flex flex-wrap items-center">
                        <Image src={dark? "submission-dark.svg" : "/submission.svg"} width={500} height={200} alt="submission" className="m-auto" data-aos="zoom-in" />
                        <div className="mx-[5%] mt-[30px]">
                            <p className="text-blue"  data-aos="fade-up" data-aos-delay="200">3. Publish</p>
                            <h2 className="py-2 font-bold text-3xl"  data-aos="fade-up" data-aos-delay="400">Publish & Receive submissions</h2>
                            <p className="py-4 w-[70%]"  data-aos="fade-up" data-aos-delay="600">Make your form live and start receiving submissions.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* features section */}
            <section className="md:px-[10%] px-[5%] py-[50px] font-body">
                {/* features heading */}
                <div className="md:w-[60%] m-auto w-full pb-5 pt-[5%] text-center">
                    <h1 className="md:text-5xl text-4xl md:leading-[50px] leading-[45px] font-bold"  data-aos="fade-up" data-aos-delay="200">Features</h1>
                    <p className="my-4 mb-7 leading-[25px]"  data-aos="fade-up" data-aos-delay="400">Formilio offers you the best features that you'll ever need in your form. Keeping simplicity in mind, we've crafted the best way to integrate powerful features into your form within minutes.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-2 md:w-[85%] w-full m-auto p-2 rounded bg-gray-100 dark:bg-gray-800"  data-aos="fade-up" data-aos-delay="600">
                    {
                        features.map((item) => (
                            <p 
                                key={item.id} 
                                className={`p-3 rounded border text-sm text-center hover:bg-white hover:dark:bg-gray-900 hover:border-blue hover:text-blue text-center cursor-pointer border  ${activeFeature === item.title ? "border-blue text-blue shadow-lg bg-white dark:bg-gray-900 dark:shadow-3xl" : "border-transparent"}`}
                                onClick={() => setActiveFeature(item.title)}
                            >{item.title}</p>
                        ))
                    }
                </div>
                {
                    features.filter(item => item.title === activeFeature).map(feature => (
                        <div className="md:w-[85%] w-full m-auto bg-gray-300[0.1]" key={feature.id}>
                            <div className="flex md:flex-nowrap flex-wrap py-[7%] font-body dark:bg-gray-900">
                                <div className="md:w-[50%] w-full mr-[3%] ">
                                    <h1 className="md:text-3xl text-2xl md:leading-[40px] leading-[35px] font-bold" data-aos="fade-up" data-aos-duration="1000">{feature.title}</h1>
                                    <p className="my-4 leading-[25px]" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">{feature.description}
                                    </p>
                                    <div className="md:flex mt-7" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                        <a href="/documentations" className="flex items-center justify-center p-[10px] px-[20px] md:my-0 my-2 md:mb-0 mb-6 bg-blue hover:bg-hoverblue text-white rounded">Visit Documentations <FaPaperPlane className="ml-2"/></a>
                                    </div>
                                </div>
                                <div className="md:w-[50%] md:mt-0 mt-[40px] w-full" data-aos="zoom-in" data-aos-duration="1200">
                                    <Image src={feature.img} width="350" height="350" alt="form ui" className="drop-shadow-xl"/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>

            <section className="md:px-[10%] px-[5%] py-[50px] font-body">
                <div className="flex flex-col items-center justify-center items-center bg-blue/[0.8] backdrop-blur-sm w-full py-[10%] text-center rounded-lg">
                    <div className="flex items-center p-1 pl-6 border border-blue mb-4 rounded-full w-fit md:mx-0 m-auto bg-white/[0.1] backdrop-blur-sm" data-aos="fade-up">
                        <IoIosRocket className="text-orange-500 mr-2" /> 
                            Start creating your endpoints
                        <div className="ml-4">
                            <Image src={"/memoji_man_18.webp"} width="30" height="30" alt="memoji man" className="border border-white bg-blue rounded-full"/>
                        </div>
                    </div>
                    <h1 className="md:text-5xl text-4xl md:leading-[50px] leading-[45px] font-bold" data-aos="fade-up" data-aos-delay="200">Lets Get Started</h1>
                    <p className="my-4 w-[75%] mx-auto leading-[25px]" data-aos="fade-up" data-aos-delay="400">Get started by signing up and create your first endpoint.
                    </p>
                    <div className="flex justify-center mt-7 gap-4" data-aos="fade-up" data-aos-delay="600">
                        <a href="/login" className="flex items-center justify-center p-[10px] px-[20px] md:my-0 my-2 md:mb-0 mb-6 bg-blue hover:bg-hoverblue border border-blue text-white rounded">Get Started <FaPaperPlane className="animate-bounce ml-2"/></a> 
                    </div>
                </div>
            </section>
        </div>
    )
}