import { Link } from "react-router-dom";
import { coursesList } from "../../assets/courses/courses"


const Courses = () => {
  return (
    <div className="max-w-6xl  mx-auto cursor-pointer">
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-medium text-primary">Courses</h1>
          <p className="text-secondary text-lg font-medium">
            The Best course?. Learn anytime & anywhere.
          </p>
        </div>

        {/* course list */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
          {coursesList.map((course) => (
            <Link
              to={`/courses/${course.name}`}
              key={course.id}
              className="flex flex-col gap-5  rounded-md overflow-hidden shadow-md"
            >
              <div className="w-full h-1/2 bg-red-400">
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
                  <span className="font-light">{course.teacherName}</span>
                </div>
                <h1 className="font-semibold text-3xl text-green-600">
                  ${course.price}.99
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses