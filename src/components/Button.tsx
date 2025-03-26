import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary", disabled = false }) => {
  const baseStyles = "w-full py-3 rounded-lg font-medium transition-all";
  const primaryStyles = "bg-purple-600 text-white hover:bg-purple-700";
  const secondaryStyles = "bg-purple-200 text-purple-800 hover:bg-purple-300";
  const disabledStyles = "bg-gray-400 text-gray-200 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${disabled ? disabledStyles : variant === "primary" ? primaryStyles : secondaryStyles}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
