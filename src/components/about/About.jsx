import threeDots from "../../assets/images/dots.png"
import "./about.css"

const About = () => {
  return (
    <div className="relative w-full h-full pb-10 pt-[6rem]">
      <div className="contact max-w-6xl mx-auto  ">
        <div className="main">
          <div className="header">
            <h1 className="contactTitle">
              About Us
            </h1>
            <h1 className="text-[32px] font-extrabold">Introduction</h1>
          </div>

          <div className="hero">
            <p className="HeroDescription">
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

          <div className="hero">
            <h1 className="HeroTitle">Our Vision</h1>
            <p className="HeroDescription">
              To reach out to all Somali communities through knowledge and to be
              a comprehensive online institute that offers quality-oriented
              education and accredited certification.
            </p>
          </div>

          <div className="hero">
            <h1 className="HeroTitle">Our Mission</h1>
            <p className="HeroDescription">
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

      <div className="dots-left">
        <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
        <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
        <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
        <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
        <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
      </div>
      <div className="dots-right">
      <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
      <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
      <img src={threeDots} alt="dots" className="w-40 xl:w-full" />
      </div>
    </div>
  );
};

export default About;
