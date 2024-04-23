
import { useParams } from "react-router-dom"
import { coursesList } from "../../assets/courses/courses";
import ReactPlayer from "react-player";

const CourseDetails = () => {
    const { id } = useParams();
    const course = coursesList.find(course => course.id === parseInt(id));
  
    if (!course) {
      return <div>Product not found!</div>;
    }

    return (
      <div className="max-w-6xl mx-auto px-2 pb-3">
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
    );
}

export default CourseDetails