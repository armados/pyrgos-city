import React from "react";
import { twMerge } from "tailwind-merge";


interface SeperatorProps {
  
}

const Seperator: React.FC<SeperatorProps> = ({
}) => {


  return (

 <div className="flex items-center justify-center h-28 w-full">
      <div className="flex gap-12">
        <span className="w-3 h-3 rounded-full bg-gray-200 dark:bg-neutral-700"></span>
        <span className="w-3 h-3 rounded-full bg-gray-200 dark:bg-neutral-700"></span>
        <span className="w-3 h-3 rounded-full bg-gray-200 dark:bg-neutral-700"></span>
      </div>
    </div>
  );
};

export default Seperator;