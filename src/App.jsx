import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage.jsx"
import LoginPage from "./Pages/LoginPage/LoginPage.jsx"
import SignUpPage from "./Pages/SignUpPage/SignUpPage.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
