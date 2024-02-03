import axios from "axios";

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com"

const apiKey = import.meta.env.VITE_API_KEY


const options = {
    params: {geo: 'US', lang: 'en', },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };


export const getData = async (path) => {
    try{
        const response = await axios.get(path,options)
        return response.data
    }catch(err){
        console.log(err);
    }
}