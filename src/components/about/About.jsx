import threeDots from "../../assets/images/dots.png"


const About = () => {
  return (
    <div className="relative w-full h-full">
      <div className="max-w-6xl mx-auto pb-[4rem] px-3">
        <div className="flex flex-col items-center">
          <div className="flex flex-col text-center gap-2">
            <h1 className="text-primary uppercase  font-bold text-xl">
              About Us
            </h1>
            <h1 className="text-[32px] font-extrabold">Introduction</h1>
          </div>

          <div className="flex items-center justify-center pt-10">
            <p className="text-lg md:w-2/3">
              When we started Learnzone Online Courses back in 2018, our goal
              was to give Somalis from all across the world the ability to learn
              the skills they’d need to succeed in this modern century. We set
              out to create a new, interactive way of learning — making it
              engaging, flexible, and accessible for as many people as possible.
              Since then, we have helped hundreds of Somali people worldwide
              unlock modern technical skills and reach their full potential
              through code. There are two commitments we&apos;ve made to the
              world. We&apos;ve been grounded by these since day one: Increase
              access to high-quality education for everyone, everywhere; Enhance
              teaching and learning online through research.
            </p>
          </div>

          <div className="pt-10 flex flex-col items-center justify-center gap-4">
            <h1 className=" font-extrabold text-[32px]">Our Vision</h1>
            <p className="text-lg md:w-2/3">
              To reach out to all Somali communities through knowledge and to be
              a comprehensive online institute that offers quality-oriented
              education and accredited certification.
            </p>
          </div>

          <div className="pt-10 flex flex-col items-center justify-center gap-4">
            <h1 className=" font-extrabold text-[32px]">Our Mission</h1>
            <p className="text-lg md:w-2/3">
              We want to create a world where anyone can build something
              meaningful with technology, and everyone has the learning tools,
              resources, and opportunities to do so. Code contains a world of
              possibilities — all that’s required is the curiosity and drive to
              learn. At LearnZone, we are dedicated to empowering all people,
              regardless of where they are in their coding journeys, to continue
              to learn, grow, and make an impact on the world around them.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-10 hidden lg:block">
        <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
        <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
        <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
        <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
        <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
      </div>
      <div className="absolute right-0 top-1/2 hidden lg:block">
      <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
      <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
      <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
      </div>
    </div>
  );
};

export default About;
