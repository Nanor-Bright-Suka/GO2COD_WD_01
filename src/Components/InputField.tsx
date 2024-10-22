import React, { useContext } from "react"
import { InputProps } from "../Types"
import { CreateUserProfile } from "../Utilities.tsx/Helpers"
import { UIContext } from "../Context/AppContext";



const InputField: React.FC<InputProps> = ({ placeholder, className, required, setUserProfileResults, onChange, value, setFilteredTasks }) => {
   
    const { tasks } = useContext(UIContext)!;
    
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
      
        const filtered = tasks.filter(task =>
            task.name.toLowerCase().includes(value.toLowerCase())
        );
        
        if (setFilteredTasks) {
            setFilteredTasks(filtered)
        } 
        const results = CreateUserProfile({ value })
        setUserProfileResults?.(results)
        if (onChange) {
            onChange(e)
        }
        
    }
         
       

    // Check if setFilteredTasks is defined before invoking it
    return (
        <>
            <input type="text" className={`max-sm:w-[90%] max-sm:h-[65px] max-sm:text-[18px] rounded-md placeholder:text-center ${className}`} placeholder={placeholder} required={required} onChange={handleOnChange} value={value} />
        </>
    )
}

export default InputField