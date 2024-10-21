import React, { useContext } from "react"
import { UIContext } from "../Context/AppContext";
import { HoverStyles } from "./HoverStyles";
// import { toast } from "react-toastify";

type TaskOptionProps = {
    onEdit: () => void; // Prop to trigger the edit mode
  }
  
const TaskOption: React.FC<TaskOptionProps> = ({onEdit}) => {
    const { toggleTaskOption, isTasksOptionsVisible, deleteTask, activeTaskIndex } = useContext(UIContext)!;


    //Handling Editing Tasks
    const handleEditTask = () => {
        if (activeTaskIndex !== null) {
          onEdit();  // Trigger the edit mode in TaskItem
          toggleTaskOption(null);  // Hide the task options
        }
      };


    const handleDeletedTask = () => {
        if (activeTaskIndex !== null) {
            // const taskToDelete = tasks[activeTaskIndex].name; // Replace with the actual task name logic
            deleteTask(activeTaskIndex);
            // toast.success(`Task "${taskToDelete}" deleted successfully!`);

            // Hide TaskOption after deleting the task
            toggleTaskOption(null);
        }
    }
    return (
        <div className={`absolute bottom-10 right-0 max-sm:h-[200px]  max-sm:w-[200px] p-5 bg-slate-500 transition-transform duration-[1000ms] ease-in-out  flex flex-col rounded-md justify-between  ${isTasksOptionsVisible ? 'transform translate-y-0' : 'transform -translate-y-[10000px]'}`}>
            <p className={`${HoverStyles} text-xl`} onClick={handleEditTask}>Edit Task</p>
            <p className={`${HoverStyles} text-xl`} onClick={handleDeletedTask}>Delete Task</p>
            <p className="text-right hover:underline" onClick={() => toggleTaskOption(null)}>Close</p>
            
        </div>
    )
}
export default TaskOption;