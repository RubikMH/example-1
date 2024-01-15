import React from "react";
import { FiActivity } from "react-icons/fi";

const Logo = () => {
  return (
    <div className="flex font-bold text-2xl items-center">
      RUBIK
      <span>
        <FiActivity color="#C36839" size={50} />
      </span>
      MH
    </div>
  );
};

export default Logo;
