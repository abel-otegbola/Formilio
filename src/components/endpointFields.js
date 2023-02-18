import { FaTimes } from "react-icons/fa";

export default function EndpointFields({ data }) {
    return (
        <>
        {
            Object.keys(data).map((key, index) => (
                (typeof data[key] === "object") ?
                    <div key={index} className="my-10 w-full">
                        <div key={index} className="p-2 w-full">
                            <h5 className="p-2 w-[50%]" placeholder="Name">{key}</h5>
                            <p className="p-2 w-[40%]">Object</p>
                        </div>
                        {
                        Object.keys(data[key]).map((innerkey, index) => (
                            <div key={index} className="p-2 py-1 ml-10">
                                <h5 className="p-2 w-[50%]" placeholder="Name">{innerkey}</h5>
                                <p className="p-2 w-[40%]">{data[key][innerkey]}</p>
                            </div>
                        ))
                        }
                    </div>
                :
                <div key={index} className="p-2 py-1 w-full">
                    <h5 className="p-2 w-[50%]" placeholder="Name">{key}</h5>
                    <p className="p-2 w-[40%] text-blue">{data[key]}</p>
                </div>
            ))
        }
        </>
    )
}