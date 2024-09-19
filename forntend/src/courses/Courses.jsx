import React from 'react'
import Navbar from '../compents/navbar'
import Footer from '../compents/footer'
import Course from '../compents/Course'

function Courses() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
         <Course />
      </div>
      <Footer />
    </>
  )
}

export default Courses
