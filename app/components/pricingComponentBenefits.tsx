import React from "react";
import Image from "next/image";
import TaskCheckSvg from "../../public/images/TaskCheck.svg";

export interface I_pricingComponentBenefits {
  span: string;
  header: string;
  spanColor: string;
  text: string;
  textOrient: string;
}

function PricingComponentBenefits(props: I_pricingComponentBenefits) {
  return (
    <div className="mb-10 flex">
      <Image
        src={TaskCheckSvg}
        alt=""
        height={40}
        width={38}
        className="mr-5"
      />
      <div>
        <h4 className="text-xl font-medium">
          <span style={{ color: `#${props.spanColor}` }}>{props.span} </span>
          {props.header}
        </h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default PricingComponentBenefits;
