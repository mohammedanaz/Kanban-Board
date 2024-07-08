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
            console.log('sameColumnDrag action is - ', action);
            state.todo = action.payload;
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