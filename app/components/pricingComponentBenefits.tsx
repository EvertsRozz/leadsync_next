import React from "react";
import Image from "next/image";
import TaskCheckSvg from "../../public/images/TaskCheck.svg";

type TextAlign = "left" | "right" | "center" | "justify" | "initial";

export interface I_pricingComponentBenefits {
  span: string;
  header: string;
  spanColor: string;
  text: string;
  textOrient: TextAlign;
}

function PricingComponentBenefits(props: I_pricingComponentBenefits) {
  return (
    <div className="mx-12 mb-10 flex md:mx-0">
      {props.textOrient === "left" ? (
        <Image
          src={TaskCheckSvg}
          alt=""
          height={40}
          width={38}
          className="mr-5"
        />
      ) : null}
      <div>
        <h4
          className="text-xl font-medium"
          style={{ textAlign: props.textOrient ?? "initial" }}
        >
          <span style={{ color: `#${props.spanColor}` }}>{props.span} </span>
          {props.header}
        </h4>
        <p style={{ textAlign: props.textOrient ?? "initial" }}>{props.text}</p>
      </div>
      {props.textOrient === "right" ? (
        <Image
          src={TaskCheckSvg}
          alt=""
          height={40}
          width={38}
          className="ml-5"
        />
      ) : null}
    </div>
  );
}

export default PricingComponentBenefits;
