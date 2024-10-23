
import React, { createContext, useState } from "react"
import { UIProviderProps, UIContextType, UserProps } from "../Types"


export const UIContext = createContext<UIContextType | undefined>(undefined)

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {

  

    //Toggle Adding Todo's functionality
    const [isAddingTodo, setIsAddingTodo] = React.useState(false)
    const toggleAddingTodo = () => {
        setIsAddingTodo(!isAddingTodo);
    }

    //Toggle Tasks Options  functionality
    const [isTasksOptionsVisible, setIsTasksOptionsVisible] = React.useState(false)
    const [activeTaskIndex, setActiveTaskIndex] = useState<number | null>(null);
    
    const toggleTaskOption = (index: number | null = null) => {
        setIsTasksOptionsVisible(!isTasksOptionsVisible);
        setActiveTaskIndex(activeTaskIndex === index ? null : index);
    }

    // Adding Tasks To The Todo
    const [tasks, setTasks] = useState<UserProps[]>([]);
    const [task, setTask] = useState<string>("")
    const addTask = (taskDetails: UserProps) => {
        setTasks(prevTasks => [...prevTasks, taskDetails]);
        setTask("")// Add new task to the list
    };



    // Function to delete a task
    const deleteTask = (index: number) => {
        if (index !== null) {
            setTasks((prevTasks) => {
                return prevTasks.filter((_, i) => i !== index);
            });
        }
    };

//Updating Task
const updateTask = (index: number, newName: string) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
  };
  

    return (
        <UIContext.Provider value={{deleteTask, toggleAddingTodo, isAddingTodo, toggleTaskOption, isTasksOptionsVisible, tasks, task, addTask, setTask,activeTaskIndex,updateTask }}>
            {children}
        </UIContext.Provider>
    )

}



