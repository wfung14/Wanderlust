import React from "react"
import { useState } from "react"
import { AddNote } from "../../services/note"

const NoteForm = ({ id, setSubmitted, submitted }) => {

  const initialState = {
    content: ''
  }

  const [noteFormState, setNoteFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await AddNote(noteFormState, id)
    setNoteFormState(initialState)
    setSubmitted(!submitted)
  }

  const handleChange = (event) => {
    setNoteFormState({
      ...noteFormState,
      [event.target.id]: event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="Note">Note:</label>
      <input
        type="text"
        id="content"
        onChange={handleChange}
        defaultValue={noteFormState.content}
      >
      </input>

      <button type="submit">Add Note</button>

    </form>
  )
}

export default NoteForm