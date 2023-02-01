
export default function ParaBlock({ active }) {
    return(
        <div className={`relative text-center border ${active ? "border-blue": "border-gray-400/[0.2]"}`}>
            <p ref={ref} className="p-5" contentEditable="true">Lorem ipsum dolor sit amet consectetur, adipiscing elit nascetur ullamcorper.</p>
        </div>
    )
}