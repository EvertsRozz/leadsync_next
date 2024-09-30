import Btn from "./Btn";
import CircleBtn from "./CircleBtn";
import KeyFeaturesList from "./KeyFeaturesList";
/**
 * @description
 * Default Tailwind units for the landing page are as follows:
 *
 * Lg Border: 208px
 * Gap: 16px
 * H1: 48px
 * H2: 36px
 * H3: 20px
 * P: 16px
 *
 * sm lg 2xl
 * 360 1024 1440
 *
 */
export default function LandingPage() {
  return (
    <>
      <section className="flex flex-col items-center 2xl:mx-52 2xl:my-20">
        <span className="flex items-center justify-center rounded-full border border-solid border-fuchsia-900 2xl:mb-4 2xl:h-6 2xl:w-48 2xl:text-xs">
          WELCOME TO FUTURELEADS
        </span>
        <h1 className="max-w-[30ch] text-center font-bold tracking-wide 2xl:mx-40 2xl:mb-4 2xl:text-5xl">
          Your Gateway to AI-Powered Outreach Automation
        </h1>
        <p className="max-w-[65ch] text-center 2xl:mx-60 2xl:mb-6 2xl:text-base">
          A powerful all-in-one AI automation platform designed to supercharge
          your customer acquisition. We know how hard it is to stay on top of
          leads, nurture them across various channels, and close deals fast.
        </p>
        <div className="flex gap-5">
          <Btn text={"GET STARTED"} outline={false} />
          <Btn text={"LEARN MORE"} outline={true} />
        </div>
      </section>

      <section className="grid items-center justify-center 2xl:mx-52 2xl:my-20 2xl:h-[450px] 2xl:grid-cols-3 2xl:grid-rows-2 2xl:gap-5">
        <div className="relative h-full rounded-lg bg-indigo-950 bg-opacity-80 2xl:col-span-2 2xl:row-span-2">
          <div className="float-right p-4">
            <CircleBtn purple={true} />
          </div>
          <div className="absolute bottom-0 2xl:p-5">
            <span className="2xl:text-xs">OUR VALUE</span>
            <h2 className="2xl:py-3 2xl:text-4xl">
              Transforming Outreach with AI Automation
            </h2>
            <p className="max-w-[80ch] tracking-wider 2xl:pb-8 2xl:text-xs">
              FutureLeads empowers businesses with hyper-personalized AI
              outreach solutions, allowing you to engage your audience across
              email, social media, and voice channels effortlessly. Our platform
              turns automated interactions into genuine relationships, saving
              you time while boosting results.
            </p>
            <Btn text={"LEARN MORE"} outline={true} />
          </div>
        </div>
        <div className="relative h-full rounded-lg bg-indigo-950 bg-opacity-80">
          <div className="float-right p-4">
            <CircleBtn purple={false} />
          </div>
          <div className="absolute bottom-0 2xl:p-5">
            <span className="2xl:text-xs">OUR MISSION</span>
            <h2 className="2xl:py-4 2xl:text-xl">
              Making Personalized Engagement Scalable
            </h2>
            <p className="max-w-[65ch] tracking-wider 2xl:text-xs">
              We strive to make sophisticated AI-driven outreach accessible,
              scalable, and effective for businesses of all sizes.
            </p>
          </div>
        </div>
        <div className="relative h-full rounded-lg bg-indigo-950 bg-opacity-80">
          <div className="float-right p-4">
            <CircleBtn purple={false} />
          </div>
          <div className="absolute bottom-0 2xl:p-5">
            <span className="2xl:text-xs">OUR VISION</span>
            <h2 className="2xl:py-4 2xl:text-xl">
              Redefining Sales with Human-Like AI Interactions
            </h2>
            <p className="max-w-[65ch] tracking-wider 2xl:text-xs">
              We envision a future where AI transforms the sales process into a
              more human-centric experience.
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-around bg-gradient-to-r from-purple-400 to-pink-400 text-center 2xl:my-20 2xl:h-36 2xl:px-52">
        <div>
          <span className="2xl:text-5xl">56K+</span>
          <p>PROJECTS DONE</p>
        </div>
        <div>
          <span className="2xl:text-5xl">38K+</span>
          <p>HAPPY CLIENTS</p>
        </div>
        <div>
          <span className="2xl:text-5xl">4.7</span>
          <p>CLIENT RATINGS</p>
        </div>
        <div>
          <span className="2xl:text-5xl">35+</span>
          <p>AWARDS</p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center text-center 2xl:mx-52 2xl:my-20">
        <span className="2xl:text-xs">KEY FEATURES</span>
        <h2 className="max-w-[30ch] font-bold tracking-wide 2xl:my-5 2xl:text-4xl">
          Discover the Key Features that Make FutureLeads a Game-Changer
        </h2>
        <KeyFeaturesList />
      </section>
    </>
  );
}
