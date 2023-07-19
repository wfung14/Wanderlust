import React from "react"
import { useState } from "react"
import axios from 'axios'
import './ItineraryForm.css'
import { AddItinerary } from '../../services/itinerary'

const ItineraryForm = () => {

  const initialState = {
    activity: '',
    date: '',
  }

  const [itineraryFormState, setItineraryFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event)
    await addItinerary(itineraryFormState)
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

      <button type="submit">Add activity</button>

    </form>
  )
}

export default ItineraryForm