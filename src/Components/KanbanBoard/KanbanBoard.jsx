import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from '../Column/Column'
import { useSelector, useDispatch } from 'react-redux'
import {sameColumnDrag, updateSrNumber, addNewTodo} from '../../Slices/Slice'

const tempItems = [
  {id:1 , task:'task-1'},
  {id:2 , task:'task-2'},
  {id:3 , task:'task-3'},
]

export default function KanbanBoard() {
  const [inputText, setInputText] = useState('')
  const srNumber = useSelector((state)=> state.kanban.srNumber)
  const todo = useSelector((state)=> state.kanban.todo)
  const dispatch = useDispatch()

  function handleChange(e){
    setInputText(e.target.value)
  }

  function handleClick(){
    const newSr = srNumber + 1;
    const newInputObj = {id:newSr, task:inputText}
    dispatch(updateSrNumber({newSr:newSr}))
    dispatch(addNewTodo(newInputObj))
    setInputText('')
  }

  function reorder(arr, startIndex, endIndex){
    const newArr = Array.from(arr)
    const [removedItem] = newArr.splice(startIndex,1)
    newArr.splice(endIndex, 0, removedItem)
    return newArr
  }

  function handleDragEnd(result){
    if(result.source.dropableId === result.destination.dropableId){
      const reorderedTodo = reorder(todo, result.source.index, result.destination.index)
      dispatch(sameColumnDrag(reorderedTodo))
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className='d-flex flex-column align-items-center'>
        <h1 className='text-center text-primary'>Kanban Board</h1>
        <br />
        <div className='border rounded-3 my-2 w-75'>
          <input className='m-2 w-75' type="text" 
          placeholder='Enter Todo'
           onChange={handleChange}
           value={inputText}
           />
          <button className='btn btn-primary m-2' onClick={handleClick}>
            Add Todo
          </button>
        </div>
        <div className='d-flex justify-content-between w-75'>
          <Column title="Todo"  id='col-1' tasks = {todo} />
        </div>
      </div>
    </DragDropContext>
  )
}
