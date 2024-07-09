import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from '../Column/Column'
import './KanbanBoard.css'
import { useSelector, useDispatch } from 'react-redux'
import {sameColumnDrag, crossColumnDrag, updateSrNumber, addNewTodo} from '../../Slices/Slice'

const tempItems = [
  {id:1 , task:'task-1'},
  {id:2 , task:'task-2'},
  {id:3 , task:'task-3'},
]

export default function KanbanBoard() {
  const [inputText, setInputText] = useState('')
  const srNumber = useSelector((state)=> state.kanban.srNumber)
  const todo = useSelector((state)=> state.kanban.todo)
  const inprogress = useSelector((state)=> state.kanban.inprogress)
  const completed = useSelector((state)=> state.kanban.completed)
  const dispatch = useDispatch()

  function handleChange(e){
    setInputText(e.target.value)
  }

  function handleClick(){
    if(inputText !== ''){
      const newSr = srNumber + 1;
    const newTodoObj = {id:newSr, task:inputText}
    dispatch(updateSrNumber({newSr:newSr}))
    dispatch(addNewTodo(newTodoObj))
    setInputText('')
    }
    else{
      window.alert('Type todo before add.')
      return
    }
  }

  function reorder(arr, startIndex, endIndex){
    const newArr = Array.from(arr)
    const [removedItem] = newArr.splice(startIndex,1)
    newArr.splice(endIndex, 0, removedItem)
    return newArr
  }

  function handleDragEnd(result){
    if(result.source.droppableId === 'completed' && result.destination.droppableId !== 'completed' ){
      console.log('inside source cant be completed condition');
      return
    }
    else if(!result.destination){
      console.log('inside destination null condition');
      return
    }
    else if(result.source.droppableId === result.destination.droppableId){
      let reorderedList = []
      if(result.source.droppableId === 'todo'){
        reorderedList = reorder(todo, result.source.index, result.destination.index)
      }
      else if(result.source.droppableId === 'inprogress'){
        reorderedList = reorder(inprogress, result.source.index, result.destination.index)
      }
      else{
        reorderedList = reorder(completed, result.source.index, result.destination.index)
      }
      
      dispatch(sameColumnDrag({reorderedList: reorderedList, colId: result.source.droppableId}))
    }
    else{
      const sourceColId = result.source.droppableId
      const destinationColId = result.destination.droppableId
      const sourceIndex = result.source.index
      const destinationIndex = result.destination.index
      dispatch(crossColumnDrag({
        sourceColId: sourceColId,
        destinationColId: destinationColId,
        sourceIndex: sourceIndex,
        destinationIndex: destinationIndex,
      }))
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className='kanbanDiv d-flex flex-column align-items-center pb-5 pt-3'>
        <h1 className='text-center text-primary'>Kanban Board</h1>
        <br />
        <div className='input-group rounded-3 mb-2 w-75 bg-info-subtle'>
          <input className='form-control my-2 ms-2' type="text" 
          placeholder='Enter Todo'
           onChange={handleChange}
           value={inputText}
           />
          <button className='btn btn-primary my-2 me-2' type='button' onClick={handleClick}>
            Add Todo
          </button>
        </div>
        <div className='d-flex flex-column flex-md-row justify-content-between w-75'>
          <Column title="Todo"  id='todo' tasks = {todo} />
          <Column title="Inprogress"  id='inprogress' tasks = {inprogress} />
          <Column title="Completed"  id='completed' tasks = {completed} />
        </div>
      </div>
    </DragDropContext>
  )
}
