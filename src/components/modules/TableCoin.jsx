import React from 'react'
import TableRow from './TableRow'
import {Vortex} from "react-loader-spinner"
import styles from "./TableCoin.module.css"
function TableCoin({ coins,isLoading }) {
  return (
    <div className={styles.container}>
        {isLoading?(
            <Vortex />
        ) :(
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Coin</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>Total Volume</th>
                    <th></th>
                </tr>
                </thead>
            <tbody>
                {coins.map(coin => 
                <TableRow coin={coin} key={coin.id} />)}
            </tbody>
        </table>
        )}
    </div>
  )

}

export default TableCoin