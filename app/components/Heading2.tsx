import React from "react";
import { twMerge } from "tailwind-merge";


interface Heading2Props {
  children: React.ReactNode;
  className?: string;
}

const Heading2: React.FC<Heading2Props> = ({
  children,
  className
}) => {


  return (

    <h2 className={twMerge("text-2xl font-bold mb-4", className)}>
      {children}
    </h2>
  );
};

export default Heading2;