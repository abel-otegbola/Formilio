

export default function AppFooter() {
    const products = [ "docs", "FAQs", "contact" ]
    const guides = [ "How to build a simple HTML contact form", "How to create a file upload form", "How to upload files from your HTML forms", "How to create email templates" ]
    const resources = [ "features","templates", "examples" ]
    const templates = [ "contact form", "job application", "event schedule", "more templates" ]

    return (
        <div className="">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between md:px-[10%] px-[5%] py-[7%]">
                <ul className="my-2 mb-4 pr-[40px]">

                    <li className="font-bold my-3">PRODUCTS</li>
                    { 
                    products.map((item,i) => (
                        <li key={i} className="w-full flex"><a href={`/${item}`} className="w-full py-2 hover:text-blue capitalize">{item}</a></li>
                    )) 
                    }

                </ul>
                <ul className="my-2 mb-4 pr-[40px]">
                    <li className="font-bold my-3">GUIDES</li>

                    { 
                    guides.map((item,i) => (
                        <li key={i} className="w-full flex"><a href={`/docs#guides?${item}`} className="w-full py-2 hover:text-blue">{item}</a></li>
                    )) 
                    }

                </ul>
                <ul className="my-2 mb-4 pr-[40px]">
                    <li className="font-bold my-3">RESOURCES</li>

                    { 
                    resources.map((item,i) => (
                        <li key={i} className="w-full flex"><a href={`/docs#${item}`} className="w-full py-2 hover:text-blue capitalize">{item}</a></li>
                    )) 
                    }

                </ul>
                <ul className="my-2 mb-4">
                    <li className="font-bold my-3">FORM CODE EXAMPLES</li>

                    { 
                    templates.map((item,i) => (
                        <li key={i} className="w-full flex"><a href={`/docs#examples?${item}`} className="w-full py-2 hover:text-blue capitalize">{item}</a></li>
                    )) 
                    }
                    
                </ul>
            </div>
            <div className="px-[10%] py-[20px] text-center">
                <p>Copyright &copy; {new Date().getFullYear()} || Abelo</p>
            </div>
        </div>
    )
}