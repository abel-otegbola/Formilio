export default function Submission({ data }) {
    return (
        <>
        {
            Object.keys(data).splice(0, 3).map((key, index) => (
                <div key={index} className="py-2 px-4 overflow-hidden">
                    <h5 className="text-[12px] opacity-[0.5]">{key}</h5>
                    <p className="pb-2 text-[14px] truncate">{data[key]}</p>
                </div>
            ))
        }
        </>
    )
}