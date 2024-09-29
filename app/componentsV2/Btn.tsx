"use client";
interface BtnProps {
  text: string;
  outline: boolean;
}

export default function Btn(props: BtnProps) {
  return (
    <>
      {props.outline === false ? (
        <button className="rounded-full bg-fuchsia-900 text-center hover:bg-fuchsia-950 2xl:w-36 2xl:py-2 2xl:text-xs">
          {props.text}
        </button>
      ) : (
        <button className="rounded-full border border-solid border-white text-center 2xl:w-36 2xl:py-2 2xl:text-xs">
          {props.text}
        </button>
      )}
    </>
  );
}
