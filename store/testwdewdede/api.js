import axios from "axios"
import {
  TESTWDEWDEDE_USERNAME,
  TESTWDEWDEDE_PASSWORD
} from "react-native-dotenv"
const testwdewdede = axios.create({
  baseURL: "https://cbtcms.herokuapp.com/runs/2927/?",
  auth: { username: TESTWDEWDEDE_USERNAME, password: TESTWDEWDEDE_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
