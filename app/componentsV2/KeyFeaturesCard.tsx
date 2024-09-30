import Image from "next/image";
import Btn from "./Btn";
import GearSvg from "../../public/images/Gear.svg";

interface KeyFeaturesCardProps {
  title: string;
  text: string;
}

export default function KeyFeaturesCard(props: KeyFeaturesCardProps) {
  return (
    <>
      <div className="relative flex h-full flex-col rounded-lg bg-indigo-950 bg-opacity-80 text-left tracking-wide 2xl:p-5">
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
    </>
  );
}
