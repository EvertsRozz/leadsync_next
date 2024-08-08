"use client";

export default function Navbar() {
  function GetStartedBtn() {
    return console.log("button pressed!");
  }
  return (
    <>
      <nav className="flex h-16 w-screen items-center justify-between bg-[#08243D] px-10">
        <h1 className="text-2xl font-bold">LEADSYNC</h1>
        <button
          onMouseDown={GetStartedBtn}
          className="rounded-[5px] border-2 border-solid border-white px-4 py-2 text-lg"
        >
          Get Started
        </button>
      </nav>
    </>
  );
}
