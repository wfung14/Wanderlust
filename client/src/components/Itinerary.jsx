import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Itinerary = (props) => {

  const itinerary = props.itinerary
  const getItineraries = props.getItineraries

  const [showForm, setShowForm] = useState(false)

  return (
    <div>
    <Link to={`/itineraries/${itinerary._id}`}>
      <h3>Itinerary: {itinerary.activity}</h3>
    </Link>

    <p>From: {itinerary.activity}</p>
    <p>Date: {itinerary.date}</p>
  </div>
  )
}

export default Itinerary