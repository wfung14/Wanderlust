import React, { useState } from 'react'
import { UpdateLocation } from '../../services/location'


const UpdateLocationForm = (props) => {
  const initialState = {
    location: props.location.location,
    from: props.location.from,
    to: props.location.to,
    transportation: props.location.transportation,
    lodging: props.location.lodging,
    id:props.location._id
  }

  const getLocations = props.getLocations
  console.log(props)

  const [updateLocationFormState, setUpdateLocationFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(updateLocationFormState)
    await UpdateLocation(updateLocationFormState)
    // setUpdateLocationFormState(initialState)
    getLocations()
  }

  const handleChange = (event) => {
    setUpdateLocationFormState({
      ...updateLocationFormState,
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
        value={updateLocationFormState.location}
      ></input>
      
      <label htmlFor="from">From:</label>
      <input
        type="text"
        id="from"
        onChange={handleChange}
        value={updateLocationFormState.from}
      >
      </input>

      <label htmlFor="To">To:</label>
      <input
        type="text"
        id="to"
        onChange={handleChange}
        value={updateLocationFormState.to}
      >
      </input>

      <button type="submit">Submit</button>
    </form>
  )    
}

export default UpdateLocationForm