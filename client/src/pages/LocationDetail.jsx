import { useState } from "react"
import ItineraryForm from "../components/ItineraryForm/ItineraryForm";
import NoteForm from "../components/NoteForm/NoteForm"

const LocationDetail = () => {

  const [showForm, setShowForm] = useState(false)

  return (
    <> 
    {/* add details of vacation  as list? */}

    <button onClick={() => setShowForm(!showForm)}>Add Activity</button> 
    {showForm ? (<ItineraryForm/>) : " "}

    <button onClick={() => setShowForm(!showForm)}>Add Note</button> 
    {showForm ? (<NoteForm/>) : " "}

    </>
  )
}

export default LocationDetail