// Write your code here

import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const titles = timelineItemsList.map(each => ({
    title: each.title,
  }))
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={titles}>
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard each={each} key={each.id} />
          }
          return <ProjectTimelineCard each={each} key={each.id} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
