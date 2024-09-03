"use client";

import NavbarBtn from "./navbarBtn";

export default function Navbar() {
  return (
    <>
      <nav className="flex h-16 w-screen items-center justify-between border-b border-solid bg-black px-10">
        <p className="text-2xl font-bold">FUTURELEADS</p>
        <NavbarBtn />
      </nav>
    </>
  );
}
