import { useState, useEffect } from 'react'
import ItineraryForm from '../components/ItineraryForm/ItineraryForm'
import NoteForm from '../components/NoteForm/NoteForm'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Itinerary from '../components/Itinerary'
import { getItinerary } from '../services/itinerary'

const LocationDetail = ({locationActivities, setLocationActivities}) => {
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
    } catch (err) {
      console.log(err)
    }
  }



  // const getItineraries = async () => {
  //   try {
  //     let res = await axios.get(`http://localhost:3001/itineraries/location/${id}`)
  //     setItinerary(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

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
        <h1>Activities:</h1>
        {locationActivities?.map((itinerary) => (
          <div>
            <h1>{itinerary.activity}</h1>
          </div>
          // <Itinerary
          //   Itinerary={itinerary}
          //   key={itinerary._id}
          //   getItineraries={getItineraries}
          // />
        ))}
      </div>
      <button onClick={() => setShowForm(!showForm)}>Add Activity</button>
      {showForm ? <ItineraryForm setSubmitted={setSubmitted} submitted={submitted} id={location._id} /> : ' '}

      <button onClick={() => setShowForm(!showForm)}>Add Note</button>
      {showForm ? <NoteForm id={location._id} /> : ' '}
    </>
  )
}

export default LocationDetail
