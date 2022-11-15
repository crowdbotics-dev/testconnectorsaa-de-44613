import axios from "axios"
import {
  TESTWDEWDESAWDASDFGHSDEWDE_USERNAME,
  TESTWDEWDESAWDASDFGHSDEWDE_PASSWORD
} from "react-native-dotenv"
const testwdewdede = axios.create({
  baseURL: "https://cbtcms.herokuapp.com/runs/2927/?",
  auth: {
    username: TESTWDEWDESAWDASDFGHSDEWDE_USERNAME,
    password: TESTWDEWDESAWDASDFGHSDEWDE_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
