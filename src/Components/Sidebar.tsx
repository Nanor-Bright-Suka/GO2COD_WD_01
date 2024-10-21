import React, { useContext } from "react"
import { UIContext } from "../Context/AppContext"
import { HoverStyles } from "./HoverStyles";

const Sidebar: React.FC = () => {
    const { isSidebarVisible,toggleSidebar } = useContext(UIContext)!;
    
    return (
        <div className={`fixed top-10 left-0 h-2/3 p-4 max-sm:w-[350px] bg-slate-500 transition-transform duration-[1000ms] ease-in-out ${isSidebarVisible ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="max-sm:w-[50px] max-sm:h-[50px]" onClick={toggleSidebar}><g fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M12 12H12" opacity="0" /><path d="M5 5L19 19M5 19L19 5" /></g></svg>
            
    <ul className={`transition-opacity duration-500  my-10 text-2xl ${isSidebarVisible ? 'opacity-100' : 'opacity-0'}`}>
      <li className={HoverStyles}>Completed Tasks</li>      
      <li className={`${HoverStyles} mt-10`}>Deleted Tasks</li>      
      <li className={`${HoverStyles} mt-12`}>Darkmode</li>      
    </ul>
        </div>
)
}
export default Sidebar