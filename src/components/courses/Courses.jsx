import { Link } from "react-router-dom";
import { coursesList } from "../../assets/courses/courses"


const Courses = () => {

  return (
    <div className="max-w-6xl  mx-auto cursor-pointer py-4 px-2 pt-[6rem]">
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-bold text-primary">COURSES</h1>
          <h1 className="text-4xl font-bold ">Popular Courses</h1>
          <p className="text-[#6B7280] text-lg font-medium">
            The Best course?. Learn anytime & anywhere.
          </p>
        </div>


        {/* course list */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
          {coursesList.map((course) => (
            <Link
              to={`/courses/${course.id}`}
              key={course.id}
              className="flex flex-col gap-5  rounded-md overflow-hidden shadow-md"

            //   onClick=""
            >
              <div className="w-full h-1/2">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* course describtion */}
              <div className="flex flex-col gap-6 px-4  w-full h-full">                
                <div className="flex flex-col gap-0">
                  <h1 className="font-bold text-lg text-secondary">
                    {course.name}
                  </h1>
                  <span className="font-light text-sm">{course.teacherName}</span>
                </div>
                <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-xl line-through text-red-600">
                  ${course.oldPrice}.00 Ending Soon
                </h1>
                <h1 className="font-semibold text-xl text-green-600">
                  ${course.price}.00 For Life Time Access
                </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses