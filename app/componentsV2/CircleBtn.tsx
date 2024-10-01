"use client";

import Image from "next/image";
import arrowSvg from "../../public/images/Arrow.svg";

interface CircleBtnProps {
  purple: boolean;
}

export default function CircleBtn(props: CircleBtnProps) {
  return (
    <>
      {props.purple === true ? (
        <button className="flex items-center justify-center rounded-full bg-fuchsia-900 hover:bg-fuchsia-950 2xl:h-14 2xl:w-14 2xl:p-0">
          <Image src={arrowSvg} width={20} height={20} alt="" />
        </button>
      ) : (
        <button className="flex items-center justify-center rounded-full bg-zinc-500 hover:bg-zinc-600 2xl:h-14 2xl:w-14">
          <Image src={arrowSvg} width={20} height={20} alt="" />
        </button>
      )}
    </>
  );
}
