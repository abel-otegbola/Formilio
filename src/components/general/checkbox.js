export default function Checkbox({ check, setCheck, text }) {
    return (
        <div className="m-4 flex gap-2">
            <div className="relative w-[40px] h-[20px] border border-gray-500 rounded-full" onClick={() => setCheck(!check)}>
                <div className={`absolute w-[22px] h-[22px] rounded-full border-2 border-gray-700 top-[-2px] shadow-lg transition-all duration-500 ${check ? "right-[-1px] bg-blue" : "right-[20px] bg-gray-500"} `}></div>
            </div>
            <p>{text}</p>
        </div>
    )
}