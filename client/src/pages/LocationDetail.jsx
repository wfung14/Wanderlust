import { useState, useEffect } from 'react'
import ItineraryForm from '../components/ItineraryForm/ItineraryForm'
import NoteForm from '../components/NoteForm/NoteForm'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Itinerary from '../components/Itinerary'
import { getItinerary } from '../services/itinerary'

const LocationDetail = ({locationActivities, setLocationActivities, locationNotes, setLocationNotes}) => {
  const [showForm, setShowForm] = useState(false)

  const [location, setLocation] = useState([])

  const [submitted, setSubmitted] = useState(false)

  const [itineraries, setItinerary] = useState(false)

  let { id } = useParams()

  const getLocations = async () => {
    try {
      let res = await axios.get(`http://localhost:3001/locations/${id}`)
      setLocation(res.data)
      setLocationActivities(res.data.activities)
      setLocationNotes(res.data.notes)
      
    } catch (err) {
      console.log(err)
    }
  }





  useEffect(() => {
    getLocations()

  }, [submitted])



  return (
    <>
      <div key={location._id}>
        <h3>Location: {location.location}</h3>
        <p>From: {location.from}</p>
        <p>To: {location.to}</p>
        <p>Transportation: {location.transportation}</p>
        <p>Lodging: {location.lodging}</p>
      </div>

      <div>
        <h5>Activities:</h5>
        {locationActivities?.map((itinerary) => (
          <div>
            <h6>{itinerary.activity}</h6>
          </div>

        )
        )}

        <h5>Notes:</h5>
        {locationNotes?.map((note) => (
          <div>
            <h6>{note.content}</h6>
          </div>
        ))}
        
      </div>
      <button onClick={() => setShowForm(!showForm)}>Add Activity</button>
      {showForm ? <ItineraryForm setSubmitted={setSubmitted} submitted={submitted} id={location._id} /> : ' '}

          
      <button onClick={() => setShowForm(!showForm)}>Add Note</button>
      {showForm ? <NoteForm setSubmitted={setSubmitted} submitted={submitted} id={location._id} /> : ' '}
    </>
  )
}

export default LocationDetail
