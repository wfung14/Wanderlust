import { useState, useEffect } from 'react'
import LocationForm from '../components/LocationForm/LocationForm'
import axios from 'axios'
import { DeleteLocation } from '../services/location'
import { Link } from 'react-router-dom'

const Location = () => {
  const [locations, setLocations] = useState([])

  const getLocations = async () => {
    try {
      let res = await axios.get('http://localhost:3001/locations')
      setLocations(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async (id) => {
    try {
      let res = await DeleteLocation(id)
      if (res.status === 'Ok') {
        console.log(locations)
        let newLocations = locations.filter((location) => {
          return location._id !== id
        })
        setLocations(newLocations)
      }
      console.log(res)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getLocations()
  }, [])

  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <div>
        <h1>Trips:</h1>
        {locations.map((location) => (
          <div key={location._id}>
            <Link to={`/locations/${location._id}`}>
              <h3>Location: {location.location}</h3>
            </Link>

            <p>From: {location.from}</p>
            <p>To: {location.to}</p>
            <button
              onClick={() => {
                handleDelete(location._id)
              }}
              id="delete-button"
            >
              Delete Trip
            </button>
          </div>
        ))}
      </div>

      <button onClick={() => setShowForm(!showForm)}>Add Location</button>
      {showForm ? <LocationForm getLocations={getLocations} /> : ' '}
    </>
  )
}

export default Location
