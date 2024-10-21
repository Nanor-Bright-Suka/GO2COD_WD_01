import React, { useContext} from "react"
import { UIContext } from "../Context/AppContext";
import TaskOption from "./TaskOption";

const TaskItem: React.FC = () => {
    const { toggleTaskOption, tasks, activeTaskIndex } = useContext(UIContext)!;

   
    return (
        
        <>
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="mt-5 bg-slate-300 p-2 rounded">
              <div className="flex justify-between relative">
                <h5>{task.name || "Learn"}</h5>
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
              { activeTaskIndex  === index && <TaskOption /> }

              </div>
              <div className="flex justify-between py-2">
                <p>{task.time || "12:00pm"}</p>
                <svg
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
                </svg>
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
