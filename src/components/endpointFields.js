import { FaTimes } from "react-icons/fa";

export default function EndpointFields({ data }) {
    return (
        <>
        {
            Object.keys(data).map((key, index) => (
                (typeof data[key] === "object") ?
                    <div key={index} className="my-10 w-full">
                        <div key={index} className="flex flex-wrap p-2 w-full">
                            <h5 className="p-[12px] bg-gray-100 dark:bg-gray-800 w-[50%]" placeholder="Name">{key}</h5>
                            <p className="p-[12px] bg-gray-100 dark:bg-gray-800 w-[40%] ml-1">Object</p>
                            <button className="p-[12px] rounded flex-1 ml-1 text-blue text-center hover:text-hoverblue"><FaTimes /></button>
                        </div>
                        {
                        Object.keys(data[key]).map((innerkey, index) => (
                            <div key={index} className="flex flex-wrap p-2 py-1 ml-10">
                                <h5 className="p-[12px] bg-gray-100 dark:bg-gray-800 w-[50%]" placeholder="Name">{innerkey}</h5>
                                <p className="p-[12px] bg-gray-100 dark:bg-gray-800 w-[40%] ml-1">{data[key][innerkey]}</p>
                                <button className="p-[12px] rounded flex-1 ml-1 text-blue text-center hover:text-hoverblue"><FaTimes /></button>
                            </div>
                        ))
                        }
                    </div>
                :
                <div key={index} className="flex flex-wrap p-2 py-1 w-full">
                    <h5 className="p-[12px] bg-gray-100 dark:bg-gray-800 w-[50%]" placeholder="Name">{key}</h5>
                    <p className="p-[12px] bg-gray-100 dark:bg-gray-800 w-[40%] ml-1 text-sky-500">{data[key]}</p>
                    <button className="p-[12px] rounded flex-1 ml-1 text-blue text-center hover:text-hoverblue"><FaTimes /></button>
                </div>
            ))
        }
        </>
    )
}