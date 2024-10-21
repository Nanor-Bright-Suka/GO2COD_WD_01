import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const TaskStatus: React.FC = () => {
      return (
        <CircularProgressbar value={75} text={`${75}%`} styles={{
          path: { stroke: `#4caf50` },
              text: { fill: '#4caf50',fontSize: "30px" },
         
        }}  className="max-sm:w-[50px]"/>
      );
}
export  default TaskStatus;