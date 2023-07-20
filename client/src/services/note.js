import Client from './api'

export const AddNote = async (data, id) => {
  console.log(data)
  try {
    const res = await Client.post(`notes/location/${id}/notes`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getNote = async (id) => {
  try {
    const res = await Client.get(`notes/location/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}