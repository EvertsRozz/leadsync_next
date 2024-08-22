import Image from "next/image";
import BasicSvg from "../../public/Basic.svg";
import StandardSvg from "../../public/Standard.svg";
import PremiumSvg from "../../public/Premium.svg";
import CustomBtn from "./customBtn";
import React from "react";
import StepCard from "./stepCard";
import Step1Svg from "../../public/images/Step1.svg";
import Step2Svg from "../../public/images/Step2.svg";
import Step3Svg from "../../public/images/Step3.svg";
import Step4Svg from "../../public/images/Step4.svg";
import MBProSvg from "../../public/images/MBPro.svg";
import BenefitsCard from "./benefitsCard";
import { Iprops } from "./customBtn";

function MainContent() {
  const stepCardsParagraph = [
    "We build and integrate a robust CRM tailored to your needs—no setup required on your part.",
    "We craft and automate targeted email campaigns that speak directly to your audience.",
    "Our AI and team continuously analyze and refine your campaigns to maximize results.",
    "Experience effortless growth with our fully managed service driving your success.",
  ];

  const btnProps: Iprops = {
    customBtnText: "Click me!",
    customBtnColorHex: "#007bff",
  };

  return (
    <main className="bg-black">
      <section className="mt-12 h-fit w-screen">
        <div className="flex flex-col items-center bg-center bg-no-repeat pt-12">
          <h1 className="mb-6 w-[50%] max-w-[809px] text-center text-6xl font-extrabold text-white">
            Achieve Seamless <span className="text-[#4FFF57]">Success</span>{" "}
            with Intelligent Automation
          </h1>
          <p className="mb-8 w-[50%] text-center text-[25px] font-medium">
            Effortlessly manage lead capture, CRM integration, and customer
            support with FutureLead’s fully managed automation.
          </p>
          <div className="mb-[72px] flex gap-9">
            <CustomBtn customBtnText="Get Started" customBtnColorHex="0F6913" />
            <CustomBtn
              customBtnText="Request a Demo"
              customBtnColorHex="A46F20"
            />
          </div>

          {/* TODO */}
          {/* Insert video ting later */}
          <Image src={MBProSvg} width={1392} height={816} alt="" />
        </div>
      </section>

      <section className="mt-36 w-screen">
        <div className="flex justify-center">
          <h2 className="text-6xl font-semibold">
            How <span className="text-[#65CCF8]">FutureLeads</span> works
          </h2>
        </div>

        <div className="mx-24 mt-24 flex h-fit flex-row gap-8">
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
        <div className="mb-20 flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold">Unlock the Power</p>
          <h2 className="my-8 text-5xl font-bold">
            Automate Your Email Outreach
          </h2>
          <p className="text-xl font-semibold text-[#797979]">
            Our AI Agency creates personalized automatic email outreach.
          </p>
        </div>

        <div className="grid grid-cols-2 place-items-end justify-items-center gap-20 px-24">
          {/* TODO */}
          {/* fix tailwind issues regarding bgColor */}
          <BenefitsCard
            preHeader={"Boost Your Sales"}
            header={"Email Marketing Solutions"}
            span={"Efficient and Effective"}
            spanColor={"text-[#83FF48]"}
            text={
              "Our AI-driven platform ensures advanced email delivery, maximizing engagement through personalized timing and content."
            }
            bgColor={"via-[#138447]"}
            btnProps={{
              customBtnText: "Get Started",
              customBtnColorHex: "0F6913",
            }}
          />
          <BenefitsCard
            preHeader={"Boost Your Productivity"}
            header={"and Increase Efficiency"}
            span={"Save Time"}
            spanColor={"text-[#FF8A00        ]"}
            text={
              "Our AI-powered platform not only saves you time but also boosts efficiency with proactive automated follow-ups, ensuring no opportunity is missed."
            }
            bgColor={"todo-fix"}
            btnProps={{
              customBtnText: "Learn More",
              customBtnColorHex: "FF8A00",
            }}
          />{" "}
          <BenefitsCard
            preHeader={"Efficiency"}
            header={"Your Communication Process"}
            span={"Streamline"}
            spanColor={"text-[#F2E355]"}
            text={
              "Our platform streamlines communication with consistent, AI-optimized outreach, ensuring timely and relevant interactions that enhance response rates."
            }
            bgColor={"todo-fix"}
            btnProps={{
              customBtnText: "Learn More",
              customBtnColorHex: "F2E255 ",
            }}
          />{" "}
          <BenefitsCard
            preHeader={"Unlock the Potential"}
            header={"for Email Automation"}
            span={"Powerful Tools"}
            spanColor={"text-[#E440FF]"}
            text={
              "Leverage AI-powered email automation tools to not just automate, but strategically optimize your campaigns for superior results."
            }
            bgColor={"todo-fix"}
            btnProps={{
              customBtnText: "Get Started",
              customBtnColorHex: "841349",
            }}
          />
        </div>
      </section>

      {/* this section seems to have changed since yesterday */}
      <section className="mt-36 w-screen">
        <div className="flex w-screen flex-col items-center bg-[url('/BackgroundWaves.svg')] bg-cover">
          <div className="flex justify-center">
            <h2 className="text-6xl font-semibold">
              Flexible Pricing to Suit Your{" "}
              <span className="text-[#FFEE58]">Needs</span>
            </h2>
          </div>

          <div className="mx-48 mt-20 flex gap-10">
            <div className="flex basis-1/3 flex-col items-center border border-solid border-white border-opacity-50 bg-black bg-opacity-40 py-12">
              <Image src={BasicSvg} width={170} height={115} alt="" />
              <h3 className="text-4xl font-medium">Basic</h3>
              <p className="text-center text-xl font-normal">
                Limited lead capture Basic CRM integration Email support.
              </p>
              <button type="button">Start Now</button>
            </div>
            <div className="flex basis-1/3 flex-col items-center border border-solid border-white border-opacity-50 bg-black bg-opacity-40 py-12">
              <Image src={StandardSvg} width={170} height={115} alt="" />
              <h3 className="text-4xl font-medium">Standard</h3>
              <p className="text-center text-xl font-normal">
                Advanced lead Capture Full CRM integration Priority support
              </p>
              <button type="button">Start Now</button>
            </div>
            <div className="flex basis-1/3 flex-col items-center border border-solid border-white border-opacity-50 bg-black bg-opacity-40 py-4">
              <Image src={PremiumSvg} width={170} height={115} alt="" />
              <h3 className="text-4xl font-medium">Premium</h3>
              <p className="text-center text-xl font-normal">
                All features Dedicated support Custom solutions
              </p>
              <button type="button">Start Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-36 flex w-screen justify-center">
        <div className="mx-24 flex flex-col items-center justify-center border border-solid border-opacity-50 bg-transparent px-32">
          <h2 className="mb-5 mt-12 text-6xl font-semibold">
            About <span className="text-[#65CCF8]">FutureLeads</span>
          </h2>
          <p className="mb-12 text-center text-2xl font-normal tracking-widest">
            At FutureLeads, we specialize in transforming the way businesses
            manage their email outreach and customer engagement. Our fully
            managed platform combines cutting-edge AI with expert human
            oversight to deliver personalized, high-performing email campaigns
            and seamless CRM integration.
          </p>
          <p className="mb-12 text-center text-2xl font-normal tracking-widest">
            We take care of everything—from building custom CRM systems tailored
            to your needs, to automating your outreach with precision and care.
            Our proactive approach ensures that your campaigns are continuously
            optimized for maximum impact, so you can focus on what you do best:
            growing your business.
          </p>
          <p className="mb-12 text-center text-2xl font-normal tracking-widest">
            With FutureLeads, you&apos;re not just getting a tool; you&apos;re
            gaining a strategic partner dedicated to driving your success
            through intelligent automation and data-driven insights. Experience
            the power of effortless email marketing and customer relationship
            management with FutureLeads.
          </p>
        </div>
      </section>

      <section className="mt-36 flex w-screen flex-col items-center justify-center"></section>
    </main>
  );
}

export default MainContent;
