import { useState, useEffect } from 'react'
import LocationForm from '../components/LocationForm/LocationForm'
import axios from 'axios'

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

  useEffect(() => {
    getLocations()
  }, [])

  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <div>
        <h2>My Travels</h2>

        <h1>Trips:</h1>
          {locations.map((location) => (
            <div key={location._id}>
              <a href="/id">
              <h3>Location: {location.location}</h3>
              </a>
              <p>From: {location.from}</p>
              <p>To: {location.to}</p>
            </div>
          ))}
      </div>

      <button onClick={() => setShowForm(!showForm)}>Add Location</button>
      {showForm ? <LocationForm getLocations={getLocations}/> : ' '}
    </>
  )
}

export default Location
