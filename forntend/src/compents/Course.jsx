import React from 'react'
import list from '../../public/list.json'
import Card from './Card'
import { Link } from 'react-router-dom'
function Course() {
  return (
  <>
      <div className='max-w-screen-3xl containermx-auto md:px-20 py-4'>
              <div className='mt-28 item-center justify-item-center text-center'>
                <h1 className='text-2xl  md:tet-4xl'>We're delighted to have you <span className='text-pink-500'>Here!</span> : )</h1>
                <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure itaque optio repellat ex impedit labore, earum illo, veritatis id provident perspiciatis obcaecati officiis accusamus blanditiis ullam aliquam nihil atque doloribus placeat fugit! Quos deserunt, tempora facere, quae labore provident ullam eligendi, inventore quasi dolores adipisci voluptas nulla aut. Provident, vero.</p>
                <Link to ="/">
                <button className='mt-6 bg-pink-500 rounded text-white px-4 py-2 hover:bg-pink-600 duration-300' >Back</button>
                </Link>
              </div>
              <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                  list.map((item)=>(
                    <Card key={item.id} item={item}/>
                  ))
                }
              </div>
      </div>
  </>
  )
}

export default Course
