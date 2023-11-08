import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'
const Layout = ({children}) => {
  return (
    <div className=''>
      <Head>
        <title>Meraki Detalles</title> 
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&family=Quicksand:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header/>
      <NavBar />
      
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
