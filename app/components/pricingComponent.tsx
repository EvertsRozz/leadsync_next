import React from "react";
import PricingComponentBenefits from "./pricingComponentBenefits";
import { I_pricingComponentBenefits } from "./pricingComponentBenefits";
import PricingComponentPlan from "./pricingComponentPlan";

function PricingComponent() {
  return (
    <div className="mx-24 mt-24 flex flex-row">
      <div className="flex w-1/2 flex-col justify-center">
        <PricingComponentBenefits
          span="Efficient"
          spanColor="83FF48"
          header="Email Delivery"
          text="Our AI ensures that your emails are delivered to the right people at the right time."
          textOrient="left"
        />
        <PricingComponentBenefits
          span="Data-driven"
          spanColor="F2E355"
          header="Insights"
          text="Our AI analyses data to provide valuable insights for optimizing your email campaigns."
          textOrient="left"
        />
        <PricingComponentBenefits
          span="Automated"
          spanColor="E440FF"
          header="Follow-ups"
          text="Our AI automatically sends follow-up emails to increase engagement and conversions."
          textOrient="left"
        />
      </div>
      <div className="w-1/2">
        <PricingComponentPlan
          PlanHeader="Starter Plan"
          postHeader="Perfect for small businesses and startups"
          headerParagraph="Get started quickly with a simplified setup and essential tools that grow with your business."
          PlanBenefits={[
            "Email Campaign Management",
            "Data Analytics",
            "Simplified Setup",
            "Scalability",
            "Automated Follow-ups",
            "Basic setup and execution",
            "Gain essential insigths",
            "Quick and easy onboarding",
            "Designed to grow your business",
            "Keep your audience engaged effortlessly",
          ]}
        />
      </div>
    </div>
  );
}

export default PricingComponent;
