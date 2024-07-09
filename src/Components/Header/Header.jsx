import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='header d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-end w-50 border rounded-3'>
            <Link to='/login' className='fs-4 mx-4 text-white'>Logout</Link>
        </div>
    </div>
  )
}
