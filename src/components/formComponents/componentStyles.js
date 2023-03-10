import { BsTextCenter, BsTextLeft, BsTextRight } from "react-icons/bs";
import { FaStrikethrough, FaTrashAlt } from "react-icons/fa";
import { FiBold, FiItalic, FiLink, FiUnderline } from "react-icons/fi";
import Layout from "../stylesComponents/layout";
import Size from "../stylesComponents/size";
import Typography from "../stylesComponents/typography";

export default function ComponentStyles({ active, item, handleComponent }) {

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
                
                <Layout styles={styles} handleTypo={handleTypo} />
                
                <Size styles={styles} handleTypo={handleTypo} />

                <Typography styles={styles} handleTypo={handleTypo} />

            </div>

        </div>
    )
}