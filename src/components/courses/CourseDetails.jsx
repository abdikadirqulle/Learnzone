
import { useParams } from "react-router-dom"
import { coursesList } from "../../assets/courses/courses";
import ReactPlayer from "react-player";
import courseBgImg from "../../assets/images/course-bg.webp"
import { useEffect } from "react";
const CourseDetails = () => {
    const { id } = useParams();
    const course = coursesList.find(course => course.id === parseInt(id));
  
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    },[])

    if (!course) {
      return <div>Product not found!</div>;
    }
    return (
        <div className="space-y-2 pt-[3rem]">
                {/* cover img and txt */}
            <div className="relative w-full h-[23rem] bg-cover bg-no-repeat bg-center" 
            // style={{backgroundImage: `url('${courseBgImg}')`}} 
            style={{background: `url(${courseBgImg}) 0% 0% / cover no-repeat`}}
            >
            <div className="flex flex-col max-w-6xl mx-auto py-16 z-50">
                <div className="w-1/2">
                <h1 className="text-3xl text-white font-bold ">{course.name}</h1>
                <p>{course.description}</p>
                </div>
            </div>


            <div className="absolute inset-0 w-full h-full bg-blue-400 bg-opacity-90"></div>
            </div>

      <div className="max-w-6xl mx-auto px-2 pb-3 ">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 lg:flex-row ">
            {/* course video */}
            <div className="md:col-span-2 lg:w-2/3 h-full">
              <ReactPlayer url={course.courseVideoLink} controls width="" height="400px"/>
            </div>

            {/* desc */}
            <div className="flex flex-col gap-10 lg:w-2/5">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">{course.name}</h1>
                <p className="text-secondary text-sm font-light">
                  {course.description}
                </p>
              </div>
              {/* qeybta add to card */}
              <div className="flex flex-col gap-10 ">
                <div className="flex gap-4 items-center">
                <p className="text-xl font-bold text-green-600 ">${course.price}.99</p>
                <p className="text-sm line-through">${course.oldPrice}.99</p>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-center bg-black text-white font-semibold px-4 py-2 ">Add To Cart</button>
                    <button className="text-center bg-blue-200 text-black font-semibold px-4 py-2 ">Buy Now</button>
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>
      </div>
    );
}

export default CourseDetails