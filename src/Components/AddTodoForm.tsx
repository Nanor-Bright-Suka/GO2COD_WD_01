import React, { FormEvent, useContext } from "react";
import InputField from "./InputField";
import { Form } from "react-router-dom";
import Button_WP from "./Button_WP";
import { UIContext } from "../Context/AppContext";
import { CreateUserProfile } from "../Utilities.tsx/Helpers";


const AddTodoForm: React.FC = () => {
    const { toggleAddingTodo, isAddingTodo, task, addTask, setTask } = useContext(UIContext)!;


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (task && task.trim()) {
            const taskDetails = CreateUserProfile({ value: task });
            if (taskDetails) {
                addTask(taskDetails)
                 setTask('')
            }
        }
    }
    
    return (
        <div className={`fixed inset-0 bg-black/80   ${isAddingTodo ? 'transform translate-y-0' : 'transform -translate-y-[10000px]'} transition-opacity duration-[800ms]`}> 
            
        <div className={`fixed top-40 h-1/2 max-sm:left-5 max-sm:w-[350px] max-md:h-[70%] bg-slate-500 transition-transform duration-[800ms] ease-in-out max-md:left-[20%] max-lg:h-[70%] lg:h-[70%] max-md:w-[60%] max-lg:w-[60%] lg:w-[60%] max-lg:left-[20%] lg:left-[20%] my-2 ${isAddingTodo ? 'transform translate-y-0' : 'transform -translate-y-[10000px]'}`}>
            <Form onSubmit={handleSubmit} className="flex flex-col gap-10 max-md:gap-16 max-lg:gap-16 lg:gap-16">
                <div className="flex flex-col items-center"> 
                    <label className="text-center text-2xl m-3 max-md:text-3xl max-lg:text-3xl lg:text-3xl">Task</label>  
                    
                        <InputField placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} className="max-md:w-[90%] max-md:h-[50px] max-md:text-2xl max-md:mt-5
                        max-lg:text-3xl max-lg:mt-5 max-lg:h-[50px] lg:mt-5 lg:h-[50px] lg:w-[60%]"/> 
                </div>
                <Button_WP label="Add Item" className="text-3xl  max-md:w-[60%] mx-auto max-lg:w-[60%] lg:w-[40%]" />
                <p onClick={toggleAddingTodo} className="text-center text-2xl hover:underline max-md:text-3xl cursor-pointer">Close</p>
        </Form>
         </div> 
        </div>
    )
}

export default  AddTodoForm;