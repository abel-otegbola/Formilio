import Header from "@/components/header";
import { FaDesktop } from "react-icons/fa";

export default function Templates() {
    const data = [
        {id: 1, title: "Thank you", type: "thankyou", user: "abel15655@gmail.com", description: "Thank you page template. Clean and customizable template.", img: "/formui.webp"},
        {id: 2, title: "Email Template", type: "email", user: "abel15655@gmail.com", description: "Email Template you can use for your form email submission.", img: "/formui.webp"},
        {id: 3, title: "Invoice", type: "invoice", user: "abel15655@gmail.com", description: "If you need to send an invoice to your customer after they fill your form.", img: "/formui.webp"},
        {id: 4, title: "Quotes", type: "quote", user: "abel15655@gmail.com", description: "Quote template you can use to receive your payments.", img: "/formui.webp"},
    ]

    return (
        <div className="px-4">
            <Header text={"Templates"} icon={<FaDesktop />}>
                <p className="text-white">Choose a template for your forms.</p>
            </Header>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[40px] py-4">
                {
                    data.map(template => (
                        <div key={template.id} className="rounded bg-gray-50 dark:bg-gray-50/[0.05]">
                            <div className="bg-gradient-to-r from-blue/[0.4] to-fuchsia-500/[0.4] p-6 rounded">
                                <img className="rounded" src={template.img} width={"100%"} alt={template.img} />
                            </div>
                            <div className="p-[20px]">
                                <h3 className="text-xl font-semibold pb-4 pt-2">{template.title}</h3>
                                <p>{template.description}</p>
                                <div className="flex items-center mt-4 gap-2">
                                    <a href={`/dashboard/builder?id=${template.id}`} className="p-2 px-4 rounded border border-blue text-blue">Customize</a>
                                    <a href={`/dashboard/endpoints?template=${template.id}&type=${template.type}`} className="p-2 px-4 rounded border border-blue text-blue">Choose</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}