import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

export default function Home() {
    return(
        <div>
            <div className="flex md:flex-nowrap flex-wrap md:px-[10%] px-[5%] font-body bg-slate-200/[0.2] dark:bg-gray-900">
                <div className="md:w-[50%] w-full mr-[5%] pb-5 pt-[8%]">
                    <h1 className="text-5xl leading-[60px] font-bold">Streamline form creation for static HTML websites</h1>
                    <p className="my-4 leading-[25px]">Simplify your website building process with our form generator- the perfect solution for creating custom forms on your static HTML website.
                        With user-friendly interface and intuitive drag and drop functionality,, you can effortlessly design forms that meet your specific need.
                    </p>
                    <div className="md:flex mt-7">
                        <a href="/signup" className="flex items-center justify-center p-[10px] px-[20px] md:my-0 my-2 bg-blue hover:bg-hoverblue text-white rounded">Get Started <FaPaperPlane className="ml-2"/></a>
                        <a href="/try" className="flex items-center justify-center p-[10px] px-[20px] md:ml-4 hover:text-white hover:bg-hoverblue border border-blue text-blue rounded">Try it out <FiArrowRightCircle className="ml-2"/></a>
                    </div>
                </div>
                <div className="md:w-[50%] w-full flex justify-center items-center py-[5%]">
                    <Image src={"/formui.webp"} width="500" height="500" alt="form ui"/>
                </div>
            </div>
        </div>
    )
}