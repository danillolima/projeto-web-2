import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:9000",
    crossDomain : true,
    withCredentials: true //This need to be done in orde to send cookies to the backend application
  });
  
export default api;