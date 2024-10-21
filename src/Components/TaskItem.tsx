import React, { useContext, useState} from "react"
import { UIContext } from "../Context/AppContext";
import TaskOption from "./TaskOption";



const TaskItem: React.FC = () => {
  const { toggleTaskOption, tasks, activeTaskIndex,updateTask } = useContext(UIContext)!;
  
  const [isEditing, setIsEditing] = useState<number | null>(null);  // State to manage editing mode
  const [editedTask, setEditedTask] = useState(""); // State for the edited task

 
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

    return (
        
        <>
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="mt-5 bg-slate-300 p-2 rounded">
              <div className="flex justify-between relative">
                {isEditing === index ? (
                <input
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="border p-1 max-sm:w-[80%] border-1 border-black"
                />
              )  : (

                  <h5>{task.name || "Learn"}</h5>
              )
                }
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="max-sm:w-[40px] max-sm:h-[25px]"
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
              <button onClick={() => handleSaveTask(index)} className="bg-blue-500 p-1 text-white">
                Save Task
              </button>
              )}
              
              <div className="flex justify-between py-2">
                <p>{task.time || "12:00pm"}</p>

                
                  {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                  className="max-sm:w-[40px] max-sm:h-[25px]"
                >
                  <path
                    fill="currentColor"
                    d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"
                  />
                </svg> */}
                <input type="checkbox"   className="max-sm:w-[40px] max-sm:h-[25px]"/>
                
              </div>
      
            </div>
          ))
        ) : (
          <p className= "text-2xl text-center">No tasks available</p>
        )}
      </>
    );
  };
  
export default  TaskItem;
