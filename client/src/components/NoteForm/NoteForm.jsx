import React from "react"
import { useState } from "react"
import './NoteForm.css'

const NoteForm = () => {

  return (
    <>
      <div className="form-container">
        <form>
          <label>Note</label>
          <input type="text" />
        </form>
      </div>
    </>
  )
}

export default NoteForm