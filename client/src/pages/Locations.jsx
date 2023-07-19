import { useState, useEffect } from 'react'
import LocationForm from '../components/LocationForm/LocationForm'
import axios from 'axios'
import { DeleteLocation } from '../services/location'
import Location from '../components/Location'

const Locations = () => {
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
          <Location location={location} handleDelete={handleDelete} key={location._id} getLocations = {getLocations} />
        ))}



      </div>

      <button onClick={() => setShowForm(!showForm)}>Add Location</button>
      {showForm ? <LocationForm getLocations={getLocations} /> : ' '}
    </>
  )
}

export default Locations
