 import React, { useContext, useState } from "react"  
import InputField from "../Components/InputField"
import TaskStatus from "../Components/TaskStatus"
import TaskItem from "../Components/TaskItem"
import AddItem from "../Components/AddItem"
import { UIContext } from "../Context/AppContext"
import { Link, useLocation } from "react-router-dom"



const HomePage: React.FC = () => {
    const context = useContext(UIContext);
    const location = useLocation();


  const userProfile = location.state?.User; // Get user data passed from WelcomePage
    const { name, date, time } = userProfile || {};
    
    try {
        if (!context) {
            throw new Error('Sidebar must be used within a UIProvider');
        } 
    } catch (error) {
        console.log("Error Message Reads", error)
    }

    const { tasks} = useContext(UIContext)!
    
    // Filtering Tasks
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const deleteFilteredTask = (index: number) => {
        if (index !== null) {
            // Update the filtered tasks
            setFilteredTasks((prevFilteredTasks) => {
                return prevFilteredTasks.filter((_, i) => i !== index);
            });
        }
    };


    const [completedTasksNo, setCompletedTasksNo] = useState(0); // Track number of completed tasks
    const [totalTasksNo, setTotalTasksNo] = useState(0); // Track total tasks count
  
    // Function to update completed and total tasks from TaskItem
    const updateTaskCompletion = (completed: number, total: number) => {
      setCompletedTasksNo(completed);
      setTotalTasksNo(total);
    };

      return (
        <div className="max-lg:max-w-xl max-lg:mx-auto  lg:max-w-xl lg:mx-auto max-lg:mt-24">
            <div className="flex justify-end">
                    <> 
                   <Link to={"/"}>  
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="max-sm:w-[65px] max-sm:h-[100px] max-md:w-[50%] max-md:h-[100px]
                          max-lg:w-[50%] max-lg:h-[90px] lg:w-[50%] lg:h-[90px]" >
                              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623zM17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0" />
                          </svg>
                        </Link>
                         </>
                
            </div>

            <div className="bg-slate-300 p-5 rounded-lg mb-6">
                <h3 className="max-sm:text-4xl text-center my-5 max-md:text-5xl max-lg:text-4xl lg:text-4xl">Hello, {name}</h3>
                <p className="text-center max-sm:text-sm max-md:text-2xl max-lg:text-2xl lg:text-2xl">{date}</p>
                <p className="text-right max-sm:text-sm max-md:text-xl max-lg:text-xl lg:text-xl">{time}</p>
            </div>
           
            <div className="flex justify-center items-center border-[1px] border-neutral-300 mt-20">
                <InputField placeholder="Search Item" className="max-sm:w-[100%] max-md:w-[100%] max-md:h-[68px] max-md:text-3xl max-lg:w-[100%] max-lg:h-[68px] max-lg:text-2xl lg:w-[100%] lg:h-[68px] lg:text-2xl" setFilteredTasks={setFilteredTasks} />
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="max-sm:w-[63px] max-sm:h-[65px] bg-[#5EC9E7] max-md:w-[70px] max-md:h-[70px] max-lg:w-[70px] max-lg:h-[70px] lg:w-[70px] lg:h-[70px]">
                      <path fill="white" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
                  </svg>
            </div>
            {filteredTasks.length > 0 ? (
        filteredTasks.map((task, index) => (
          <div key={index} className="mt-5 bg-slate-300 p-2 rounded">

                <h5 className="max-md:text-3xl max-lg:text-2xl lg:text-2xl">{task.name}</h5>
                <div className="flex justify-between">  
                <p className="max-md:text-xl mt-4 max-lg:text-xl lg:text-xl">{task.time}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" className="max-sm:w-[50px] max-sm:h-[50px] max-md:w-[50px] max-md:h-[50px] max-lg:w-[50px] max-lg:h-[50px] lg:w-[50px] lg:h-[50px]" onClick={() => deleteFilteredTask(index)}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M31.945 7.624L28.84 4.5h-9.68l-3.105 3.124H8.872v4.647h30.256V7.624zm-19.9 4.647h23.95v28.124A3.106 3.106 0 0 1 32.89 43.5H15.15a3.106 3.106 0 0 1-3.105-3.105zM24 17.886v20m6-20v20m-12-20v20"></path></svg>

                    </div>
          </div>
        ))
      ) : (
        <p></p>

              )}
             
              <div className="flex justify-between items-center rounded-md max-md:mt-16 max-lg:mt-16 lg:mt-16">
            <h4 className="text-xl max-md:text-3xl max-md:pl-10 max-lg:text-3xl max-lg:pl-10 lg:text-3xl lg:pl-10">Task Completion Status:</h4>

                  <TaskStatus completedTasksNo={completedTasksNo} totalTasksNo={totalTasksNo} />  
            </div>
            <hr className="bg-slate-300 w-full border-2 m-5"/>
            <div>
                  <TaskItem handleCompletedTask={updateTaskCompletion} />
            </div>

            
            <div>
                    <AddItem /> 
            </div>

        </div>
    )
}
export default HomePage