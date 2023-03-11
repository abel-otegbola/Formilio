'use client'
import { useEffect, useState } from "react";
import { FaCaretDown, FaCaretRight, FaPlus, FaTimes } from "react-icons/fa";
import InputColor from "react-input-color" 

export default function Background({ styles, open, setOpen, handleTypo }) {
    const [active, setActive] = useState("Solid")
    const [color, setColor] = useState("#000")
    const [gradients, setGradients] = useState(["#000", "transparent"])

    const type = [ "Solid", "Gradient", "Radial", "Image"];

    useEffect(() => {
        console.log(color)
    }, [color])

    const handleGradient = (value) => {
        setGradients([
            ...gradients,
            value.hex
        ])
    }

    return(
        <div className="p-2">
            <h3 className="flex items-center py-3 cursor-pointer" onClick={() => setOpen(4)}>{ open === 4 ? <FaCaretDown className="mr-2" /> : <FaCaretRight className="mr-2" />} Background</h3>

            <div className={`${open === 4 ? "h-auto" : "h-0"} overflow-hidden transition-all duration-700`}>
                {/* paragraph alignment options */}
                <div className="my-1">
                    <select className="p-2 w-full border rounded-sm border-gray-200/[0.05] text-[10px] bg-white dark:bg-gray-900" onChange={(e) => {setActive(e.target.value)}} defaultValue={"Solid"}>
                        {
                            type.map(item => (
                                <option key={item}>{item}</option>
                            ))
                        }
                    </select>
                    { 
                        active === "Solid" ?
                        <div className="my-1 w-full border border-gray-200 dark:border-gray-200/[0.05] rounded z-50">
                            <div className="flex items-center my-1 justify-between w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                                <div className="flex items-center">
                                    <InputColor initialValue="#6252f2" onChange={setColor} placement={"right"} />
                                    <p className="text-sm">{color.hex}</p>
                                </div>
                                <p className="px-2 text-[9px] opacity-[0.5]" >COLOR</p>
                            </div>
                        </div>
                        : 

                        active === "Gradient" || active === "Radial" ? 
                        <div className={`my-1 gap-1`}>
                            {
                                gradients.map((color, i) => (
                                    <div key={i} className="flex items-center my-1 justify-between w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                                        <div className="flex items-center my-1 justify-between w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                                            <div className="flex items-center">
                                                <InputColor initialValue={color} onChange={handleGradient} placement={"right"} />
                                                <p className="text-sm">{color.hex}</p>
                                            </div>
                                            <p className="px-2 text-[9px] opacity-[0.5]" >COLOR</p>
                                        </div>
                                    </div>
                                ))
                            }
                            
                            <button className="flex items-center p-2 border border-blue rounded text-blue text-sm" onClick={() => setGradients([...gradients, "transparent"])} ><FaPlus className="mr-2"/>Add color</button>
                        </div>

                        :

                        active === "Image" ? 
                        <div className="my-1">
                            <div className="flex items-center w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                                <input className="border border-transparent p-2 pr-0 bg-transparent text-[10px] rounded" name="image" type="file"/>
                                <p className="px-2 text-[9px] opacity-[0.5]" >IMAGE</p>
                            </div>
                            <div className="my-1 grid grid-cols-2 gap-1">
                                <div className="flex items-center w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                                    <select className="p-2 w-full border rounded-sm border-gray-200/[0.05] text-[10px] bg-white dark:bg-gray-900" defaultValue={"cover"}>
                                        {
                                            ["cover", "contain", "100%"].map(item => (
                                                <option key={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                    <p className="px-2 text-[9px] opacity-[0.5]" >SIZE</p>
                                </div>
                                <div className="flex items-center w-full border border-gray-200 dark:border-gray-200/[0.05] rounded">
                                    <input className="border border-transparent p-2 pr-0 bg-transparent w-[30px] rounded" name="width" type="text" defaultValue={"auto"}/>
                                    <input className="border border-transparent p-2 pr-0 bg-transparent w-[30px] rounded" name="width" type="text" defaultValue={"auto"}/>
                                    <p className="px-2 text-[9px] opacity-[0.5]" >POSITION</p>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                    }
                </div>
            </div>
            
        </div>
    )
}