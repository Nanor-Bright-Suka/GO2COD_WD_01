import React, { useContext, useState} from "react"
import { UIContext } from "../Context/AppContext";
import TaskOption from "./TaskOption";

interface TaskItemProps {
  handleCompletedTask: (completed: number, total: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({handleCompletedTask}) => {
  const { toggleTaskOption, tasks, activeTaskIndex, updateTask } = useContext(UIContext)!;
  
  const [isEditing, setIsEditing] = useState<number | null>(null);  // State to manage editing mode
  const [editedTask, setEditedTask] = useState(""); // State for the edited task
  const [completedTasks, setCompletedTasks] = useState<boolean[]>(tasks.map(() => false)); // Track completed tasks
 
    // Handle when the user clicks the edit button in TaskOption
  const handleEditClick = (taskName: string, index: number) => {
    setIsEditing(index); // Set the task being edited
    setEditedTask(taskName); // Set the initial value of the task being edited
    toggleTaskOption(null); // Close the TaskOption menu
  };

  // Handle saving the edited task
  const handleSaveTask = (index: number) => {
    if (editedTask.trim() !== "") {
      updateTask(index, editedTask);  // Call the function to update the task
      setIsEditing(null);  // Exit editing mode
    }
  };


    // Handle toggling the checkbox (task completion)
    const handleToggleComplete = (index: number) => {
      const updatedCompletedTasks = [...completedTasks];
      updatedCompletedTasks[index] = !updatedCompletedTasks[index]; // Toggle the task's completion state
      setCompletedTasks(updatedCompletedTasks);

        
// Calculate the number of completed tasks
const completedCount = updatedCompletedTasks.filter((task) => task).length;

// Call the parent function to update the task completion status
handleCompletedTask(completedCount, tasks.length);
  };

    return (
        
        <>
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="mt-5 bg-slate-300 p-2 rounded cursor-pointer">
              <div className="flex justify-between relative">
                {isEditing === index ? (
                <input
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="border p-1 max-sm:w-[80%] border-1 border-black max-md:w-[80%] max-md:h-[60px] md:text-3xl max-lg:w-[80%] max-lg:h-[60px]"
                />
              )  : (

                  <h5 className={`mt-5 bg-slate-300 p-2 rounded md:text-3xl ${
                    completedTasks[index] ? "line-through opacity-50" : ""
                  }`} >{task.name || "Learn"}</h5>
              )
                }
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="max-sm:w-[40px] max-sm:h-[25px] max-md:w-[50px] max-md:h-[40px] max-lg:w-[50px] max-lg:h-[40px] lg:w-[50px] lg:h-[40px]"
                  onClick={() => toggleTaskOption(index)}

                >
                  <path
                    fill="currentColor"
                    d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"
                  />
                </svg>
              { activeTaskIndex  === index && <TaskOption onEdit={() => handleEditClick(task.name, index)}/> }

              </div>

              {isEditing === index && (
              <button onClick={() => handleSaveTask(index)} className="bg-blue-500 p-1 text-white max-md:text-2xl">
                Save Task
              </button>
              )}
              
              <div className="flex justify-between py-2">
                <p className={`mt-5 bg-slate-300 p-2 max-md:text-2xl rounded ${
                    completedTasks[index] ? "line-through opacity-50" : ""
                  }`}>{task.time || "12:00pm"}</p>

              
                <input type="checkbox"
                  className="max-sm:w-[40px] max-sm:h-[25px] max-md:w-[50px] max-md:h-[30px] max-lg:w-[50px] max-lg:h-[30px] lg:w-[50px] lg:h-[30px]"
                  checked={completedTasks[index]}
                  onChange={() => handleToggleComplete(index)}
                />
                
              </div>
      
            </div>
          ))
        ) : (
          <p className= "text-2xl text-center cursor-pointer">No tasks available</p>
        )}
      </>
    );
  };
  
export default  TaskItem;
