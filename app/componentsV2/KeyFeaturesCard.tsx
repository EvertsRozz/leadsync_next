import Image from "next/image";
import Btn from "./Btn";
import GearSvg from "../../public/images/Gear.svg";
import React, { useState, useEffect, useRef } from "react";

interface KeyFeaturesCardProps {
  title: string;
  text: string;
}

export default function KeyFeaturesCard(props: KeyFeaturesCardProps) {
  return (
    <>
      <div className="relative h-full">
        {/* main card */}
        <div className="flex h-full flex-col rounded-lg border-2 border-transparent bg-indigo-950 text-left tracking-wide transition-colors 2xl:p-5">
          <div className="flex items-center justify-center rounded-full bg-white 2xl:h-8 2xl:w-8">
            <Image src={GearSvg} width={20} height={20} alt="" />
          </div>
          <div className="2xl:my-4">
            <h3 className="font-bold 2xl:text-xl">{props.title}</h3>
            <p className="2xl:text-base">{props.text}</p>
          </div>
          <div className="mt-auto">
            <Btn text={"LEARN MORE"} outline={false} />
          </div>
        </div>

        {/* twin */}
        <div
          className="absolute inset-0 flex h-full flex-col rounded-lg border-2 border-pink-700 bg-pink-900 text-left tracking-wide 2xl:p-5"
          style={{
            opacity: "var(--opacity, 0)",
            mask: `radial-gradient(
          25rem 25rem at var(--x) var(--y),
          #000 1%,
          transparent 50%)`,
          }}
        >
          <div className="flex items-center justify-center rounded-full bg-white 2xl:h-8 2xl:w-8">
            <Image src={GearSvg} width={20} height={20} alt="" />
          </div>
          <div className="2xl:my-4">
            <h3 className="font-bold 2xl:text-xl">{props.title}</h3>
            <p className="2xl:text-base">{props.text}</p>
          </div>
          <div className="mt-auto">
            <Btn text={"LEARN MORE"} outline={false} />
          </div>
        </div>
      </div>
    </>
  );
}
