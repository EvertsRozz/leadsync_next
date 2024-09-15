"use client";

import React from "react";

export default function NavbarBtn() {
  function GetStartedBtn() {
    return console.log("button pressed!");
  }
  return (
    <button
      type="button"
      className={`hidden max-h-[44px] rounded-lg bg-white p-2 text-lg font-medium text-black sm:block`}
      onMouseDown={GetStartedBtn}
    >
      Get Started
    </button>
  );
}
