

export default function Header({ text, icon, children }) {
    return (
        <div className="relative w-full p-4 bg-gradient-to-r mb-[30px] from-blue to-fuchsia-500 rounded-lg">
            <h4 className="flex items-center text-white my-4 text-lg">
                <div className="text-2xl opacity-[0.5] mr-2">
                    {icon}
                </div>
                {text}
            </h4>
            { children }

        </div>
    )
}