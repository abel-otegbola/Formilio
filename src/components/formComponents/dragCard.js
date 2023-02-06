'use client'
import HeadingBlock from "./headingBlock";
import InputBlock from "./InputBlock";
import ParaBlock from "./paraBlock";
import TextAreaBlock from "./textAreaBlock";
import { useDrop, useDrag } from 'react-dnd';
import { useRef } from "react";

export default function DragCard({ id, index, handleDrag, handleComponents, item, active, setActive }) {

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
      
    const opacity = isDragging ? 1 : 1;

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
            item.title === "input" ? <InputBlock active={active === item.id ? true: false} handleComponent={handleComponents} item={item}></InputBlock> : 
            item.title === "heading" ? <HeadingBlock handleComponent={handleComponents} item={item} active={active === item.id ? true: false}></HeadingBlock> :
            item.title === "para" ? <ParaBlock handleComponent={handleComponents} item={item} active={active === item.id ? true: false}></ParaBlock>: 
            item.title === "textarea" ? <TextAreaBlock active={active === item.id ? true: false} handleComponent={handleComponents} item={item}></TextAreaBlock> : ""
            }
        </div>
    )
}