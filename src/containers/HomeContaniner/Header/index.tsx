import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import React from "react";

const Header = () => {
  return (
    <header className="flex h-[10%]   justify-between items-center  max-w-6xl w-full mx-auto">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
