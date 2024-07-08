import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from '../Task/Task'

export default function Column({title, tasks, id}) {

  return (
    <div className='border rounded-3' style={{minWidth:'30%'}}>
      <h2 className='text-center'>{title}</h2>
      <hr />
      <Droppable droppableId={id}>
        {(provided, snapshot)=>(
          <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{minHeight:'50px'}}
          >
            <Task tasks={tasks}/>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
