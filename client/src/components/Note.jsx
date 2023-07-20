import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Note = (props) => {

  const note = props.note
  const getNotes = props.getNotes

  const [showForm, setShowForm] = useState(false)

  return (
    <div>
    <Link to={`/itineraries/${note._id}`}>
      <h3>Note: {note.activity}</h3>
    </Link>

    <p>Note: {note.content}</p>
  </div>
  )
}

export default Note