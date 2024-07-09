import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage.jsx"
import LoginPage from "./Pages/LoginPage/LoginPage.jsx"
import SignUpPage from "./Pages/SignUpPage/SignUpPage.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
