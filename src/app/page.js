import hljs from "highlight.js";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import "../components/jsonformat.css"


export default function Home() {
    return(
        <div>
            <div className="flex md:flex-nowrap flex-wrap md:px-[10%] px-[5%] py-[7%] font-body bg-[url('/bg.png')] bg-cover bg-slate-200/[0.2] dark:bg-gray-900">
                <div className="md:w-[50%] w-full mr-[3%] ">
                    <h1 className="md:text-5xl text-4xl md:leading-[50px] leading-[45px] font-bold">Effortlessly generate HTML endpoints for your static forms.</h1>
                    <p className="my-4 leading-[25px]">With our website, you can easily generate endpoints for your static forms and start collecting data in no time.
                    </p>
                    <div className="md:flex mt-7">
                        <a href="/signup" className="flex items-center justify-center p-[10px] px-[20px] md:my-0 my-2 md:mb-0 mb-6 bg-blue hover:bg-hoverblue text-white rounded">Get Started <FaPaperPlane className="ml-2"/></a>
                        <a href="/test" className="flex items-center justify-center p-[10px] px-[20px] md:ml-4 hover:text-white hover:bg-hoverblue border border-blue text-blue rounded">Try it out <FiArrowRightCircle className="ml-2"/></a>
                    </div>
                </div>
                <div className="md:w-[50%] md:mt-0 mt-[40px] w-full bg-gradient-to-r p-[20px] backdrop-blur-xl from-blue/[0.2] to-fuchsia-500/[0.2]">
                    <Image src={"/bgdashboard.png"} width="700" height="500" alt="form ui" className="drop-shadow-xl"/>
                </div>
            </div>
            
            <div className="md:px-[10%] p-[5%] font-body dark:bg-gray-800">
                <div className="md:w-[60%] m-auto w-full pb-5 pt-[5%] text-center">
                    <h1 className="md:text-5xl text-4xl md:leading-[50px] leading-[45px] font-bold">Get Started in Minutes</h1>
                    <p className="my-4 mb-7 leading-[25px]">No coding knowledge required! Our user-friendly platform makes it easy for anyone to create endpoints for their static forms and start collecting data immediately.
                    </p>
                    <div className="md:flex mt-7 justify-center">
                        <a href="/signup" className="w-[150px] flex items-center justify-center p-[10px] px-[20px] m-auto bg-blue hover:bg-hoverblue text-white rounded">Get Started <FaPaperPlane className="ml-2"/></a>
                    </div>
                </div>
                <div className="md:w-[75%] w-full m-auto bg-gray-300[0.1]">
                    <div className="bg-[url('/form.png')] bg-cover bg-no-repeat md:h-auto h-[300px] p-[15%] px-[10%] md:py-[20%] md:px-[10%]">
                        <div className="overflow-x-auto leading-[25px] md:text-[14px] text-[12px]">
                            <p>1<span className="ml-2" dangerouslySetInnerHTML={{__html: hljs.highlight(`<form action='https://formilio.com/api/endpoint/{My endpoint}' method='post'>`, { language: "HTML" }).value}}></span></p>
                            <p>2<span className="ml-6" dangerouslySetInnerHTML={{__html: hljs.highlight(`<input type='text' name='fullname'/>`, {language: "HTML" }).value}}></span></p>
                            <p>3<span className="ml-6" dangerouslySetInnerHTML={{__html: hljs.highlight(`<input type='email' name='email'/>`, {language: "HTML" }).value}}></span></p>
                            <p>4<span className="ml-6" dangerouslySetInnerHTML={{__html: hljs.highlight(`<textarea name='message'></textarea>`, {language: "HTML" }).value}}></span></p>
                            <p>5<span className="ml-6" dangerouslySetInnerHTML={{__html: hljs.highlight(`<button type='submit'>Send message</button>`, {language: "HTML" }).value}}></span></p>
                            <p>6<span className="ml-2" dangerouslySetInnerHTML={{__html: hljs.highlight(`</form>`, {language: "HTML" }).value}}></span></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="md:px-[10%] p-[5%] font-body">
                <div className="md:w-[60%] m-auto w-full pb-5 pt-[5%] text-center">
                    <h1 className="md:text-5xl text-4xl md:leading-[50px] leading-[45px] font-bold">Features</h1>
                    <p className="my-4 mb-7 leading-[25px]">Formilio offers you the best features that you'll ever need in your form. Keeping simplicity in mind, we've crafted the best way to integrate powerful features into your form within minutes.
                    </p>
                </div>
                <div className="md:w-[75%] w-full m-auto bg-gray-300[0.1]">
                </div>
            </div>
        </div>
    )
}