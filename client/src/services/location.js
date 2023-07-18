import Client from './api'

export const AddLocation = async (data) => {
  try {
    const res = await Client.post('/locations', data)
    return res.data
  } catch (error) {
    throw error
  }
}