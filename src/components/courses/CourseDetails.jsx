
import { Link, useParams } from "react-router-dom"
import { coursesList } from "../../assets/courses/courses";
import ReactPlayer from "react-player";
import courseBgImg from "../../assets/images/course-bg.webp"
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoListOrdered } from "react-icons/go";
import { BsDisplay } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import { FaMoneyBill1 } from "react-icons/fa6";

const CourseDetails = () => {

    const { id } = useParams();
    const course = coursesList.find(course => course.id === parseInt(id));
    const {user} = useUser();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    },[])

    const contentList = [
        {
          id: 1,
          title: "Introduction",
          description: "Welcome to introduction",
        },
        {
          id: 2,
          title: "basic",
          description: "Welcome to basic",
        },
        {
          id: 3,
          title: "Projects",
          description: "Welcome to projects",
        },
      ];

      
    if (!course) {
      return <div>Product not found!</div>;
    }



    return (
      <div className="relative space-y-2 pt-[3rem]">
        {/* cover img and txt */}
        <div
          className="relative w-full md:h-[23rem] bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `linear-gradient(rgb(0 104 217/80%), rgb(0 104 217/80%)) , 
            url(${courseBgImg})`,
          }}
        >
          <div className="px-2 flex flex-col gap-4 h-full max-w-6xl mx-auto py-16 z-50">
            <div className="md:w-1/2 text-white space-y-3">
              <h1 className="text-3xl  font-bold ">{course.name}</h1>
              <p>{course.description}</p>
            </div>
            <span className="pt-4 text-white font-normal">
              Last Update : 1/3/2024
            </span>
            <div className="flex items-center gap-2">
              <span
                className="rounded-full w-11 h-11 cursor-pointer bg-[#A0FAD3] 
              flex justify-center items-center text-2xl text-[#00674C] capitalize"
              >
                {course.teacherName.charAt(0)}
              </span>
              <p className="text-xs  font-light text-white capitalize">
                {course.teacherName}
              </p>
            </div>
          </div>

          {/* absulate */}
          <div className="md:absolute md:top-[3rem] md:right-[7%] rounded-md overflow-hidden
           bg-white mx-4 shadow-2xl md:w-[420px] px-3 md:px-0">
            <img
              alt="SA"
              loading="lazy"
              width="500"
              height="300"
              decoding="async"
              data-nimg="1"
              src={course.image}
            />
            {/*  */}

            <p className="text-center text-xl pt-2 font-medium">
              Course Includes
            </p>
            {/*  */}
            <div className="flex flex-col gap-4 mt-4 px-5">
              <div className="flex items-center gap-2">
                <BsDisplay className="w-6 h-6" />
                <p className="text-lg">{course.courseHoure} Of HD videos</p>
              </div>
              <div className="flex items-center gap-2">
                <MdPeopleAlt className="w-6 h-6" />
                <p className="text-lg">Access to exclusive community</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCertificate className="w-6 h-6" />
                <p className="text-lg">Certificate of Completion</p>
              </div>

              <div className="flex items-center gap-2">
                <FaMoneyBill1 className="w-6 h-6" />
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold text-xl line-through text-red-600">
                    ${course.oldPrice}.00 Ending Soon
                  </h1>
                  <h1 className="font-semibold text-xl text-green-600">
                    ${course.price}.00 For Life Time Access
                  </h1>
                </div>
              </div>
            </div>

            {/*  */}
            <Link to={`/${!user ? "sign-in" : "/"}`} className="mt-3">
              <button className="font-medium px-3 py-2 my-4  w-2/3 bg-primaryBlue text-white rounded-full text-lg hover:bg-blue-500">
                {!user ? "Login To Enroll" : "Enroll Now"}
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-[3rem] px-2">
          <div className="flex flex-col lg:w-2/3 gap-3">
            <h1 className="text-3xl font-semibold">Course Description</h1>
            <p>{course.description}</p>
            <div className=" py-2 hover:z-50">
              <ReactPlayer width="100%" controls url={course.courseVideoLink} />
            </div>

            <div className="flex flex-col gap-4 pt-3">
              <h1 className="text-3xl font-bold">Course Content</h1>

              <div className="flex flex-col gap-3 pb-[5rem]">
                {contentList.map((content) => (
                  <CourseContent
                    title={content.title}
                    description={content.description}
                    id={content.id}
                    key={content.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CourseDetails



// eslint-disable-next-line react/prop-types
export const CourseContent = ({title, id}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handelOpen = () => {
        setIsOpen(!isOpen)
      }

    return (
      <div className="flex shadow flex-col  rounded-md" key={id}>
        <div
          className={`flex justify-between items-center px-6  bg-[#E9E9E9]
                cursor-pointer py-3 ${open ? "rounded-t-md" : "rounded-md "}`}
          onClick={handelOpen}
        >
          <h3>{title}</h3>
          {isOpen ? (
            <IoIosArrowDown className="cursor-pointer w-5 h-5" />
          ) : (
            <IoIosArrowUp className="cursor-pointer w-5 h-5" />
          )}
        </div>
        {isOpen && (
          <div className="px-5 py-3 rounded-b-md ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GoListOrdered className="w-5 h-5 " />
                <p className="text-lg">Video List</p>
              </div>

              <p className="text-lg">Time</p>
            </div>
          </div>
        )}
      </div>
    );
}
