import React from 'react'
import Header from '../../Components/Header/Header.jsx'
import KanbanBoard from '../../Components/KanbanBoard/KanbanBoard.jsx'
import { useLocation } from 'react-router-dom'

export default function HomePage() {
  const location = useLocation()
  const {username} = location.state

  return (
    <div>
      <Header username={username} />
      <KanbanBoard />
    </div>
  )
}
