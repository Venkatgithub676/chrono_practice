// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {each} = props
  return (
    <div className="project-con">
      <img src={each.imageUrl} alt="project" className="project-img" />

      <div>
        <div className="project-icon-con">
          <h1 className="project-title">{each.projectTitle}</h1>
          <div className="icon-duration">
            <AiFillCalendar className="ai-calendar" />
            <p className="duration">{each.duration}</p>
          </div>
        </div>
        <p className="description">{each.description}</p>
        <a
          className="link"
          href={each.projectUrl}
          target="_blank"
          rel="noreferrer"
        >
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
