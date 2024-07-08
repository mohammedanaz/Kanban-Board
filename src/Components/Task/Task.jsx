import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './dragDiv.css'

export default function Task({tasks}) {

  return (
    <div>
      {tasks.map((task, index)=>(
        <Draggable draggableId={task.id.toString()} key={task.id} index={index} isDragDisabled={false}>
          {(provided, snapshot)=>(
            <div
              ref={provided.innerRef}
              className='dragDiv border rounded-1 bg-info mb-1 mx-2' 
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              >
              {task.task}
            </div>
          )}
        </Draggable>
      ))}
    </div>
  )
}
