import { FaInfoCircle } from "react-icons/fa";

export default function About() {
    return(
        <div className="p-[5%] md:px-[10%]">
            <div className="my-6">
                <h1 className=" flex items-center text-3xl font-semibold py-2">About Formilio <FaInfoCircle className="text-blue ml-3" /> </h1>
                <p>Easy data collector for any form.</p>
            </div>
            <p className="py-4">Hello, welcome to Formilio, the endpoint creator for static forms. We are a team of passionate developers who are dedicated to simplifying data management for businesses of all sizes. At Formilio, we understand the challenges that businesses face when it comes to managing data. That's why we've developed a solution that makes it easy to integrate static forms with your database or third-party tools. </p>    
            <p className="py-4">Our team is comprised of experienced developers who are committed to delivering innovative solutions that meet the unique needs of our clients. We're constantly exploring new technologies and finding new ways to improve our platform, so you can trust us to provide you with the latest and most effective solutions.</p>
            <p className="py-4">We believe that data should be accessible and easy to manage, which is why we're committed to delivering a platform that simplifies data management for businesses. Our endpoint creator enables you to automate form submissions, customize your form endpoints, and secure your data, all in one easy-to-use platform.</p>    
            <p className="py-4">Thank you for choosing Formilio as your endpoint creator. We're 🎉excited to help you simplify your data management and take your business to the next level🚀.</p>
        </div>
    )
}