import React, { useContext } from "react"
import { UIContext } from "../Context/AppContext";
import { HoverStyles } from "./HoverStyles";

const TaskOption: React.FC = () => {
    const { toggleTaskOption, isTasksOptionsVisible } = useContext(UIContext)!;
    return (
        <div className={`absolute bottom-10 right-0 max-sm:h-[200px]  max-sm:w-[200px] p-5 bg-slate-500 transition-transform duration-[1000ms] ease-in-out  flex flex-col rounded-md justify-between  ${isTasksOptionsVisible ? 'transform translate-y-0' : 'transform -translate-y-[10000px]'}`}>
            <p className={`${HoverStyles} text-xl`}>Edit Task</p>
            <p className={`${HoverStyles} text-xl`}>Delete Task</p>
            <p className="text-right hover:underline" onClick={() => toggleTaskOption(null)}>Close</p>
            
        </div>
    )
}
export default TaskOption;