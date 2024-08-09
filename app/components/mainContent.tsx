import Image from "next/image";
import BackgroundSymbolsSvg from "../../public/BackgroundSymbols.svg";
import BrowserSvg from "../../public/Browser.svg";
import AutomateSvg from "../../public/Automate.svg";
import IntegrateSvg from "../../public/Integrate.svg";
import ManageSvg from "../../public/Manage.svg";
import SignUpSvg from "../../public/SignUp.svg";

export default function MainContent() {
  return (
    <main className="bg-black">
      <section className="mt-12 h-fit w-screen">
        <div className="absolute w-screen">
          <Image
            src={BackgroundSymbolsSvg}
            width={1251}
            height={616}
            alt=""
            className="mx-auto min-h-[616px] min-w-[1251px]"
          />
        </div>

        <div className="flex flex-col items-center pt-12">
          <h1 className="z-50 mb-6 max-w-[809px] text-center text-6xl font-extrabold text-white">
            Synchronise <span className="text-[#4FFF57]">Success</span> with
            Intelligent Automation
          </h1>
          <p className="z-50 mb-6 max-w-[531px] text-center text-[25px] font-medium">
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

      <section className="mt-24 w-screen">
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

      <section className="mt-36 flex w-screen items-center justify-center bg-yellow-300">
        <div className="grid grid-cols-2 justify-items-center gap-10 bg-purple-300 px-24">
          <div className="flex flex-col items-center bg-green-300">
            <h3 className="mt-10 text-4xl font-bold">Robust Customer</h3>
            <span className="mt-4 text-5xl font-bold text-[#83FF48]">
              Support
            </span>
            <p className="mb-10 mt-6 px-12 text-center text-2xl font-medium">
              Manage support tickets and schedule appointments with ease,
              enhancing your customer service
            </p>
          </div>
          <div className="flex flex-col items-center bg-green-300">
            <h3 className="mt-10 text-4xl font-bold">Advanced Lead</h3>
            <span className="mt-4 text-5xl font-bold text-[#F2E355]">
              Capture
            </span>
            <p className="mb-10 mt-6 px-12 text-center text-2xl font-medium">
              Capture and manage leads effortlessly with our state-of-the-art
              chatbot technology
            </p>
          </div>
          <div className="flex flex-col items-center bg-green-300">
            <h3 className="mt-10 text-4xl font-bold">Seamless CRM</h3>
            <span className="mt-4 text-5xl font-bold text-[#FF8A00]">
              Integration
            </span>
            <p className="mb-10 mt-6 px-12 text-center text-2xl font-medium">
              Integrate seamlessly with your existing CRM systems for a unified
              customer management experience
            </p>
          </div>
          <div className="flex flex-col items-center bg-green-300">
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
    </main>
  );
}
