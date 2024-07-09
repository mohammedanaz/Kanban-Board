import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({username}) {

  return (
    <div className='header d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-between w-50 border rounded-3'>
          <h2 className='mx-4 text-white'>Welcome - {username ? username : 'Guest'}</h2>
          <Link to='/login' className='fs-4 mx-4 text-white'>Logout</Link>
        </div>
    </div>
  )
}
