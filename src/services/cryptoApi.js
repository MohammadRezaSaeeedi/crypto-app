const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY ="x_cg_demo_api_key=CG-Ei6K19TSGiEBG2w7SG4fbivD";

const getCoinList = (page) => {
    return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale-en&${API_KEY}`
}
export { getCoinList };