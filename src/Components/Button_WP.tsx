import React from "react";
import { ButtonProps } from "../Types/index";

const Button_WP: React.FC<ButtonProps> = ({label, className, onClick, disabled}) => {
    return (
<div className={`max-sm:h-[64px] bg-[#5DC5F1] text-white rounded-[10px] text-center py-2 ${className}`}> 
    <button className={`max-sm:text-[30px] text-white  ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={onClick} disabled={disabled}>{label}</button>   
</div>
)

}
export default Button_WP