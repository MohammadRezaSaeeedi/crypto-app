const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY ="x_cg_demo_api_key=CG-Ei6K19TSGiEBG2w7SG4fbivD";

const getCoinList = (page , currency) =>  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale-en&${API_KEY}`;


const searchCoin = (query) => `${BASE_URL}/search?query=${query}&x-cg-demo-api-key=${API_KEY}`;

const marketChart = (coin) => `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;
export { getCoinList , searchCoin , marketChart }; 