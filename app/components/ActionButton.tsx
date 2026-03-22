import React from "react";
import { Link, type To } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = BaseProps & {
  to?: never;
  onClick?: () => void;
  disabled?: boolean;
};

type LinkProps = BaseProps & {
  to: To;
};

type ActionButtonProps = ButtonProps | LinkProps;

const baseClasses = `
  transition-all duration-75
  active:bg-yellow-500 active:scale-90 active:shadow-inner 
  select-none touch-manipulation
  focus:outline-none
`;

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  // LINK MODE
  if ("to" in props) {
    return (
      <div className="flex">
      <Link
        to={props.to  ?? '/'}
        className={twMerge(baseClasses, props.className)}
      >
        {props.children}
      </Link>
      </div>
    );
  }

  // BUTTON MODE
  const { children, onClick, disabled, className } = props;

  return (
    <div className="flex">
    <button
      type="button"
      onClick={onClick}      
      disabled={disabled}
      aria-disabled={disabled}
      className={twMerge(
        baseClasses,
        disabled &&
          "cursor-not-allowed active:scale-100 shadow-none",
        className
      )}
    >
      {children}
    </button>
    </div>
  );
};

export default ActionButton;