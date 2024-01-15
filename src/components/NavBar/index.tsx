"use client";
import React from "react";

import { useParams } from "next/navigation";

const NavBar = () => {
  const params = useParams<{ tag: string }>();

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }

  return (
    <nav>
      <ul className="flex font-semibold text-base items-center gap-6">
        <li
          className={` p-2 rounded-xl cursor-pointer ${
            params.tag === undefined && "bg-[#86340A] text-[#E8D0B3]"
          }`}
        >
          Homepage
        </li>
        <li
          className={` p-2 rounded-xl cursor-pointer ${
            params.tag === "About" && "bg-[#86340A] text-[#E8D0B3]"
          }`}
        >
          About
        </li>
        <li
          className={` p-2 rounded-xl cursor-pointer ${
            params.tag === "Contact" && "bg-[#86340A] text-[#E8D0B3]"
          }`}
        >
          Contact
        </li>
        <li
          className={` p-2 rounded-xl cursor-pointer ${
            params.tag === "Blog" && "bg-[#86340A] text-[#E8D0B3]"
          }`}
        >
          Blog
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
