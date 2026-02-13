import React from "react";
import { Link } from "react-router-dom";
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
  to: string;
};

type ActionButtonProps = ButtonProps | LinkProps;

const baseClasses = `
  transition-all duration-75
  active:bg-blue-500 active:scale-90 active:shadow-inner active:rounded
  select-none touch-manipulation
  focus:outline-none
`;

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  // LINK MODE
  if ("to" in props) {
    return (
      <Link
        to={props.to}
        className={twMerge(baseClasses, props.className)}
      >
        {props.children}
      </Link>
    );
  }

  // BUTTON MODE
  const { children, onClick, disabled, className } = props;

  return (
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
  );
};

export default ActionButton;