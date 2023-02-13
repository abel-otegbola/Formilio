export default function Manage() {
    return (
        <div className="px-4">
            <div className="w-full h-[130px] bg-blue p-4 mb-4 rounded">
                <h4 className="text-white my-4 text-lg">Manage all form entries</h4>
                <div className="flex">
                    <a href="/dashboard/builder" className="p-3 px-6 rounded bg-hoverblue text-white mr-2 hover:bg-blue hover:border hover:border-white">Create new</a>
                </div>
            </div>
        </div>
    )
}