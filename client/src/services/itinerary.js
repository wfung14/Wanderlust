import Client from './api'

export const AddItinerary = async (data) => {
  try {
    const res = await Client.post(`locations/${data.id}/itineraries`, data.body)
    return res.data
  } catch (error) {
    throw error
  }
}