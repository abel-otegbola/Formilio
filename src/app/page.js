import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";


export default function Home() {
    return(
        <div>
            <div className="flex md:flex-nowrap flex-wrap md:px-[10%] px-[5%] font-body bg-slate-200/[0.2] dark:bg-gray-900">
                <div className="md:w-[50%] w-full mr-[5%] pb-5 pt-[5%]">
                    <h1 className="md:text-5xl text-4xl md:leading-[60px] leading-[50px] font-bold">Effortlessly generate HTML endpoints and collect Form submissions with ease.</h1>
                    <p className="my-4 leading-[25px]">Our HTML endpoint generator website is the best solution you've been looking for. With easy to use interface, you can effortlessly create HTML endpoints that arecustomized to your needs.
                    </p>
                    <div className="md:flex mt-7">
                        <a href="/signup" className="flex items-center justify-center p-[10px] px-[20px] md:my-0 my-2 md:mb-2 md:mb-0 mb-6 bg-blue hover:bg-hoverblue text-white rounded">Get Started <FaPaperPlane className="ml-2"/></a>
                        <a href="/signin" className="flex items-center justify-center p-[10px] px-[20px] md:ml-4 hover:text-white hover:bg-hoverblue border border-blue text-blue rounded">Try it out <FiArrowRightCircle className="ml-2"/></a>
                    </div>
                </div>
                <div className="md:w-[50%] w-full flex justify-center items-center py-[5%]">
                    <Image src={"/formui.webp"} width="500" height="500" alt="form ui"/>
                </div>
            </div>
        </div>
    )
}