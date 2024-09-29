"use client";

import React from "react";

export default function HamburgerButton() {
  return (
    <div className="relative">
      {/* Checkbox (Peer element) */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      {/* Hamburger Button */}
      <label htmlFor="menu-toggle" className="group relative cursor-pointer">
        <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8">
          {/* Hamburger Icon Lines */}
          <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
            {/* Top Line: Rotate on peer-checked */}
            <div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 peer-checked:translate-y-2 peer-checked:rotate-45"></div>

            {/* Middle Line: Disappear on peer-checked */}
            <div className="h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300 peer-checked:opacity-0"></div>

            {/* Bottom Line: Rotate on peer-checked */}
            <div className="h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 peer-checked:-translate-y-2 peer-checked:-rotate-45"></div>
          </div>
        </div>
      </label>

      {/* Dropdown Menu */}
      <div className="absolute right-0 top-[120%] mt-2 h-96 w-52 translate-y-[-10px] rounded-3xl bg-white opacity-0 shadow-lg transition-all duration-300 peer-checked:translate-y-0 peer-checked:opacity-100">
        <menu className="space-y-2 p-4 text-black">
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </menu>
      </div>
    </div>
  );
}
