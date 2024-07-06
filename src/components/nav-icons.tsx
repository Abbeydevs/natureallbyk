"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  HiOutlineUserCircle,
  HiOutlineShoppingCart,
  HiOutlineBell,
} from "react-icons/hi";
import CartModal from "./cart-modal";

const NavIcons = () => {
  const [isProfileOPen, setIsProfileOpen] = useState(false);
  const [isCartOPen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  //   const handleCart = () => {
  //     if (!isLoggedIn) {
  //       router.push("/login");
  //     }
  //     setIsCartOpen((prev) => !prev);
  //   };

  return (
    <div className="flex items-center justify-between gap-4 relative">
      <HiOutlineUserCircle
        className="w-6 h-6 cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOPen && (
        <div className="absolute p-4 rounded-lg top-12 left-0 text-sm shadow-sm bg-white z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <HiOutlineBell className="w-6 h-6" />
      <div className="relative cursor-pointer">
        <HiOutlineShoppingCart
          className="w-6 h-6"
          onClick={() => setIsCartOpen((open) => !open)}
        />
        <div
          className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full 
            flex items-center justify-center text-white text-xs"
        >
          2
        </div>
      </div>
      {isCartOPen && (
        <div>
          <CartModal />
        </div>
      )}
    </div>
  );
};

export default NavIcons;
