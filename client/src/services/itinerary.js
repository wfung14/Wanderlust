import Client from './api'

export const AddItinerary = async (data, id) => {
  try {
    const res = await Client.post(`itineraries/location/${id}/itineraries`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getItinerary = async (id) => {
  try {
    const res = await Client.get(`itineraries/location/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

