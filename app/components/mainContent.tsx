import Image from "next/image";
import BackgroundSymbolsSvg from "../../public/BackgroundSymbols.svg";
import BrowserSvg from "../../public/Browser.svg";
import { posix } from "path";

export default function MainContent() {
  return (
    <main className="bg-black">
      <section className="mt-12 h-screen w-screen">
        <div className="absolute w-screen">
          <Image
            src={BackgroundSymbolsSvg}
            width={1251}
            height={616}
            alt=""
            className="mx-auto"
          />
        </div>

        <div className="flex flex-col items-center pt-12">
          <h1 className="z-50 mb-6 max-w-[809px] text-center text-6xl font-extrabold text-white">
            Synchronise <span className="text-[#4FFF57]">Success</span> with
            Intelligent Automation
          </h1>
          <p className="z-50 max-w-[531px] text-center text-[25px] font-medium">
            Streamline lead capture, CRM integration, and customer support with
            LeadSync
          </p>
          <Image src={BrowserSvg} width={736} height={365} alt="" />
        </div>
      </section>
    </main>
  );
}
