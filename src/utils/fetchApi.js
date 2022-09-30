const axios = require("axios");
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '500'
  },
  headers: {
    'X-RapidAPI-Key': 'c262d06d25msha938c3115e9550fp1d6ab5jsn92d0c22f4575',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

 const fetchApi = async(url) =>{
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data

 }
 export default fetchApi