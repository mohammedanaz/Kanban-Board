import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpPage() {
  return (
    <div className='parentDiv d-flex justify-content-center align-items-center vh-100'>
        <div className='col-10 col-md-6 h-50 bg-info-subtle rounded-5 p-4'>
            <h2 className='text-center'>Sign Up Page</h2>
            <input type="text" className='form-control mb-4'
                placeholder='Enter User Name' 
            />
            <input type="password" className='form-control mb-4'
                placeholder='Enter Password' 
            />
            <input type="password" className='form-control mb-4'
                placeholder='Confirm Password' 
            />
            <button className='btn btn-outline-primary w-100 mb-4'>Creat Account</button>
            <p>If existing user please  
                <span><Link to='/login'> Click Here to login</Link></span>
            </p>
        </div>
    </div>
  )
}
