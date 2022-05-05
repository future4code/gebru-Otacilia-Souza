import axios from "axios"
import { BASE_URL } from "../constants/url"

  export const getCharacterList=(saveData)=>{
       axios.get(`${BASE_URL}/people/`)
       .then((response) => saveData(response.data.results))
       .catch((error) => console.log("erro", error.message))
   }
   

  export const getCharacterDateils = (url, saveData) => {
        
    axios.get(url)
        .then((response) => {saveData(response.data) })
        .catch((error) => console.log("erro", error.message))
}

export const getPlanetDatails = (url, saveData) => {
    axios.get(url)
        .then((response) => {saveData(response.data) })
        .catch((error) => console.log("erro", error.message))
}