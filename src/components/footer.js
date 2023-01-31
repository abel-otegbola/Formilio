

export default function AppFooter() {
    return (
        <div className="bg-slate-100 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between px-[10%] py-[7%]">
                <ul className="md:w-[25%] pr-5">
                    <h3 className="text-xl font-bold my-3">PRODUCTS</h3>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Dashboard</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">FAQs</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Features & Pricing</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Contact Us</a></li>
                </ul>
                <ul className="md:w-[25%] pr-5">
                    <h3 className="text-xl font-bold my-3">GUIDES</h3>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">How to build a simple HTML contact form</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">How to create a file upload form</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">How to upload files from your HTML forms</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">How to create email templates</a></li>
                </ul>
                <ul className="md:w-[25%] pr-5">
                    <h3 className="text-xl font-bold my-3">RESOURCES</h3>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Documentations</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Mailme Blog</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Mailme Tutorials</a></li>
                    <li className="w-full flex"><a href="/" className="w-full py-2 hover:text-blue">Examples</a></li>
                </ul>
                <ul className="md:w-[25%] pl-5">
                    <h3 className="text-xl font-bold my-3">FORM CODE EXAMPLES</h3>
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