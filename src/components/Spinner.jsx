import React from 'react'
import "./Spinner.css"
const Spinner =() => {
  return (
    <div className=' flex  flex-col justify-center items-center align-middle'>
    <div className='loader'></div>
    <div>Loading...</div>
    </div>
  )
}

export default Spinner
