import React from 'react'

const LaunchCard = ({name, date, links, rocket_name}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{date}</p>
        <a href={links}>view here</a>
        <h4>{rocket_name}</h4>
    </div>
  )
}

export default LaunchCard