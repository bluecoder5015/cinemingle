import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium text-sm transition-all shadow-button";
  const primaryStyles =
    "bg-primary-purple text-white hover:bg-light-purple hover:shadow-lg";
  const secondaryStyles =
    "bg-background-light text-primary-purple hover:bg-light-purple hover:text-white";

  return (
    <button
      className={`${baseStyles} ${
        variant === "primary" ? primaryStyles : secondaryStyles
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
