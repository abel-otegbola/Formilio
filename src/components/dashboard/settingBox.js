export default function SettingBox({ children, text, subtext }) {
    return (
        <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-gray-900 my-10">
            <h3 className="text-lg font-semibold p-4 bg-gray-100 dark:bg-gray-800">{text}</h3>
            <p className="opacity-[0.5] m-4">{subtext}</p>
            <div className="m-4">
                {children}
            </div>
        </div>
    )
}