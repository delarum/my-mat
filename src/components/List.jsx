import React from 'react'
import matatus from '../data/mat'
import Matcard from './Matcard'

function List() {
  return (
   <section className="matatu-section">

      <h2>Matatus Spotted</h2>

      <div className="matatu-grid">
        {matatus.map((matatu) => (
          <Matcard
            key={matatu.id}
            area={matatu.area}
            matatuName={matatu.matatuName}
            routeNumber={matatu.routeNumber}
            location={matatu.location}
          />
        ))}
      </div>

    </section>
  )
}

export default List