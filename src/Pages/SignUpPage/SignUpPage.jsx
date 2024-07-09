import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUser } from '../../Slices/Slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function SignUpPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const users = useSelector((state)=> state.kanban.users)
    const dispatch = useDispatch()

    function handleUsernameInput(e){
        setUsername(e.target.value)
    }
    function handlePasswordInput(e){
        setPassword(e.target.value)
    }
    function handleConfirmPasswordInput(e){
        setConfirmPassword(e.target.value)
    }
    function handleCreateUser(){
        const user = users.find((user)=> user.username === username)
        if(user){
            window.alert('This username already exist. Please try another.')
            return
        }
        if(password !== confirmPassword){
            window.alert('Password and confirm password not same.')
            return
        }
        
        const newUser = {username: username, password: password}
        const updatedUser = [...users, newUser]
        dispatch(createUser(updatedUser))
        setUsername('')
        setPassword('')
        setConfirmPassword('')
    }

  return (
    <div className='parentDiv d-flex justify-content-center align-items-center vh-100'>
        <div className='col-10 col-md-6 h-50 bg-info-subtle rounded-5 p-4'>
            <h2 className='text-center'>Sign Up Page</h2>
            <input type="text" className='form-control mb-4'
                placeholder='Enter User Name' 
                value={username}
                onChange={(e)=> handleUsernameInput(e)}
            />
            <input type="password" className='form-control mb-4'
                placeholder='Enter Password' 
                value={password}
                onChange={(e)=> handlePasswordInput(e)}
            />
            <input type="password" className='form-control mb-4'
                placeholder='Confirm Password' 
                value={confirmPassword}
                onChange={(e)=> handleConfirmPasswordInput(e)}
            />
            <button className='btn btn-outline-primary w-100 mb-4'
                onClick={handleCreateUser}
                >
                Creat Account
            </button>
            <p>If existing user please  
                <span><Link to='/login'> Click Here to login</Link></span>
            </p>
        </div>
    </div>
  )
}
