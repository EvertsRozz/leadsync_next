import React from "react";
import Image from "next/image";
import CheckMarkSvg from "../../public/images/CheckMark.svg";
import CustomBtn from "./customBtn";

interface I_pricingComponentPlan {
  PlanHeader: string;
  postHeader: string;
  headerParagraph: string;
  PlanBenefits: string[];
}

function PricingComponentPlan(props: I_pricingComponentPlan) {
  return (
    <div className="bg-green-400">
      <div>
        <h4>{props.PlanHeader}</h4>
        <p>{props.postHeader}</p>
        <p>{props.headerParagraph}</p>
      </div>
      <div>
        <p>Includes</p>
        <div className="flex flex-row">
          <div>
            <div className="flex flex-row">
              <Image
                width={16}
                height={20}
                alt="Check-mark"
                src={CheckMarkSvg}
              />
              <p>{props.PlanBenefits[0]}</p>
            </div>
            <div className="flex flex-row">
              <Image
                width={16}
                height={20}
                alt="Check-mark"
                src={CheckMarkSvg}
              />
              <p>{props.PlanBenefits[1]}</p>
            </div>
            <div className="flex flex-row">
              <Image
                width={16}
                height={20}
                alt="Check-mark"
                src={CheckMarkSvg}
              />
              <p>{props.PlanBenefits[2]}</p>
            </div>
            <div className="flex flex-row">
              <Image
                width={16}
                height={20}
                alt="Check-mark"
                src={CheckMarkSvg}
              />
              <p>{props.PlanBenefits[3]}</p>
            </div>
            <div className="flex flex-row">
              <Image
                width={16}
                height={20}
                alt="Check-mark"
                src={CheckMarkSvg}
              />
              <p>{props.PlanBenefits[4]}</p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-row">
                <Image
                  width={16}
                  height={20}
                  alt="Check-mark"
                  src={CheckMarkSvg}
                />
                <p>{props.PlanBenefits[5]}</p>
              </div>
              <div className="flex flex-row">
                <Image
                  width={16}
                  height={20}
                  alt="Check-mark"
                  src={CheckMarkSvg}
                />
                <p>{props.PlanBenefits[6]}</p>
              </div>
              <div className="flex flex-row">
                <Image
                  width={16}
                  height={20}
                  alt="Check-mark"
                  src={CheckMarkSvg}
                />
                <p>{props.PlanBenefits[7]}</p>
              </div>
              <div className="flex flex-row">
                <Image
                  width={16}
                  height={20}
                  alt="Check-mark"
                  src={CheckMarkSvg}
                />
                <p>{props.PlanBenefits[8]}</p>
              </div>
              <div className="flex flex-row">
                <Image
                  width={16}
                  height={20}
                  alt="Check-mark"
                  src={CheckMarkSvg}
                />
                <p>{props.PlanBenefits[9]}</p>
              </div>
            </div>
          </div>
        </div>
        <CustomBtn customBtnText="Request Pricing" customBtnColorHex="" />
      </div>
    </div>
  );
}

export default PricingComponentPlan;
