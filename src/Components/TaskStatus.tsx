import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface TaskStatusProps {
  completedTasksNo: number;
  totalTasksNo: number;
}

const TaskStatus: React.FC<TaskStatusProps> = ({ completedTasksNo, totalTasksNo }) => {
   // Calculate the percentage of completed tasks
   const percentage = totalTasksNo === 0 ? 0 : Math.round((completedTasksNo / totalTasksNo) * 100);

      return (
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={{
          path: { stroke: `#4caf50` },
              text: { fill: '#4caf50',fontSize: "30px" },
         
        }}  className="max-sm:w-[50px]"/>
      );
}
export  default TaskStatus;