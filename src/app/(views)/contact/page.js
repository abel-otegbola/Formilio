import { FaEnvelope, FaEnvelopeOpen, FaEnvelopeSquare, FaMapMarker, FaPen, FaPhoneSquare, FaUser } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="p-[5%] md:px-[10%]">
            <div className="my-6">
                <h1 className=" flex items-center text-3xl font-semibold py-2">Contact Us <FaEnvelopeOpen className="text-blue ml-3" /> </h1>
                <p>Get a message across to us.</p>
            </div>

            <div className="flex flex-wrap my-8">
                <div className="md:w-[30%] w-full my-7">
                    <div className="flex items-center py-4">
                        <FaPhoneSquare className="text-3xl p-2 rounded bg-blue mr-4" />
                        <div>
                            <h3 className="py-1 text-lg">+012 3456 789</h3>
                            <p className="opacity-[0.8]">mon-sun (8:00am - 9:00pm)</p>
                        </div>
                    </div>
                    <div className="flex items-center py-4">
                        <FaEnvelopeSquare className="text-3xl p-2 rounded bg-blue mr-4" />
                        <div>
                            <h3 className="py-1 text-lg">formilio@support.com</h3>
                            <p className="opacity-[0.8]">mon-sun (8:00am - 9:00pm)</p>
                        </div>
                    </div>
                    <div className="flex items-center py-4">
                        <FaMapMarker className="text-3xl p-2 rounded bg-blue mr-4" />
                        <div>
                            <h3 className="py-1 text-lg">Lagos, Nigeria</h3>
                            <p className="opacity-[0.8]">mon-sun (8:00am - 9:00pm)</p>
                        </div>
                    </div>
                </div> 

                <div className="md:w-[70%] w-full">
                    <form action={`https://mailme.vercel.app/api/endpoint/2y04cgf2mc`} method="post" className="bg-slate-100 dark:bg-gray-800/[0.6] rounded p-[5%]">

                        <div className="grid md:grid-cols-2 gap-2 ">
                            <label>Name:
                                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                                    <FaUser className="p-2 text-3xl text-gray-500" />
                                    <input type="text" name="fullname" className="p-[10px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " required={true} />
                                </div>
                            </label>

                            <label>Email:
                                <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                                    <FaEnvelope className="p-2 text-3xl text-gray-500" />
                                    <input type="email" name="email" className="p-[10px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " required={true} />
                                </div>
                            </label>
                        </div>
                        
                        <label>Subject:
                            <div className="flex items-start w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                                <FaPen className="p-2 text-3xl text-gray-500" />
                                <input type="text" name="subject" className="p-[10px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " required={true} />
                            </div>
                        </label>

                        <label>Message:
                            <div className="flex items-start w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                                <FaPen className="p-2 text-3xl text-gray-500" />
                                <textarea type="text" name="message" className="p-[10px] flex-1 focus:outline-2 focus:outline-blue dark:bg-gray-900 " required={true}></textarea>
                            </div>
                        </label>

                        <button type="submit" className="flex justify-center items-center p-[13px] w-full bg-blue hover:bg-hoverblue text-white rounded mt-5">Send Message</button>

                    </form>

                </div>
            </div>

           
        </div>
    )
}