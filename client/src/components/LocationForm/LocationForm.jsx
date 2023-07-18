import React from "react"
import { useState } from "react"
import './LocationForm.css'

const LocationForm = () => {

  return (
    <>
      <div className="form-container">
        <form>
          <label>Location</label>
          <input type="text" />
          <label>Transportation</label>
          <input type="text" />
          <label>Lodging</label>
          <input type="text" />
          <label>From:</label>
          <input type="text" />
          <label>To:</label>
          <input type="text" />
          <button type="submit">Add My Destination</button>
        </form>
      </div>
    </>
  )
}

export default LocationForm