import Btn from "./Btn";
import CircleBtn from "./CircleBtn";
import HowItWorksCard from "./HowItWorksCard";
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
  const HowItWorksCardProps = [
    {
      title: "Explore AI Solutions",
      text: "Book a consultation to discuss your lead generation challenges. We'll help you explore AI-driven solutions that fit your business needs.",
      btnText: "BOOK NOW",
    },
    {
      title: "Customized Implementation",
      text: "Discover the powerful automation tools FutureLeads offers—AI email outreach, social media engagement, chatbots, and voice agents—all working together to maximize results.",
      btnText: "LEARN MORE",
    },
    {
      title: "Prototype & Launch",
      text: "We'll create a customized wireframe and integrate FutureLeads' automation tools seamlessly into your workflow, ensuring a smooth setup and immediate results.",
      btnText: "GET STARTED",
    },
    {
      title: "?",
      text: "Experience the magic as our AI systems engage your leads in real-time, creating personalized experiences across channels. We'll gather insights and continuously optimize for better outcomes.",
      btnText: "LAUNCH NOW",
    },
  ];

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
        <div className="relative h-full rounded-lg border-2 border-white border-opacity-10 bg-indigo-950 bg-opacity-80 2xl:col-span-2 2xl:row-span-2">
          <div className="flex flex-row-reverse p-4">
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
        <div className="relative h-full rounded-lg border-2 border-white border-opacity-10 bg-indigo-950 bg-opacity-80">
          <div className="flex flex-row-reverse p-4">
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
        <div className="relative h-full rounded-lg border-2 border-white border-opacity-10 bg-indigo-950 bg-opacity-80">
          <div className="flex flex-row-reverse p-4">
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

      <section className="flex flex-col items-center justify-center text-center 2xl:mx-52 2xl:my-20">
        <span className="2xl:text-xs">HOW IT WORKS</span>
        <h2 className="max-w-[30ch] font-bold tracking-wide 2xl:my-5 2xl:text-4xl">
          Unlock Success with FutureLeads in 4 Easy Steps!
        </h2>
        <div className="2xl:mt-10 2xl:grid 2xl:min-h-[300px] 2xl:grid-cols-4 2xl:grid-rows-1 2xl:gap-5">
          {HowItWorksCardProps.map((card, index) => (
            <HowItWorksCard
              key={index}
              title={card.title}
              text={card.text}
              btnText={card.btnText}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center text-center 2xl:mx-52 2xl:my-20">
        <div className="flex basis-1/2 items-center justify-center 2xl:mb-10 2xl:flex-row">
          <h2 className="max-w-[30ch] text-left font-bold tracking-wide 2xl:text-4xl">
            FutureLeads brings AI innovation to your sales strategy
          </h2>
          <p className="max-w-[40ch] text-left tracking-wide opacity-40 2xl:text-xl">
            Boosting results and freeing up time to focus on what matters
            most—building relationships.
          </p>
        </div>
        <div className="w-full 2xl:grid 2xl:grid-cols-4 2xl:grid-rows-2 2xl:gap-5">
          <div className="col-span-2 rounded-lg border-2 border-white border-opacity-10 bg-indigo-950 bg-opacity-80">
            1
          </div>
          <div className="rounded-lg border-2 border-white border-opacity-10 bg-indigo-950 bg-opacity-80">
            2
          </div>
          <div className="row-span-2 rounded-lg border-2 border-white border-opacity-10 bg-indigo-950 bg-opacity-80 2xl:min-h-[500px]">
            3
          </div>
          <div className="rounded-lg border-2 border-white border-opacity-10 bg-indigo-950 bg-opacity-80">
            4
          </div>
          <div className="col-span-2 rounded-lg border-2 border-white border-opacity-10 bg-indigo-950 bg-opacity-80">
            5
          </div>
        </div>
      </section>
    </>
  );
}
