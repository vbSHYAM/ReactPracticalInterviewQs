import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export default AxiosInstance;
