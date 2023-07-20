import React from "react"
import { useState } from "react"
import { AddItinerary } from '../../services/itinerary'

const ItineraryForm = ({ id, setSubmitted, submitted }) => {

  const initialState = {
    activity: '',
    date: '',
  }

  const [itineraryFormState, setItineraryFormState] = useState(initialState)



  const handleSubmit = async (event) => {
    event.preventDefault()
    await AddItinerary(itineraryFormState, id)
    setItineraryFormState(initialState)
    setSubmitted(!submitted)
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