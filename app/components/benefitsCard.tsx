import React from "react";
import CustomBtn from "./customBtn";
import { Iprops } from "./customBtn";

interface IBenefitsCardProps {
  preHeader: string;
  header: string;
  span: string;
  spanColor: string;
  text: string;
  bgColor: string;
  btnProps: Iprops;
}

function BenefitsCard(props: IBenefitsCardProps) {
  return (
    <div
      className={`via-44% from-[#091046] ${props.bgColor} space-between flex flex-col`}
    >
      <p className="color-[#BABABA] mt-[72px] text-base font-medium">
        {props.preHeader}
      </p>
      <h3 className="text-4xl font-bold">
        <span className={`${props.spanColor}`}>{props.span} </span>
        {props.header}
      </h3>
      <p className="text-base font-medium">{props.text}</p>
      <CustomBtn
        customBtnText={props.btnProps.customBtnText}
        customBtnColorHex={props.btnProps.customBtnColorHex}
      />
    </div>
  );
}

export default BenefitsCard;
