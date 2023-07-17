import { useState } from "react"
import LocationForm from "../../components/LocationForm/LocationForm";

export default function LocationPage() {

  const [showForm, setShowForm] = useState(false)

  return(
    <>
      <h2>My Destinations</h2>
    
      <button onClick={() => setShowForm(!showForm)}>Add Location</button> 
    
    {showForm ? (<LocationForm/>) : " "}

    </>
    
  )
}

