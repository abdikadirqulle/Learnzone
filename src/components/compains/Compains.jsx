import { Link } from 'react-router-dom';
import { LocalBrands } from '../../assets/LocalBrands'
import mentor from "../../assets/images/mentor.jpg"


const members = [
    {
        rate : "25k",
        name : "Classes",
    },
    {
        rate : "600K+",
        name : "Members",
    },
    {
        rate : "300+",
        name : "Institutions",
    },
    {
        rate : "8k",
        name : "Teachers",
    },
    {
        rate : "15,000+",
        name : "Enterprise customers",
    },
]

const Compains = () => {
  return (
      <div className='bg-tertiary p-4'>
    <div className="max-w-6xl mx-auto  px-2 flex flex-col gap-10  rounded-md">
        <div className="flex flex-col space-y-4 md:space-y-3 pb-10">
          <h1 className="text-md font-medium text-center md:text-md z-10">
            We collaborate with leading education providers and organisations
          </h1>
          <div className="flex gap-4 flex-wrap items-center justify-center xl:justify-start">
            {LocalBrands.map((brands) => (
              <>
                <div className="" key={brands.id}>
                  <img
                    src={brands.image}
                    alt="photo"
                    className="w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] xl:w-[7.5rem] object-contain"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
        {/* <Trused /> */}
      </div>
    </div>
  );
}

export default Compains;



export const Trused = () => {
    return (
      <div className='bg-primaryBlue py-10 '>
        <div className="max-w-6xl mx-auto  px-2 flex flex-wrap items-center justify-center md:justify-between gap-4 ">
          {members.map((index, member) => (
            <>
              <div key={index} className="rounded-md px-10 py-5 flex flex-col items-center justify-center ">
                <h1 className="text-3xl font-extrabold text-white ">
                  {member.rate}
                </h1>
                <h1 className="text-lg font-bold text-white ">
                  {member.name}
                </h1>
              </div>
            </>
          ))}
        </div>
      </div>
    );
};


export const Mentor = () => {
    return (
      <div className="max-w-6xl mx-auto  px-2 bg- p-4">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
          <img src={mentor} alt="Mentor" height={400} width={400} />

          <div className="flex flex-col items-center md:items-start gap-4 md:w-1/2">
            <h1 className="text-4xl font-bold text-tertiary">
              Become an instructor
            </h1>
            <span className="font-medium text-xl text-center sm:text-start">
              Instructors from around the world teach millions of learners on
              LearnZone. We provide the tools and skills to teach what you love.
            </span>

            <button
              type="button"
              className="bg-primaryBlue hover:bg-blue-500 text-white px-4 font-medium py-2 text-center rounded-sm"
            >
              <Link to="/courses" className="">
                Start Teaching Today
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
}