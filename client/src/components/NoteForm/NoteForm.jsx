import React from "react"
import { useState } from "react"
import { AddNote } from "../../services/note"

const NoteForm = () => {

  const initialState = {
    content: ''
  }

  const [noteFormState, setNoteFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event)
    await AddNote(noteFormState)
    setNoteFormState(initialState)
    getNotes()
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
        id="note"
        onChange={handleChange}
        defaultValue={noteFormState.content}
      >
      </input>

      <button type="submit">Add Note</button>

    </form>
  )
}

export default NoteForm