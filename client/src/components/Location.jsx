import React, { useState } from 'react'
import UpdateLocationForm from './LocationForm/UpdateLocationForm'
import { Link } from 'react-router-dom'

const Location = (props) => {

  const location = props.location
  const getLocations = props.getLocations

  const [showForm, setShowForm] = useState(false)

  return (
    <div>
    <Link to={`/locations/${location._id}`}>
      <h3>Location: {location.location}</h3>
    </Link>

    <p>From: {location.from}</p>
    <p>To: {location.to}</p>

    <button onClick={() => setShowForm(!showForm)}>
      Update Trip
    </button>

    {showForm ? <UpdateLocationForm getLocations={getLocations} location={location}/> : ' '}

    <button
      onClick={() => {
        handleDelete(location._id)
      }}
      id="delete-button"
    >
      Delete Trip
    </button>
  </div>
  )
}

export default Location