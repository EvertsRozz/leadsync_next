import react from "react";
import Image from "next/image";
import Btn from "./Btn";
import ChromeSvg from "../../public/images/Chrome.svg";

interface HowItWorksCardProps {
  title: string;
  text: string;
  btnText: string;
}

export default function HowItWorksCard(props: HowItWorksCardProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-between rounded-lg border-2 border-solid border-white border-opacity-10 bg-indigo-950 bg-opacity-80 2xl:p-5">
        <Image src={ChromeSvg} height={48} width={48} alt="" />
        <div className="2xl:my-4">
          <h3 className="text-center font-bold 2xl:text-xl">{props.title}</h3>
          <p className="tracking-wide 2xl:text-base">{props.text}</p>
        </div>
        <div className="mt-auto">
          <Btn text={props.btnText} outline={false} />
        </div>
      </div>
    </>
  );
}
