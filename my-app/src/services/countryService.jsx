import supabase from '../supabaseclient';
import countryList from '../App';

export const fetchCountries = async () => {
  try {
    const { data, error } = await supabase
      .from('countries') 
      .select('name'); 

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return []; 
  }
};

export const addCountry = async () => {
    try {
      const {data, error} = await supabase
      .from('countries')
      .insert([
        {name: 'Sweeden'},
      ])
    } catch (error) {
      console.log(error)
    }
  }

export const rmCountry = async () => {
  try {
  const {data, error} = await supabase
    .from('countries')
    .delete()
  }
  catch(error){
    console.log(error)
  }
}

