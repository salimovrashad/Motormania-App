import React from 'react'
import { Link } from 'react-router-dom'

const SuccessPage = () => {
  return (
        <div className='center column'>
            <h1>Payment Successfull</h1>
            <img src="https://www.caaz.co.zw/wp-content/uploads/2023/01/success.gif" alt="" />
            <Link to="/home" className='btn btn-success px-5'>HOME</Link>
        </div>
  )
}

export default SuccessPage