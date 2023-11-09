import React from 'react'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'
const Layout = ({children}) => {
  return (
    <div>
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
