import React from 'react'

function Matcard({ area, matatuName, routeNumber, location, timeSpotted }) {
  return (
    <div className="matatu-card">
      <h3>{matatuName}</h3>
      <p>Area: {area}</p>
      <p>Route: {routeNumber}</p>
      <p>Location: {location}</p>
      <p>Time Seen: {timeSpotted}</p>
    </div>
  )
}

export default Matcard