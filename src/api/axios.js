import axios from "axios";

// creates a axois element with the base url from the api
export default axios.create({
    baseURL: "http://127.0.0.1:8000"
})