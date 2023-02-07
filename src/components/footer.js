

export default function AppFooter() {
    return (
        <div className="bg-slate-100 dark:bg-gray-800">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between md:px-[10%] px-[5%] py-[7%]">
                <ul className="my-2 mb-4 pr-[40px]">
                    <li className="text-xl font-bold my-3">PRODUCTS</li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Dashboard</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">FAQs</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Features & Pricing</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Contact Us</a></li>
                </ul>
                <ul className="my-2 mb-4 pr-[40px]">
                    <li className="text-xl font-bold my-3">GUIDES</li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">How to build a simple HTML contact form</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">How to create a file upload form</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">How to upload files from your HTML forms</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">How to create email templates</a></li>
                </ul>
                <ul className="my-2 mb-4 pr-[40px]">
                    <li className="text-xl font-bold my-3">RESOURCES</li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Documentations</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Mailme Blog</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Mailme Tutorials</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Examples</a></li>
                </ul>
                <ul className="my-2 mb-4">
                    <li className="text-xl font-bold my-3">FORM CODE EXAMPLES</li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">HTML form</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">React form</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Vue js form</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Nextjs form</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">All forms</a></li>
                </ul>
            </div>
            <div className="px-[10%] py-[20px] bg-slate-200 dark:bg-gray-900 text-center">
                <p>Copyright &copy; {new Date().getFullYear()} || Abelo</p>
            </div>
        </div>
    )
}