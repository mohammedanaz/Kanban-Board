import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './dragDiv.css'

export default function Task({tasks}) {

  function handleDeleteTask(){

  }

  function handleEditTask(){

  }
  return (
    <div>
      {tasks.map((task, index)=>(
        <Draggable draggableId={task.id.toString()} key={task.id} index={index}>
          {(provided, snapshot)=>(
            <div
              ref={provided.innerRef}
              className= {`dragDiv d-flex border rounded-1 bg-info mb-1 mx-2 p-3 
                  ${snapshot.isDragging ? 'bg-info-subtle' : 'bg-info'} `}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              >
                <div className='flex-grow-1'>
                  {task.task}
                </div>
                <div className='d-flex flex-column'>
                  <button className='btn' onClick={handleDeleteTask}><i className="bi bi-trash"></i></button>
                  <button className='btn' onClick={handleEditTask}><i className="bi bi-pencil-square"></i></button>
                </div>
            </div>
          )}
        </Draggable>
      ))}
    </div>
  )
}
