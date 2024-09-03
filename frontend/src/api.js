import axios from "axios";

export async function getCountries(id) {
    const response = await axios.get(`${URL}/countryNames/${id}`)
    if (response.status === 200) {
      return response.data
    } else {
        return 
    }
  
}