import { useState } from 'react'
import axios from 'axios'
import './LocationForm.css'

const LocationForm = ({getLocations}) => {
  const initialState = {
    location: '',
    from: '',
    to: '',
    transportation: '',
    lodging: ''
  }

  const [locationFormState, setLocationFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/locations', locationFormState)
    setLocationFormState(initialState)
    getLocations()
  }

  const handleChange = (event) => {
    setLocationFormState({
      ...locationFormState,
      [event.target.id]: event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        onChange={handleChange}
        value={locationFormState.location}
      ></input>
      
      <label htmlFor="from">From:</label>
      <input
        type="text"
        id="from"
        onChange={handleChange}
        value={locationFormState.from}
      >
      </input>

      <label htmlFor="from">To:</label>
      <input
        type="text"
        id="to"
        onChange={handleChange}
        value={locationFormState.to}
      >
      </input>

      <label htmlFor="transportation">Transportation:</label>
      <input
        type="text"
        id="transportation"
        onChange={handleChange}
        value={locationFormState.transportation}
      />

      <label htmlFor="lodging">Lodging:</label>
      <input
        type="text"
        id="lodging"
        onChange={handleChange}
        value={locationFormState.lodging}
      />
      <button type="submit">Add location</button>
    </form>
  )
}

export default LocationForm
