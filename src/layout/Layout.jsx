import React from 'react'
import styles from "./Layout.module.css"

function Layout({children}) {
  
  return (
   <>
    <header className={styles.header}>
        <h1>Crypto App</h1>
        <p><a href="https://mohammadrezasaeeedi.github.io/crypto=app">Phoenix | Programmer</a></p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by Mohammadreza with 🤍</p>
    </footer>
    </>
  )
}

export default Layout