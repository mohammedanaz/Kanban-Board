import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    srNumber: 0,
    todo: [],
    inprogress: [],
    completed: [],
}

const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        sameColumnDrag : (state, action)=>{
            
            if(action.payload.colId === 'todo'){
                state.todo = action.payload.reorderedList
            }
            else if(action.payload.colId === 'inprogress'){
                state.inprogress = action.payload.reorderedList
            }
            else{
                state.completed = action.payload.reorderedList
            }
        },
        updateSrNumber: (state, action)=>{
            state.srNumber = action.payload.newSr
        },
        addNewTodo: (state, action)=>{
            state.todo.push(action.payload)
        }
    }
})

export const {sameColumnDrag, updateSrNumber, addNewTodo} = kanbanSlice.actions
export default kanbanSlice.reducer