import { FaInfoCircle } from "react-icons/fa";

export default function About() {
    return(
        <div className="p-[5%] md:px-[10%]">
            <div className="my-6">
                <h1 className=" flex items-center text-3xl font-semibold py-2">About Formilio <FaInfoCircle className="text-blue ml-3" /> </h1>
                <p>Easy data collector for any form.</p>
            </div>
        </div>
    )
}