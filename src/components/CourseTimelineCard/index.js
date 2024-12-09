// Write your code here
import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {each} = props
  return (
    <div className="course-con">
      <div className="course-title-timer-con">
        <h1 className="course-title">{each.courseTitle}</h1>
        <div className="timer-details-con">
          <AiFillClockCircle className="timer" />
          <p className="duration">{each.duration}</p>
        </div>
      </div>
      <p className="description">{each.description}</p>
      <div className="ul-item">
        {each.tagsList.map(eachItem => (
          <p className="li-items" key={eachItem.id}>
            {eachItem.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
