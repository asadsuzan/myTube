const axios = require("axios");
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  // headers: {
  //   'X-RapidAPI-Key': 'c262d06d25msha938c3115e9550fp1d6ab5jsn92d0c22f4575',
  //   'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  // }
  headers: {
    'X-RapidAPI-Key': '76cd51ba13mshaf019b76af739bap14f963jsn5110538dc487',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

 const fetchApi = async(url) =>{
  try{
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data
  }catch(e){
    window.alert(`Sorry, you have reached max limits. 500 request/Day. Please try after 24 hours `)
   
  }


 }
 export default fetchApi