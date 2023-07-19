import Client from './api'

export const AddLocation = async (data) => {
  try {
    const res = await Client.post('/locations', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteLocation = async (id) => {
  try {
    const res = await Client.delete(`/locations/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}