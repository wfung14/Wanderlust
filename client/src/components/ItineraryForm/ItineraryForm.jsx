import React from "react"
import { useState } from "react"
import axios from 'axios'
import './ItineraryForm.css'

const ItineraryForm = () => {

  const initialState = {
    activity: '',
    date: '',
  }

  const [itineraryFormState, setItineraryFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/locations/:id/itineraries', itineraryFormState)
    setItineraryFormState(initialState)
    getItinerarys()
  }

  const handleChange = (event) => {
    setItineraryFormState({
      ...itineraryFormState,
      [event.target.id]: event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="Activity">Activity:</label>
      <input
        type="text"
        id="activity"
        onChange={handleChange}
        value={itineraryFormState.activity}
      >
      </input>

      <label htmlFor="date">Date:</label>
      <input
        type="text"
        id="date"
        onChange={handleChange}
        value={itineraryFormState.date}
      />

      <button type="submit">Add location</button>

    </form>
  )
}

export default ItineraryForm