import React from 'react'
import Navbar from '../compents/navbar'
import Banner from '../compents/Banner'
import Freebook from '../compents/freebook'
import Footer from '../compents/footer'

function Home() {
      return (
            <>
            <div className='dark:bg-slate-900 dark:text-white'>
                  <Navbar />
                  <Banner />
                  <Freebook />
                  <Footer />
            </div>

            </>
      )
}

export default Home
