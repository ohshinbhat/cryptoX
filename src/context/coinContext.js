import axios from 'axios';

const getAllCurrencies = async (vsCurrency) => {
  const apiLink1 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  const response = await axios.get(apiLink1);
  return response.data;
}

const getAllExchanges = async() =>{
  const apiLink2 = `https://api.coingecko.com/api/v3/exchanges`;
  const response = await axios.get(apiLink2);
  return response.data;
}


const getAllNews = async() =>{
  const options = {
    method: 'GET',
    url: 'https://crypto-news16.p.rapidapi.com/news/top/20',
    headers: {
      'X-RapidAPI-Key': 'e7e88df7d5mshfc64d57dade1f5cp19c7cajsnbfb285320d55',
      'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
    }
  };
  const response = await axios.request(options);
  return response.data;
};


export {getAllCurrencies, getAllExchanges, getAllNews};