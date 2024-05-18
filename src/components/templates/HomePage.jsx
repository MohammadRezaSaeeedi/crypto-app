import React, { useEffect, useState } from 'react'

import { getCoinList } from '../../services/cryptoApi';
import TableCoin from "../modules/TableCoin";
import Pagination from '../modules/Pagination';
import Search from '../modules/Search';
import Chart from '../modules/Chart';





function HomePage() {
const [coins,setCoins] = useState([]);
const [isLoading,setIsLoading] = useState(true);
const [page,setPage] = useState(1);
const [currency , setCurrency] = useState("usd");
const [chart ,setChart] = useState(null);

    useEffect(() => {
      setIsLoading(true);
        fetch(getCoinList(page , currency))
        .then(res => res.json())
        .then(json => setCoins(json)).catch((error) => console.log(error))
        setIsLoading(false)
    },[page , currency])
  return (
    <div>
      <Search  currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} setChart={setChart} currency={currency} />
      <Pagination  page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} currency={currency} />}
      </div>
  )
}  

export default HomePage