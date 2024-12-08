// Write your code here

import {Chrono} from 'react-chrono'

const TimelineView = props => {
  const {timelineItemsList} = props
  const courseTimelines = timelineItemsList.filter(
    each => each.categoryId === 'COURSE',
  )
  const projectTimelines = timelineItemsList.filter(
    each => each.categoryId === 'PROJECT',
  )
  return (
    <div>
      <Chrono mode="VERTICAL_ALTERNATING">{}</Chrono>
    </div>
  )
}

export default TimelineView
