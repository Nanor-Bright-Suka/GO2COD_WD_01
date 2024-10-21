import React from "react"
import { InputProps } from "../Types"
import { CreateUserProfile } from "../Utilities.tsx/Helpers"



const InputField: React.FC<InputProps> = ({ placeholder, className, required, setUserProfileResults, onChange, value }) => {
   
      const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
          const results = CreateUserProfile({ value })   
          setUserProfileResults?.(results)
          if (onChange) {
               onChange(e)
           }

    }
    
    return (
        <>
            <input type="text" className={`max-sm:w-[90%] max-sm:h-[65px] max-sm:text-[18px] rounded-md placeholder:text-center ${className}`} placeholder={placeholder} required={required} onChange={handleOnChange}  value={value}/>
        </>
    )

}
export default InputField