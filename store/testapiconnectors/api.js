import axios from "axios"
import {
  TESTAPICONNECTORS_USERNAME,
  TESTAPICONNECTORS_PASSWORD
} from "react-native-dotenv"
const testapiconnectors = axios.create({
  baseURL: "https://cbtcms.herokuapp.com/runs/2927/?",
  auth: {
    username: TESTAPICONNECTORS_USERNAME,
    password: TESTAPICONNECTORS_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
