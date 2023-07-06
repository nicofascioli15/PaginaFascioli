import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'


const Layout = () => {
  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
            <Outlet/>
        </main>

        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default Layout