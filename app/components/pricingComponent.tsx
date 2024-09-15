import React from "react";
import PricingComponentBenefits from "./pricingComponentBenefits";
import PricingComponentPlan from "./pricingComponentPlan";

function PricingComponent() {
  return (
    <div className="mx-0 mt-2 grid grid-cols-1 gap-20 md:mx-24 md:mt-24 md:grid-cols-2">
      <div className="flex w-full flex-col justify-center">
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

      <PricingComponentPlan
        planBgColor="rgba(75, 103, 65, 0.3)"
        planHeader="Starter Plan"
        postHeader="Perfect for small businesses and startups"
        headerParagraph="Get started quickly with a simplified setup and essential tools that grow with your business."
        planBenefitsLeft={[
          "Email Campaign Management",
          "Data Analytics",
          "Simplified Setup",
          "Scalability",
          "Automated Follow-ups",
        ]}
        planBenefitsRight={[
          "Basic setup and execution",
          "Gain essential insigths",
          "Quick and easy onboarding",
          "Designed to grow your business",
          "Keep your audience engaged effortlessly",
        ]}
        planBenefitsTextColor="#83FF48"
        fullWidthBtnColor="rgba(75, 103, 65, 0.5)"
      />

      <PricingComponentPlan
        planBgColor="rgba(76, 80, 181, 0.3)"
        planHeader="Business Plan"
        postHeader="Tailored for growing businesses and established enterprises."
        planBenefitsLeft={[
          "Advanced Customization",
          "Enhanced Support",
          "CRM Integration",
          "Advanced Analytics",
          "A/B Testing",
        ]}
        planBenefitsRight={[
          "Tailored features for complex needs",
          "Ongoing maintenance and strategic improvements",
          "Connect seamlessly with your CRM",
          "Drive strategic decisions with in-depth data",
          "Optimize your campaigns to increase conversions",
        ]}
        planBenefitsTextColor="#E440FF"
        fullWidthBtnColor="rgba(76, 80, 181, 0.5)"
      />
      <div className="flex w-full flex-col items-end justify-center">
        <PricingComponentBenefits
          span="Efficient"
          spanColor="83FF48"
          header="Email Delivery"
          text="Our AI ensures that your emails are delivered to the right people at the right time."
          textOrient="right"
        />
        <PricingComponentBenefits
          span="Data-driven"
          spanColor="F2E355"
          header="Insights"
          text="Our AI analyses data to provide valuable insights for optimizing your email campaigns."
          textOrient="right"
        />
        <PricingComponentBenefits
          span="Automated"
          spanColor="E440FF"
          header="Follow-ups"
          text="Our AI automatically sends follow-up emails to increase engagement and conversions."
          textOrient="right"
        />
      </div>
    </div>
  );
}

export default PricingComponent;
