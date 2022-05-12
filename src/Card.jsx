import React from 'react';
import data from './data'
import './App.css'

const Card = () => {
  return (
    <section>
      {data.map(item =>(
        <div key={item.id} className="card-grid">
          <img src={item.imageUrl} alt="" />
          <div>
          <span>{item.location}</span>
          <a href={item.googleMapsUrl} target="_blank">View on Google Maps</a>
          <h2>{item.title}</h2>
          <p className="bold-dates">{item.startDate} - {item.endDate}</p>
          <p>{item.description}</p>
          </div>
        </div>
      ) )}
    </section>
  )
}
export default Card