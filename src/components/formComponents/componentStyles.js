import { useState } from "react";
import Background from "../stylesComponents/background";
import Layout from "../stylesComponents/layout";
import Size from "../stylesComponents/size";
import Typography from "../stylesComponents/typography";

export default function ComponentStyles({ active, item, handleComponent }) {
    const [open, setOpen] = useState(1)

    const { text, id, styles } = item

    // Change the typography [bold, italic, underline], alignment and size of the element
    const handleTypo = (index, value) => {
        handleComponent.setComponents(
            handleComponent.components.map(item => {
                if(item.id === id) {
                    item.styles[index] = value
                }
                return item
            })
        )
    }

    return (
        <div className={`dark:bg-gray-800/[0.3] p-2 ml-2`}>
            <div className="">
                
                <Layout styles={styles} setOpen={setOpen} open={open} handleTypo={handleTypo} />
                
                <Size styles={styles} setOpen={setOpen} open={open} handleTypo={handleTypo} />

                <Typography styles={styles} setOpen={setOpen} open={open} handleTypo={handleTypo} />

                <Background styles={styles} setOpen={setOpen} open={open} handleTypo={handleTypo} />

            </div>

        </div>
    )
}