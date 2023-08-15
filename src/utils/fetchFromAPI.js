import axios from 'axios';

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = { // options for axios request to youtube api v3
  url: BASE_URL,
  params: {
    // part: 'snippet',
    // videoId: 'M7FIvfx5J10'
    part:'snippet',
    q:'New',
    maxResults: '50',
  },
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // api key stored in .env file
    'X-RapidAPI-Key': '2742923bc5msh6c8a67892e39828p17ec2djsn3700d8f21407',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com' // api host
  }
};

export const fetchFromAPI = async (url) => {
  // const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  // const { data } = await axios.get(`${BASE_URL}}`, options)
  const { data } = await axios.get(BASE_URL, options)
  console.log(data)
  return data;
}