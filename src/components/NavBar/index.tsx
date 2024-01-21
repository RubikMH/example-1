"use client";
import React from "react";

import { usePathname } from "next/navigation";

import Link from "next/link";

const NavBar = () => {
  const params = usePathname();

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }

  return (
    <nav>
      <ul className="flex font-semibold text-base items-center gap-6">
        <li
          className={` p-2 rounded-xl ${
            params === "/" && "bg-[#86340A] text-[#E8D0B3]"
          }`}
        >
          <Link className="w-full h-full" href={"/"}>
            Homepage
          </Link>
        </li>
        <li
          className={` p-2 rounded-xl ${
            params === "/About" && "bg-[#86340A] text-[#E8D0B3]"
          }`}
        >
          <Link className="w-full h-full" href={"/About"}>
            About
          </Link>
        </li>
        <li
          className={` p-2 rounded-xl ${
            params === "/Contact" && "bg-[#86340A] text-[#E8D0B3]"
          }`}
        >
          <Link className="w-full h-full" href={"/Contact"}>
            Contact
          </Link>
        </li>
        <li
          className={` p-2 rounded-xl ${
            params === "/Blog" && "bg-[#86340A] text-[#E8D0B3]"
          }`}
        >
          <Link className="w-full h-full" href={"/Blog"}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
