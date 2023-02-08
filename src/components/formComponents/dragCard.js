'use client'
import HeadingBlock from "./headingBlock";
import InputBlock from "./InputBlock";
import ParaBlock from "./paraBlock";
import TextAreaBlock from "./textAreaBlock";
import { useDrop, useDrag } from 'react-dnd';
import { useRef } from "react";
import ButtonBlock from "./buttonBlock";

export default function DragCard({ id, index, handleDrag, handleDelete, handleComponents, item, active, setActive }) {

    const ref = useRef(null);
    
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'card',
        item: { id, index },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
    
    const [{ handlerId }, drop] = useDrop(
        () => ({
          accept: 'card',
          collect: (monitor) => ({
            handlerId: monitor.getHandlerId(),
          }),
          hover: (item, monitor) => {
            if (!ref.current) return;
            const dragIndex = item.index;
            const hoverIndex = index;
            // Do nothing if target and source are same
            if (dragIndex === hoverIndex) return;
    
            const hoverRect = ref.current.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverRect.bottom - hoverRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverRect.top;
    
            // Only move when the mouse has crossed half of the items height
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
              return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
              return;
            }
    
            handleDrag(dragIndex, hoverIndex);
            item.index = hoverIndex;
          },
        }),
        [handleComponents.components]
      );
      
    const opacity = isDragging ? 0.5 : 1;

    drag(drop(ref));

    return (
        <div 
            onClick={()=> setActive(item.id)} 
            className={""}
            ref={ref}
            style={{ opacity }}
            data-handler-id={handlerId}
            >
            {
            item.title === "input" ? <InputBlock handleDelete={handleDelete} handleComponent={handleComponents} item={item} active={active === item.id ? true: false}></InputBlock> : 
            item.title === "heading" ? <HeadingBlock handleComponent={handleComponents} handleDelete={handleDelete} item={item} active={active === item.id ? true: false}></HeadingBlock> :
            item.title === "para" ? <ParaBlock handleComponent={handleComponents} handleDelete={handleDelete} item={item} active={active === item.id ? true: false}></ParaBlock>: 
            item.title === "textarea" ? <TextAreaBlock handleComponent={handleComponents} handleDelete={handleDelete} item={item} active={active === item.id ? true: false}></TextAreaBlock> : 
            item.title === "button" ? <ButtonBlock handleComponent={handleComponents} handleDelete={handleDelete} item={item} active={active === item.id ? true: false}></ButtonBlock> : ""
            }
        </div>
    )
}