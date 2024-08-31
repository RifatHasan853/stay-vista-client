import axios from 'axios'

export const axiosCommon = axios.create({
  baseURL: 'https://server-alpha-liard.vercel.app'
})
const useAxiosCommon = () => {
  return axiosCommon
}

export default useAxiosCommon
