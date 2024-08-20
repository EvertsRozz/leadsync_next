import React from "react";
import CustomBtn from "./customBtn";
import { Iprops } from "./customBtn";

function BenefitsCard(
  props: {
    preHeader: string;
    header: string;
    span: string;
    spanColor: string;
    text: string;
    bgColor: string;
  },
  btnProps: Iprops,
) {
  return (
    <div
      className={`via-44% from-[#091046] via-[#${props.bgColor}] space-between flex flex-col`}
    >
      <p className="color-[#BABABA] mt-[72px] text-base font-medium">
        {props.preHeader}
      </p>
      <h3 className="text-4xl font-bold">
        <span className={`color-[#${props.spanColor}]`}>{props.span}</span>
        {props.header}
      </h3>
      <p className="text-base font-medium">{props.text}</p>
      <CustomBtn text={btnProps.text} colorHex={btnProps.colorHex} />
    </div>
  );
}

export default BenefitsCard;
