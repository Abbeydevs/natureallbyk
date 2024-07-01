"use client";
import { MdOutlineMenu } from "react-icons/md";

import { useState } from "react";
import Link from "next/link";

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MdOutlineMenu
        className="cursor-pointer w-6 h-6"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1) </Link>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
