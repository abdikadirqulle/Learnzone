
import visual from "../../assets/images/visual.png";

const Menu = () => {
  return (
    <div className="max-w-6xl mx-auto  px-2 flex flex-col md:flex-row items-center  justify-between gap-6 pt-4">
      <div className="flex flex-col items-center md:items-start space-y-16">
        <div className='flex flex-col gap-4'>
        <h1 className="relative font-bold text-5xl text-secondary leading-snug text-center md:text-start">
          Getting <span className="text-primary font-bold">Quality</span> <br /> Education
          Is Now  More <span className="text-primary font-bold">Easy</span>
        </h1>

        <p className="text-md font-light text-center md:text-start">
          <span></span>We aspire to create outstanding academy that promote
          <br /> educational excellence, character development and
          service to communities.
        </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center  w-full">
          <button className="bg-primaryBlue hover:bg-blue-600 w-full  md:w-1/2 text-center font-medium rounded-full py-3 px-12 text-white text-lg text-nowrap">
            Join for Free.
          </button>
          <button className="bg-secondary border-2 hover:bg-blue-100 border-blue-400 w-full  text-center font-medium rounded-full py-3 px-12 text-secondary text-lg text-nowrap">
            Get Unlimited Learning
          </button>
        </div>
      </div>

      <div className="">
        <img
          src={visual}
          alt="visual"
          className="w-[700px]"
        />
      </div>
    </div>
  );
}

export default Menu