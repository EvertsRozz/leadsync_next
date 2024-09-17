import Image from "next/image";
import CustomBtn from "./customBtn";
import React from "react";
import StepCard from "./stepCard";
import Step1Svg from "../../public/images/Step1.svg";
import Step2Svg from "../../public/images/Step2.svg";
import Step3Svg from "../../public/images/Step3.svg";
import Step4Svg from "../../public/images/Step4.svg";
import MBProSvg from "../../public/images/MBPro.svg";
import BenefitsCard from "./benefitsCard";
import PricingComponent from "./pricingComponent";
import FormComponent from "./formComponent";
import FooterComponent from "./footerComponent";

function MainContent() {
  const stepCardsParagraph = [
    "We build and integrate a robust CRM tailored to your needs — no setup required on your part.",
    "We craft and automate targeted email campaigns that speak directly to your audience.",
    "Our AI and team continuously analyze and refine your campaigns to maximize results.",
    "Experience effortless growth with our fully managed service driving your success.",
  ];

  const benefitsData = [
    {
      preHeader: "Boost Your Sales",
      header: "Email Marketing Solutions",
      span: "Efficient and Effective",
      spanColor: "text-[#83FF48]",
      text: "Our AI-driven platform ensures advanced email delivery, maximizing engagement through personalized timing and content.",
      bgColor: "to-[#138447]",
      btnProps: {
        customBtnText: "Get Started",
        customBtnColorHex: "0F6913",
      },
    },
    {
      preHeader: "Boost Your Productivity",
      header: "and Increase Efficiency",
      span: "Save Time",
      spanColor: "text-[#FF8A00]",
      text: "Our AI-powered platform not only saves you time but also boosts efficiency with proactive automated follow-ups, ensuring no opportunity is missed.",
      bgColor: "to-[#FF8A00]",
      btnProps: {
        customBtnText: "Learn More",
        customBtnColorHex: "FF8A00",
      },
    },
    {
      preHeader: "Efficiency",
      header: "Your Communication Process",
      span: "Streamline",
      spanColor: "text-[#F2E355]",
      text: "Our platform streamlines communication with consistent, AI-optimized outreach, ensuring timely and relevant interactions that enhance response rates.",
      bgColor: "to-[#F2E255]",
      btnProps: {
        customBtnText: "Learn More",
        customBtnColorHex: "F2E255",
      },
    },
    {
      preHeader: "Unlock the Potential",
      header: "for Email Automation",
      span: "Powerful Tools",
      spanColor: "text-[#E440FF]",
      text: "Leverage AI-powered email automation tools to not just automate, but strategically optimize your campaigns for superior results.",
      bgColor: "to-[#DD35F9]",
      btnProps: {
        customBtnText: "Get Started",
        customBtnColorHex: "841349",
      },
    },
  ];

  const BenefitsSection = () => {
    return (
      <>
        {benefitsData.map((benefit, index) => (
          <BenefitsCard
            key={index}
            preHeader={benefit.preHeader}
            header={benefit.header}
            span={benefit.span}
            spanColor={benefit.spanColor}
            text={benefit.text}
            bgColor={benefit.bgColor}
            btnProps={benefit.btnProps}
          />
        ))}
      </>
    );
  };

  // noinspection TypeScriptValidateTypes
  return (
    <main className="flex w-screen flex-col items-center justify-center bg-black">
      <section className="mt-12 h-fit w-screen">
        <div className="flex flex-col items-center bg-center bg-no-repeat pt-12">
          <h1 className="mx-12 mb-6 text-center text-3xl font-extrabold tracking-wide text-white sm:mx-24 sm:text-4xl md:mx-48 md:text-5xl lg:mx-72 lg:text-6xl">
            Achieve Seamless <span className="text-[#4FFF57]">Success</span>{" "}
            with Intelligent Automation
          </h1>
          <p className="mx-12 mb-8 text-center text-base font-medium sm:mx-24 sm:text-lg md:mx-48 md:text-xl lg:mx-72 lg:text-2xl">
            Effortlessly manage lead capture, CRM integration, and customer
            support with FutureLead’s fully managed automation.
          </p>
          <div className="mb-[72px] flex flex-grow gap-5 md:gap-8">
            <CustomBtn customBtnText="Get Started" customBtnColorHex="0F6913" />
            <CustomBtn
              customBtnText="Request a Demo"
              customBtnColorHex="A46F20"
            />
          </div>

          {/* TODO */}
          {/* Insert video ting later */}
          <div className="mx-12">
            <Image src={MBProSvg} width={1392} height={816} alt="" />
          </div>
        </div>
      </section>

      <section className="mt-36 w-screen">
        <div className="flex justify-center">
          <h2 className="text-3xl font-semibold sm:text-6xl">
            How <span className="text-[#65CCF8]">FutureLeads</span> works
          </h2>
        </div>

        <div className="mx-12 mt-10 grid h-fit grid-cols-2 gap-8 md:mx-12 md:mt-24 md:flex">
          <StepCard
            ImageSrc={Step1Svg}
            header="Step 1"
            headerColor="FFD748"
            text={stepCardsParagraph[0]}
          />
          <StepCard
            ImageSrc={Step2Svg}
            header="Step 2"
            headerColor="61FF5E"
            text={stepCardsParagraph[1]}
          />
          <StepCard
            ImageSrc={Step3Svg}
            header="Step 3"
            headerColor="65CCF8"
            text={stepCardsParagraph[2]}
          />
          <StepCard
            ImageSrc={Step4Svg}
            header="Step 4"
            headerColor="2DFF81"
            text={stepCardsParagraph[3]}
          />
        </div>
      </section>

      <section className="mt-36 flex w-screen flex-col items-center justify-center">
        <div className="mb-20 flex flex-col items-center justify-center px-12 text-center md:px-24">
          <p className="text-2xl font-semibold">Unlock the Power</p>
          <h2 className="my-5 text-5xl font-bold md:my-8">
            Automate Your Email Outreach
          </h2>
          <p className="text-xl font-semibold text-[#797979]">
            Our AI Agency creates personalized automatic email outreach.
          </p>
        </div>

        <div className="grid place-items-end justify-items-center gap-2 sm:grid-cols-1 md:grid-cols-2 md:gap-10 md:px-24">
          {BenefitsSection()}
        </div>
      </section>

      {/* this section seems to have changed since yesterday */}
      <section className="mt-16 w-screen md:mt-32">
        <div className="flex flex-col justify-center px-12 text-center md:mb-20 md:px-24">
          <p className="text-2xl font-semibold">Personalized</p>
          <h2 className="mb-5 mt-2 text-5xl font-bold md:my-8">
            Affordable Pricing
          </h2>
          <p className="text-xl font-semibold text-[#797979]">
            Our AI-driven email outreach service automates personalized email
            campaigns to boost your sales.
          </p>
        </div>
        <PricingComponent />
      </section>

      <section className="mt-36 flex w-screen justify-center">
        <div className="flex flex-col items-center justify-center border-opacity-50 bg-transparent px-5 sm:px-16 md:mx-24 md:border md:border-solid md:px-32">
          <h2 className="mb-5 mt-12 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            About <span className="text-[#65CCF8]">FutureLeads</span>
          </h2>
          <p className="mb-4 text-center text-base font-normal leading-loose tracking-widest sm:mb-6 sm:text-lg md:mb-8 md:text-xl lg:mb-12 lg:text-2xl">
            At FutureLeads, we specialize in transforming the way businesses
            manage their email outreach and customer engagement. Our fully
            managed platform combines cutting-edge AI with expert human
            oversight to deliver personalized, high-performing email campaigns
            and seamless CRM integration.
          </p>
          <p className="mb-4 text-center text-base font-normal leading-loose tracking-widest sm:mb-6 sm:text-lg md:mb-8 md:text-lg lg:mb-12 lg:text-2xl">
            We take care of everything—from building custom CRM systems tailored
            to your needs, to automating your outreach with precision and care.
            Our proactive approach ensures that your campaigns are continuously
            optimized for maximum impact, so you can focus on what you do best:
            growing your business.
          </p>
          <p className="mb-4 text-center text-base font-normal leading-loose tracking-widest sm:mb-6 sm:text-lg md:mb-8 md:text-lg lg:mb-12 lg:text-2xl">
            With FutureLeads, you&apos;re not just getting a tool; you&apos;re
            gaining a strategic partner dedicated to driving your success
            through intelligent automation and data-driven insights. Experience
            the power of effortless email marketing and customer relationship
            management with FutureLeads.
          </p>
        </div>
      </section>

      <section className="mt-36 flex w-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="stroke-[#6BD762] text-center text-3xl font-extrabold leading-relaxed sm:text-4xl md:text-5xl lg:text-6xl">
            <p className="">Automate Your Social </p>
            <p>Media Outreach</p>
          </h2>
          <div className="mt-8 rounded-md border border-solid border-[#6BD762] px-10 py-7 text-4xl font-normal text-[#6BD762]">
            COMING SOON
          </div>
        </div>
      </section>

      <section className="mt-36 flex w-screen flex-col items-center justify-center">
        <div className="mx-5 flex flex-col gap-5 border border-solid border-white px-6 pl-8 pt-10 md:flex-row md:py-12">
          <div className="basis-2/3">
            <h4 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Transforming Email Outreach with AI
            </h4>
            <p className="mt-2 text-base font-normal sm:text-lg md:text-xl lg:text-2xl">
              Experience the power of personalized email outreach
            </p>
          </div>
          <div className="mt-4 flex basis-1/3 flex-col justify-center">
            <FormComponent />
          </div>
        </div>
      </section>

      <section className="mt-36 flex w-screen flex-col items-center justify-center px-3 md:px-24">
        <FooterComponent />
      </section>
    </main>
  );
}

export default MainContent;
