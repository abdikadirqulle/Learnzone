
import { useParams } from "react-router-dom"

const CourseId = () => {
    const {id} = useParams()


    return (
    <div>Course name : {id}

    </div>
  )
}

export default CourseId