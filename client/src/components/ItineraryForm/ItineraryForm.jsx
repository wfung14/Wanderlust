import React from "react"
import { useState } from "react"
import './ItineraryForm.css'

const ItineraryForm = () => {

  return (
    <>
      <div className="form-container">
        <form>
          <label>Activity</label>
          <input type="text" />
          <label>Date</label>
          <input type="text" />
          <button type="submit">Add Activity</button>
        </form>
      </div>
    </>
  )
}

export default ItineraryForm