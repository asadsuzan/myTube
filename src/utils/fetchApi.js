const axios = require("axios");
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  // ac 1 
  // headers: {
  //   'X-RapidAPI-Key': 'c262d06d25msha938c3115e9550fp1d6ab5jsn92d0c22f4575',
  //   'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  // }
  // ac 2 
  // headers: {
  //   'X-RapidAPI-Key': '76cd51ba13mshaf019b76af739bap14f963jsn5110538dc487',
  //   'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  // }
  // ac 3 
  // headers: {
  //   'X-RapidAPI-Key': '89ce1d78cbmsh24c34c292d30862p1178acjsn122273aaca7a',
  //   'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  // }
  // ac 4 
  // headers: {
  //   'X-RapidAPI-Key': 'f5f2ceaf79msheafb0223347e5d8p104cadjsnb928e4214e69',
  //   'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  // }
    // ac 5
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  }
};

 const fetchApi = async(url) =>{
 

  try{
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data
  }catch(e){
    window.alert(`Sorry, You have exceeded the DAILY quota for Request on your current plan, BASIC. Please try after 24 hours `)
   
  }


 }
 export default fetchApi