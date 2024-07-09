import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

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
            state[action.payload.colId] = action.payload.reorderedList
        },
        crossColumnDrag : (state, action)=>{
            const {
                sourceColId,destinationColId, sourceIndex, destinationIndex
            } = action.payload
            const sourceList = state[sourceColId]
            const destinationList = state[destinationColId]
            console.log(current(state[sourceColId]), 'and', current(state[destinationColId]));

            const [removed] = sourceList.splice(sourceIndex,1)
            destinationList.splice(destinationIndex, 0, removed)
            
            console.log(current(state[sourceColId]), 'and', current(state[destinationColId]));
        },
        updateSrNumber: (state, action)=>{
            state.srNumber = action.payload.newSr
        },
        addNewTodo: (state, action)=>{
            state.todo.push(action.payload)
        }
    }
})

export const {sameColumnDrag, crossColumnDrag, updateSrNumber, addNewTodo} = kanbanSlice.actions
export default kanbanSlice.reducer