import axios from "axios";

const URL = "http://localhost:3000"

export async function getCountries() {
    const response = await axios.get(`${URL}/countryNames`)
    if (response.status === 200) {
      return response.data
    } else {
        return 
    }
  
}