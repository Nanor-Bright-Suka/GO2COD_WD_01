 import React, { useContext } from "react"  
import InputField from "../Components/InputField"
import TaskStatus from "../Components/TaskStatus"
import TaskItem from "../Components/TaskItem"
import AddItem from "../Components/AddItem"
import Sidebar from "../Components/Sidebar"
import { UIContext } from "../Context/AppContext"
import { useLocation } from "react-router-dom"


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

    const { toggleSidebar} = useContext(UIContext)!
    
  
    return (
        <div >
            <div className="flex justify-between">
                    <> 
                    <Sidebar />
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="max-sm:w-[65px] max-sm:h-[100px]"   onClick={toggleSidebar}><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/>
                    </svg> 
                       
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"  className="max-sm:w-[65px] max-sm:h-[100px]"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623zM17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0"/></svg>
                         </>
                
            </div>

            <div className="bg-slate-300 p-5 rounded-lg mb-6">
                <h3 className="max-sm:text-4xl text-center my-5">Hello, {name}</h3>
                <p className="text-center max-sm:text-sm">{date}</p>
                <p className="text-right max-sm:text-sm">{time}</p>
            </div>
            
            <div className="flex justify-center items-center border-[1px] border-neutral-300 mb-7">
                <InputField placeholder="Search Item" className="max-sm:w-[100%]" />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="max-sm:w-[60px] max-sm:h-[65px] bg-[#5EC9E7]"><path fill="white" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
            </div>

            <div className="flex justify-between items-center rounded-md">
            <h4 className="text-xl">Task Completion Status:</h4>
            <TaskStatus />  
            </div>

            <div>
                <TaskItem  />
            </div>

            <div>
                <AddItem /> 
            </div>

        </div>
    )
}
export default HomePage