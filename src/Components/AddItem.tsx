import React, { useContext, useRef } from "react"
import { UIContext } from "../Context/AppContext";
import AddTodoForm from "./AddTodoForm";
import Draggable from "react-draggable";

const AddItem: React.FC = () => {
    const { toggleAddingTodo } = useContext(UIContext)!;
    const svgRef = useRef<SVGSVGElement>(null);

    return (
       
        <div>
            {<AddTodoForm />}
            <Draggable nodeRef={svgRef as unknown as React.RefObject<HTMLElement>}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="bg-[#5DC5F1] max-sm:w-[65px] max-sm:h-[65px] text-white rounded-full absolute max-sm:right-5 max-sm:bottom-2 max-md:w-[13%] max-md:h-[100px] max-lg:w-[13%] max-lg:h-[100px] lg:w-[10%] lg:h-[120px] cursor-pointer" onClick={toggleAddingTodo} ref={svgRef}>
                    <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                </svg>
                </Draggable>
            </div>
    
    )
}
export default AddItem