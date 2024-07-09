import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { useSelector } from 'react-redux'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const users = useSelector((state)=> state.kanban.users)
    const navigate = useNavigate()

    function handleUsernameInput(e){
        setUsername(e.target.value)
    }
    function handlePasswordInput(e){
        setPassword(e.target.value)
    }
    function handleLogin(){
        const user = users.find((user)=> user.username === username)
        if(!user){
            window.alert('User does not exist. Please SignUp.')
            return
        }
        else if(user.password !== password){
            window.alert('Wrong password.')
            return
        }
        navigate('/home', {state: {username: username}})   
        setUsername('')
        setPassword('')
    }
  return (
    <div className='parentDiv d-flex justify-content-center align-items-center vh-100'>
        <div className='col-10 col-md-6 h-50 bg-info-subtle rounded-5 p-4'>
            <h2 className='text-center'>Login Page</h2>
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
            <button className='btn btn-outline-primary w-100 mb-4'
                onClick={handleLogin}
            >
                Login
            </button>
            <p>To sign up please 
                <span><Link to='/signUp'> Click Here</Link></span>
            </p>
        </div>
    </div>
  )
}
