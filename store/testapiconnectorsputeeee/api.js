import axios from "axios"
import {} from "react-native-dotenv"
const testapiconnectorsputeeee = axios.create({
  baseURL: "https://cbtcms.herokuapp.com/runs/2927/?",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
