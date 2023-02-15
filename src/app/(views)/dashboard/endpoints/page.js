import EndpointFields from "@/components/endpointFields";
import hljs from "highlight.js";
import "./jsonformat.css"

export default function Endpoints() {
    const data = {
        Username: "String",
        Email: "String",
        Subject: "String",
        budget: {
            time: "String",
            amount: "Number"
        },
        message: "String",
        info: {
            type: "String",
            recurring: "Boolean",
            admins: "array"
        }
    };

    return (
        <div className="px-4">
            <div className="w-full h-[130px] bg-blue p-4 mb-4 rounded">
                <h4 className="text-white my-4 text-lg">Endpoints</h4>
                <div className="flex">
                    <a href="/dashboard/builder" className="p-3 px-6 rounded bg-hoverblue text-white mr-2 hover:bg-blue hover:border hover:border-white">Create new endpoint</a>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                <div className="md:w-[70%] w-full bg-gray-100 dark:bg-gray-800">
                    <h4 className="p-2 font-semibold text-lg">Create your data format:</h4>
                    <div className="px-1 py-4 bg-white dark:bg-gray-900">
                        <EndpointFields data={data} />

                        <div className="flex flex-wrap p-2 mt-3">
                            <input className="p-[12px] bg-gray-100 dark:bg-gray-800 md:w-[50%]" placeholder="Name" />
                            <select className="p-[12px] bg-gray-100 dark:bg-gray-800 md:w-[40%] ml-1" placeholder="type">
                                <option disabled>Type</option>
                                <option>String</option>
                                <option>Number</option>
                                <option>Array</option>
                                <option>Boolean</option>
                                <option>Object</option>
                            </select>
                            <button className="p-[12px] rounded flex-1 ml-1 bg-blue text-white hover:bg-hoverblue">Add</button>
                        </div>
                    </div>
                </div>
                <div className="md:w-[27%] w-full dark:bg-gray-900 p-5">
                    <pre className={`block mt-2`}
                            dangerouslySetInnerHTML={{ __html: hljs.highlight(JSON.stringify(data, null, 4), { language: "JSON" }).value }}>
                    </pre> 
                </div>
            </div>
        </div>
    )
}