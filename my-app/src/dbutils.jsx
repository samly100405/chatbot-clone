// import { useEffect } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { generateCountryListItems } from "./listUtils";

// const supabase = createClient("https://hysenuwitqywqyzxxtbw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5c2VudXdpdHF5d3F5enh4dGJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4MTk5MjUsImV4cCI6MjA0MDM5NTkyNX0.GpaMeuHNAeCY5upyFXzr7J_1-QARYxkOXwJG7AcmDFo");

// function app() {

// const Test = () => {
//   const [countries, setCountries] = useState([]);
// }


// useEffect(() => {
//   getCountries();
// }, []);



// async function getCountries() {
//   const { data } = await supabase.from("countries").select();
//   setCountries(data);
// }

// const addCountry = async () => {
//     try {
//       const {data, error} = await supabase
//       .from('countries')
//       .insert([
//         {name: 'Denmark'},
//       ])
//     } catch (error) {
//       console.log(error)
//     }
//   }

// const rmCountry = async () => {
//     try {
//       const {data, error} = await supabase
//       .from('countries')
//       .delete()
//       .eq('id', 75)
//     } catch (error) {
//       console.log(error)
//     }
//   }

// }


export default app
