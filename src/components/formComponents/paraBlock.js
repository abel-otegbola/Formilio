
export default function ParaBlock({ active }) {
    return(
        <div className={`relative text-center border ${active ? "border-blue": "border-gray-100/[0.2]"}`}>
            <p  className="p-2">Lorem ipsum dolor sit amet consectetur, adipiscing elit nascetur ullamcorper.</p>
        </div>
    )
}