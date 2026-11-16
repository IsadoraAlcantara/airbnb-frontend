import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'http://127.0.0.1:8000/api/',
})

const getHosting = async (params = {}) => {
  const { data } = await api.get('/acomodacoes/', { params })
  return data
}

export { getHosting }

export default api
