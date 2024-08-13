import Image from "next/image";
import BrowserSvg from "../../public/Browser.svg";
import AutomateSvg from "../../public/Automate.svg";
import IntegrateSvg from "../../public/Integrate.svg";
import ManageSvg from "../../public/Manage.svg";
import SignUpSvg from "../../public/SignUp.svg";
import BasicSvg from "../../public/Basic.svg";
import StandardSvg from "../../public/Standard.svg";
import PremiumSvg from "../../public/Premium.svg";

export default function MainContent() {
  return (
    <main className="bg-black">
      <section className="mt-12 h-fit w-screen">
        <div className="flex flex-col items-center bg-[url('/BackgroundSymbols.svg')] bg-center bg-no-repeat pt-12">
          <h1 className="z-50 mb-6 max-w-[809px] text-center text-6xl font-extrabold text-white">
            Synchronise <span className="text-[#4FFF57]">Success</span> with
            Intelligent Automation
          </h1>
          <p className="`max-w-[531px] z-50 mb-6 text-center text-[25px] font-medium">
            Streamline lead capture, CRM integration, and customer support with
            LeadSync
          </p>
          <Image
            src={BrowserSvg}
            width={736}
            height={365}
            alt=""
            className="z-50"
          />
        </div>
      </section>

      <section className="mt-36 w-screen">
        <div className="flex justify-center">
          <h2 className="text-6xl font-semibold">
            How <span className="text-[#65CCF8]">LeadSync</span> works
          </h2>
        </div>

        <div className="mx-20 mt-24 flex h-fit min-h-[500px] flex-row">
          <div className="flex basis-1/4 flex-col items-center border-r border-solid px-8 pt-8 text-center">
            <Image src={SignUpSvg} width={145} height={145} alt="" />
            <h3 className="mt-4 text-4xl font-semibold text-[#61FF5E]">
              Sign Up
            </h3>
            <p className="mt-10 text-2xl font-semibold">
              Create your account and choose your plan
            </p>
          </div>
          <div className="flex basis-1/4 flex-col items-center border-r border-solid px-8 pt-8 text-center">
            <Image src={IntegrateSvg} width={145} height={145} alt="" />
            <h3 className="mt-4 text-4xl font-semibold text-[#FFD748]">
              Integrate
            </h3>
            <p className="mt-10 text-2xl font-semibold">
              Connect LeadSync with your CRM and other tools
            </p>
          </div>
          <div className="flex basis-1/4 flex-col items-center border-r border-solid px-8 pt-8 text-center">
            <Image src={AutomateSvg} width={145} height={145} alt="" />
            <h3 className="mt-4 text-4xl font-semibold text-[#65CCF8]">
              Automate
            </h3>
            <p className="mt-10 text-2xl font-semibold">
              Set up your chatbot and start capturing leads
            </p>
          </div>
          <div className="flex basis-1/4 flex-col items-center px-8 pt-8 text-center">
            <Image src={ManageSvg} width={145} height={145} alt="" />
            <h3 className="mt-4 text-4xl font-semibold text-[#2DFF81]">
              Manage
            </h3>
            <p className="mt-10 text-2xl font-semibold">
              Track leads, manage support tickets, and schedule appointments
              from one place
            </p>
          </div>
        </div>
      </section>

      {/* TODO  */}
      {/* Color gradient ir kkads pisax kas negrib darboties ka figmas dizaina :/ */}
      <section className="mt-36 flex w-screen items-center justify-center">
        <div className="grid grid-cols-2 place-items-end justify-items-center gap-20 px-24">
          <div className="mx-10 flex flex-col items-center bg-gradient-to-b from-transparent to-[#138447] py-10">
            <h3 className="mt-10 text-4xl font-bold">Robust Customer</h3>
            <span className="mt-4 text-5xl font-bold text-[#83FF48]">
              Support
            </span>
            <p className="mb-10 mt-6 px-12 text-center text-2xl font-medium">
              Manage support tickets and schedule appointments with ease,
              enhancing your customer service
            </p>
          </div>
          <div className="mx-10 flex flex-col items-center bg-gradient-to-b from-transparent to-[#F2E255] py-10">
            <h3 className="mt-10 text-4xl font-bold">Advanced Lead</h3>
            <span className="mt-4 text-5xl font-bold text-[#F2E355]">
              Capture
            </span>
            <p className="mb-10 mt-6 px-12 text-center text-2xl font-medium">
              Capture and manage leads effortlessly with our state-of-the-art
              chatbot technology
            </p>
          </div>
          <div className="mx-10 flex flex-col items-center bg-gradient-to-b from-transparent to-[#FF8A00] py-10">
            <h3 className="mt-10 text-4xl font-bold">Seamless CRM</h3>
            <span className="mt-4 text-5xl font-bold text-[#FF8A00]">
              Integration
            </span>
            <p className="mb-10 mt-6 px-12 text-center text-2xl font-medium">
              Integrate seamlessly with your existing CRM systems for a unified
              customer management experience
            </p>
          </div>
          <div className="mx-10 flex flex-col items-center bg-gradient-to-b from-transparent to-[#DD35F9] py-10">
            <h3 className="mt-10 text-4xl font-bold">Intuitive User</h3>
            <span className="mt-4 text-5xl font-bold text-[#E440FF]">
              Interface
            </span>
            <p className="mb-10 mt-6 px-12 text-center text-2xl font-medium">
              Integrate seamlessly with your existing CRM systems for a unified
              customer management experience
            </p>
          </div>
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
        <div className="flex w-3/5 flex-col items-center justify-center border border-solid border-opacity-50 bg-[#293049] bg-opacity-45 px-32">
          <h2 className="mt-12 text-6xl font-semibold">
            About <span className="text-[#65CCF8]">LeadSync</span>
          </h2>
          <p className="mb-12 mt-6 text-center text-2xl font-light">
            LeadSync is dedicated to synchronizing business success through
            intelligent automation. Our mission is to enhance productivity and
            customer satisfaction by providing a streamlined approach to lead
            capture, CRM integration, and support management
          </p>
        </div>
      </section>

      <section className="mt-36 flex w-screen flex-col items-center justify-center">
        <h2 className="mb-12 text-6xl font-semibold">Get in Touch</h2>
        <form action="">
          <div className="">
            <input type="text" placeholder="`Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="flex">
            <input type="text" placeholder="Message" className="flex-grow" />
          </div>
        </form>
      </section>
    </main>
  );
}
