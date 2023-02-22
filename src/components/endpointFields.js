import { FaTimes } from "react-icons/fa";

export default function EndpointFields({ data }) {
    return (
        <>
        {
            Object.keys(data).map((key, index) => (
                (typeof data[key] === "object") ?
                    <div key={index} className="my-10">
                        <div key={index} className="py-2 w-full">
                            <h5 className="p-2" placeholder="Name">{key}</h5>
                            <p className="p-2">Object</p>
                        </div>
                        {
                        Object.keys(data[key]).map((innerkey, index) => (
                            <div key={index} className="py-2 py-1 ml-10">
                                <h5 className="p-2" placeholder="Name">{innerkey}</h5>
                                <p className="p-2">{data[key][innerkey]}</p>
                            </div>
                        ))
                        }
                    </div>
                :
                <div key={index} className="py-2 w-full">
                    <h5 className="text-[10px]" placeholder="Name">{key}</h5>
                    <p className="pb-2 text-blue">{data[key].substring(0, 50)}</p>
                </div>
            ))
        }
        </>
    )
}