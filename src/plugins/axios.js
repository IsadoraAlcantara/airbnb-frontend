import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'http://127.0.0.1:8000/api/',
  //   headers: {
  //     Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_TOKEN}`,
  //   },
})

const getHosting = async () => {
  const { data } = await api.get('/acomodacoes/')
  return data
}

export { getHosting }

export default api
