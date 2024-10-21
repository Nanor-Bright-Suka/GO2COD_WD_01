import { ReactNode } from "react"


export type ButtonProps = {
    label: string
    className: string
    onClick?: () => void;
    disabled?: boolean
}

export type InputProps = {
    placeholder?: string
    className?: string
    required?: boolean
    setUserProfileResults?: React.Dispatch<React.SetStateAction<UserProps | null>>
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
  // setUserProfileResults: (user: UserProps | null) => void;
}
    

export type UIProviderProps = {
    children: ReactNode
}
  
export type UIContextType = {
    isSidebarVisible: boolean
    toggleSidebar: () => void
    toggleAddingTodo: () => void
    isAddingTodo: boolean
    isTasksOptionsVisible: boolean
    addTask: (taskDetails: UserProps) => void
    task:string
    tasks: UserProps[]
    setTask: (value: string) => void
    activeTaskIndex: number | null
    toggleTaskOption: (index: number | null) => void
    deleteTask: (index: number) => void
    updateTask: (index: number,newName: string ) => void

}
  
//Creating Profile
export type CreateUserProfileProp = {
     value: string
 }

export type UserProps = {
    name: string
    date: number | string
    time: number | string
}