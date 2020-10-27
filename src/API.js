import Axios from 'axios';

const axios = Axios.create({ baseURL: 'https://cs-todo-notes.herokuapp.com/' });
// Returns data
export const getFromDB = (type, params) => {
  return axios
    .get(`${type}`, { params: params })
    .then((response) => response.data.payload)
    .catch(console.log);
};

// Return promise
export const postToDB = (type, params) => {
  return axios.post(`${type}`, params).catch(console.log);
};
export const deleteFromDB = (type, params) => {
  // return axios.delete(`${type}`, { data: params }).catch(console.log)
  // Fix for axios 0.20.0
  return axios({
    url: type,
    method: 'delete',
    data: params,
  });
};
