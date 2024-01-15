import React from "react";

interface Props {
  children: string;
  primary?: boolean;
}
const Button = ({ children, primary = false }: Props) => {
  return (
    <div className="w-full h-10">
      <button
        className={`w-full h-full rounded-md ${
          primary ? "bg-[#C36839] text-[#E8D0B3]" : "bg-[#E8D0B3]"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
