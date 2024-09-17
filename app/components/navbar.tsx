"use client";

import HamburgerButton from "./hamburgerButton";
import NavbarBtn from "./navbarBtn";

export default function Navbar() {
  return (
    <>
      <nav className="flex h-16 w-screen items-center justify-between border-b border-solid bg-black px-10">
        <p className="text-base font-bold sm:text-2xl">FUTURELEADS</p>
        <div className="flex items-center gap-5">
          <NavbarBtn />
          <HamburgerButton />
        </div>
      </nav>
    </>
  );
}
