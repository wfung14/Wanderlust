import Client from './api'

export const AddNote = async (data) => {
  try {
    const res = await Client.post(`locations/${data.id}/notes`, data.body)
    return res.data
  } catch (error) {
    throw error
  }
}