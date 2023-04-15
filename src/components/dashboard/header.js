

export default function Header({ text, icon, children }) {
    return (
        <div className="relative w-full p-4 bg-gradient-to-r mb-[30px] bg-gray-400/[0.1] rounded-lg">
            <h4 className="flex items-center my-4 text-lg">
                {text}
            </h4>
            { children }

        </div>
    )
}