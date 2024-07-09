import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './dragDiv.css'
import {changeIsEditable, saveEditedTask, deleteTask} from '../../Slices/Slice'
import { useDispatch } from 'react-redux'

export default function Task({tasks, colId}) {
  const [inputText, setInputText] = useState({})
  const dispatch = useDispatch()

  function handleInputChange(e, taskId){
    setInputText((prevInput)=>(
      {...prevInput,[taskId]: e.target.value})
    ) 
  }

  function handleChangeIsEditable(taskId, colId){
    dispatch(changeIsEditable({taskId:taskId, colId: colId}))
  }

  function handlesaveEditedTask(taskId, colId, task){
    if(inputText[taskId] !== undefined){
      dispatch(saveEditedTask({taskId:taskId, colId: colId, newTask: inputText[taskId]}))
    }
    else{
      dispatch(saveEditedTask({taskId:taskId, colId: colId, newTask: task}))
    }

    setInputText((prevInput)=>(
      {...prevInput,[taskId]: null})
    )
  }

  function handleDeleteTask(taskId, colId){
    dispatch(deleteTask({taskId:taskId, colId: colId}))
  }

  return (
    <div>
      {tasks.map((task, index)=>(
        <Draggable draggableId={task.id.toString()} key={task.id} index={index}>
          {(provided, snapshot)=>(
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              >
                {
                  task.isEditable ? 
                  (
                    <div className='dragDiv  border rounded-1 bg-info mb-1 mx-2 p-3'>
                      <textarea className='form-control' 
                      onChange={(e)=>handleInputChange(e, task.id)} 
                      value={inputText[task.id] ?? task.task}
                      />
                       <br />
                      <button className='btn btn-light' 
                        onClick={()=> handlesaveEditedTask(task.id, colId, task.task)}>
                        Save
                      </button>
                    </div>
                  ) 
                  :(
                    <div className= {`dragDiv d-flex border rounded-1 bg-info mb-1 mx-2 p-3 
                      ${snapshot.isDragging ? 'bg-info-subtle' : 'bg-info'} `}>
                      <div className='flex-grow-1'>
                        {task.task}
                      </div>
                      <div className='d-flex flex-column'>
                        <button className='btn' onClick= {()=> handleDeleteTask(task.id, colId)}>
                          <i className="bi bi-trash"></i>
                        </button>
                        {(colId!=='completed') && 
                        <button className='btn' onClick={()=>handleChangeIsEditable(task.id, colId)} disabled={colId==='completed'}>
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        }
                      </div>
                    </div>
                  )
                }
                
            </div>
          )}
        </Draggable>
      ))}
    </div>
  )
}
