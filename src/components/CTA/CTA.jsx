import Ai from "../../assets/images/Ai.webp"
import platformImg from "../../assets/images/platform-hero.webp"

import { FaLongArrowAltRight } from "react-icons/fa";
const CTA = () => {
  return (
    <div className="mt-10 flex flex-col gap-10 ">
      <AnotherCTA />
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between ">
        <div className="flex flex-col gap-4 items-center md:items-start md:w-1/2">
          <h2 className="font-medium text-sm text-secondary  ">
            THE FUTURE OF LEARNING
          </h2>
          <h1 className="font-bold text-4xl text-tertiary text-center md:text-start ">
            Driven by innovation. Powered by AI
          </h1>
          <span className="font-normal text-center md:text-start">
            We’re more than an LMS. We’re the foundation on which the future of
            learning is built. Which is why innovation is the driving force
            behind our platform—and AI is at its core.
          </span>

          <span className="text-center md:text-start">
            We harness the power of AI to accelerate content production,
            automate workflows and improve the learner experience. It’s like
            doubling the size of your team, without adding headcount. Bigger
            impact, greater results.
          </span>

          <button className="bg-primaryBlue text-center text-white font-medium py-1.5 px-8 rounded-md flex gap-4">
            Learn More
            <FaLongArrowAltRight className="w-7 h-7"/>
          </button>
        </div>

        {/* imgaka meesha lasoo galinaayo */}
        <div className="mt-10 w-[416px]">
          <img
            src={Ai}
            alt="Ai image"
            className="w-[446px] h-[313px] object-contain "
          />
        </div>
      </div>

    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;




export const AnotherCTA = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row-reverse gap-4 items-center justify-between ">
        <div className="flex flex-col gap-4 items-center md:items-start md:w-1/2">
          <h2 className="font-medium text-sm text-secondary  ">
          FOR EDUCATION, TRAINING & UPSKILLING
          </h2>
          <h1 className="font-bold text-4xl text-tertiary text-center md:text-start ">
            Take the next step toward your personal and professional goals with
            LearnZone.
          </h1>
          <span className="font-normal text-center md:text-start">
          Get the world-class learning and development chosen by top organizations across the globe. All on LearnZone for Business.
          </span>

          <span className="text-center md:text-start">
          Join now to receive personalized recommendations from the full LearnZone catalog.
          </span>

          <button className="bg-primaryBlue text-center text-white font-medium py-1.5 px-8 rounded-md md:rounded-full">
            Get started
          </button>
        </div>

        {/* imgaka meesha lasoo galinaayo */}
        <div className="">
          <img
            src={platformImg}
            alt="Ai image"
            className="w-[500px] h-[400px] object-contain "
          />
        </div>
      </div>
    </div>
  );
}

