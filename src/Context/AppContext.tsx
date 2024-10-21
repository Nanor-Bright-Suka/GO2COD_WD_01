
import React, { createContext, useState } from "react"
import { UIProviderProps, UIContextType, UserProps } from "../Types"

export const UIContext = createContext<UIContextType | undefined>(undefined)

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {

    const [isSidebarVisible, setIsSidebarVisible] = React.useState(false)
    const toggleSidebar = () => {
        setIsSidebarVisible((prev) => !prev);
    };

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

    return (
        <UIContext.Provider value={{ isSidebarVisible, toggleSidebar, toggleAddingTodo, isAddingTodo, toggleTaskOption, isTasksOptionsVisible, tasks, task, addTask, setTask, activeTaskIndex }}>
            {children}
        </UIContext.Provider>
    )

}



