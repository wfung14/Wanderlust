import { useState, useEffect } from "react"
import ItineraryForm from "../components/ItineraryForm/ItineraryForm"
import NoteForm from "../components/NoteForm/NoteForm"
import axios from 'axios'
import { useParams } from 'react-router-dom'

const LocationDetail = () => {

  const [showForm, setShowForm] = useState(false)

  const [location, setLocation] = useState([])

  let { id } = useParams();

  const getLocations = async () => {
    try {
      let res = await axios.get(`http://localhost:3001/locations/${id}`)
      setLocation(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getLocations()
  }, [])

  return (
    <> 
    
        <div key={location._id}>
          <h3>Location: {location.location}</h3>
          <p>From: {location.from}</p>
          <p>To: {location.to}</p>
          <p>Transportation: {location.transportation}</p>
          <p>Lodging: {location.lodging}</p>
        </div>
      

    <button onClick={() => setShowForm(!showForm)}>Add Activity</button> 
    {showForm ? (<ItineraryForm id={location._id}/>) : " "}

    <button onClick={() => setShowForm(!showForm)}>Add Note</button> 
    {showForm ? (<NoteForm/>) : " "}

    </>
  )
}

export default LocationDetail