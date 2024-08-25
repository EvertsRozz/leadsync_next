import React from "react";
import Image from "next/image";
import CheckMarkSvg from "../../public/images/CheckMark.svg";
import FullWidthBtn from "./fullWidthBtn";

interface I_pricingComponentPlan {
  planBgColor: string;
  planHeader: string;
  postHeader: string;
  headerParagraph: string;
  planBenefitsLeft: string[];
  planBenefitsRight: string[];
  planBenefitsTextColor: string;
}

function PricingComponentPlan(props: I_pricingComponentPlan) {
  function PricingComponentContentLeft() {
    return props.planBenefitsLeft.map((item, index) => {
      return (
        <div className="my-5 flex flex-row" key={index}>
          <Image
            width={16}
            height={20}
            alt="Check-mark"
            src={CheckMarkSvg}
            className="mr-5"
          />
          <p
            className="text-sm font-normal"
            style={{ color: `${props.planBenefitsTextColor}` }}
          >
            {props.planBenefitsLeft[index]}
          </p>
        </div>
      );
    });
  }
  function PricingComponentContentRight() {
    return props.planBenefitsRight.map((item, index) => {
      return (
        <div className="my-5 flex flex-row" key={index}>
          <Image
            className="mr-5"
            width={16}
            height={20}
            alt="Check-mark"
            src={CheckMarkSvg}
          />
          <p className="text-sm font-normal">
            {props.planBenefitsRight[index]}
          </p>
        </div>
      );
    });
  }

  return (
    <div
      style={{ backgroundColor: props.planBgColor }}
      className="bg-opacity-50 px-8 pb-9 pt-6"
    >
      <div className="border-b pb-3">
        <h4 className="text-2xl font-medium">{props.planHeader}</h4>
        <p className="text-xs font-normal">{props.postHeader}</p>
        <p className="pt-3 text-sm font-normal">{props.headerParagraph}</p>
      </div>
      <div className="mb-9 border-b">
        <p className="mt-10">Includes</p>
        <div className="flex flex-row">
          <div className="basis-1/2">{PricingComponentContentLeft()}</div>
          <div>
            <div className="basis-1/2">{PricingComponentContentRight()}</div>
          </div>
        </div>
      </div>
      <FullWidthBtn
        customBtnText="Request Pricing"
        customBtnColorHex="4B6741"
      />
    </div>
  );
}

export default PricingComponentPlan;
