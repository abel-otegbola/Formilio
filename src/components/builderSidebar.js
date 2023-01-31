export default function BuilderSidebar() {
    const components = ["Heading", "Paragraph", "Input", "Textarea", "Radio", 'Checkbox']

    return(
        <div className="w-[250px] p-2 mt-[20px] bg-gray-200/[0.3] dark:bg-gray-900 text-gray-500 dark:text-gray-300">
            <h4 className="p-2 border-2 border-gray-50/[0.1] border-b-blue">COMPONENTS</h4>

            <div className="grid grid-cols-2 gap-2 my-5">
                {
                    components.map((item,i) => {
                        return (
                            <p key={i} className="text-center p-3 py-7 border border-gray-100/[0.1] shadow-lg bg-white dark:bg-gray-800 hover:bg-blue hover:text-white cursor-pointer rounded" draggable="true">{item}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}