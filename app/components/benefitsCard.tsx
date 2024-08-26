import React from "react";
import CustomBtn from "./customBtn";
import { I_customBtn } from "./customBtn";

interface IBenefitsCardProps {
  preHeader: string;
  header: string;
  span: string;
  spanColor: string;
  text: string;
  bgColor: string;
  btnProps: I_customBtn;
}

function BenefitsCard(props: IBenefitsCardProps) {
  return (
    <div
      className={`from-transparent px-12 pb-8 ${props.bgColor} space-between flex h-full w-full flex-col bg-gradient-to-b`}
    >
      <p className="color-[#BABABA] mb-4 mt-[72px] text-base font-medium">
        {props.preHeader}
      </p>
      <h3 className="mb-4 min-w-fit text-4xl font-bold">
        <span className={`${props.spanColor}`}>{props.span} </span>
        {props.header}
      </h3>
      <p className="mb-4 text-base font-medium">{props.text}</p>
      <div className="flex w-fit">
        <CustomBtn
          customBtnText={props.btnProps.customBtnText}
          customBtnColorHex={props.btnProps.customBtnColorHex}
        />
      </div>
    </div>
  );
}

export default BenefitsCard;
