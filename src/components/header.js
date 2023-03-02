

export default function Header({ text, icon, image, children }) {
    return (
        <div className="relative w-full bg-blue p-4 mb-4 rounded overflow-hidden">
            <div className="absolute -right-2 -bottom-2 text-3xl opacity-[0.5] mr-2 hover:opacity-[1] hover:animate-bounce">
                {image ? <img src={image} width={100} height={100} alt={image} /> : "" }
            </div>
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