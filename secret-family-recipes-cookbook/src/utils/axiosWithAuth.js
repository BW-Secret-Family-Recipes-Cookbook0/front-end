import axios from 'axios'

export const axiosWithAuth = () => {
 const token = localStorage.getItem('token')

 return axios.create({
  headers: {
   authorization: token 
  },
  baseUrl: 'https://bw-secret-family-recipes0.herokuapp.com/api'
 })
}


export default axiosWithAuth;
// https://ialkamal-be-amp.herokuapp.com/api