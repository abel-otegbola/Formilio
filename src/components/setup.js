export default function Setup () {
    return (
        <div>
            <div className="flex">
                {
                    ["HTML", "JQuery", "React"].map((item, index) => (
                        <button key={index} className="p-2 border border-transparent border-b-gray-300/[0.4] hover:border-b-blue hover:text-blue">{item}</button>
                    ))
                }
            </div>
        </div>
    )
}