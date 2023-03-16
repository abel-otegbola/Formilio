

export default function Header({ text, icon, children }) {
    return (
        <div className="relative w-full bg-blue p-4 mb-4 rounded overflow-hidden">
            <h4 className="flex items-center text-white my-4 text-lg">
                <div className="animate-bounce text-3xl opacity-[0.5] mr-2">
                    {icon}
                </div>
                {text}
            </h4>
            { children }

        </div>
    )
}