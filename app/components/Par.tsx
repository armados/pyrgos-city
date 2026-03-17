import React from "react";
import { twMerge } from "tailwind-merge";


interface ParProps {
  children: React.ReactNode;
  className?: string;
}

const Par: React.FC<ParProps> = ({
  children,
  className
}) => {


  return (

    <p className={twMerge("mb-4", className)}>
      {children}
    </p>
  );
};

export default Par;