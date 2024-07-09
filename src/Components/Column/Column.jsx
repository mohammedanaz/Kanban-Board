import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from '../Task/Task'
import './Column.css'

export default function Column({title, tasks, colId}) {

  return (
    <div className='colDiv border rounded-3 bg-info-subtle mb-3'>
      <h2 className='text-center'>{title}</h2>
      <hr />
      <Droppable droppableId={colId}>
        {(provided, snapshot)=>(
          <div
          className='dropDiv py-4 bg-info mb-3'
          ref={provided.innerRef}
          {...provided.droppableProps}
          >
            <Task tasks={tasks} colId={colId}/>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
