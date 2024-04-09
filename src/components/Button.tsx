import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="h-7 flex justify-center items-center font-serif text-sm text-gray-600 font-medium border border-gray-400 rounded-3xl px-2 py-1 ">
      {children}
    </button>
  );
};

export default Button;
