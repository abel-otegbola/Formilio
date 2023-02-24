export default function Submission({ data }) {
    return (
        <>
        {
            Object.keys(data).splice(0, 3).map((key, index) => (
                <div key={index} className="py-2 w-full">
                    <h5 className="text-[12px] opacity-[0.5]">{key}</h5>
                    <p className="pb-2 text-[14px]">{data[key].substring(0, 17)}</p>
                </div>
            ))
        }
        </>
    )
}