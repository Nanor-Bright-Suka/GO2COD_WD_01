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
            
        <div className={`fixed top-40 h-1/2 max-sm:left-5 max-sm:w-[350px] bg-slate-500 transition-transform duration-[800ms] ease-in-out ${isAddingTodo ? 'transform translate-y-0' : 'transform -translate-y-[10000px]'}`}>
            <Form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="flex flex-col items-center"> 
                    <label className="text-center text-2xl m-3">Task</label>  
                    
                        <InputField placeholder="Enter Task" value ={task} onChange={(e) => setTask(e.target.value)} /> 
                </div>
                <Button_WP label="Add Item" className="text-3xl" />
                <p onClick={toggleAddingTodo} className="text-center text-2xl hover:underline">Close</p>
        </Form>
         </div> 
        </div>
    )
}

export default  AddTodoForm;