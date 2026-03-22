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

    <h2 className={twMerge("text-xl font-semibold mt-2 mb-4 text-cyan-800 ", className)}>
      {children}
    </h2>
  );
};

export default Heading2;