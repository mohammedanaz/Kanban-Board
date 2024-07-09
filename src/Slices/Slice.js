import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
    srNumber: 0,
    todo: [],
    inprogress: [],
    completed: [],
    users: [],
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
        },
        changeIsEditable: (state, action)=>{
            state[action.payload.colId].find((item)=> item.id === action.payload.taskId).isEditable = true;
        },
        saveEditedTask: (state, action)=>{
            state[action.payload.colId].find((item)=> item.id === action.payload.taskId).task = action.payload.newTask;
            state[action.payload.colId].find((item)=> item.id === action.payload.taskId).isEditable = false;
        },
        deleteTask: (state, action)=>{
            console.log('inside delete task reducer');
            const newState = state[action.payload.colId].filter((item)=> item.id !== action.payload.taskId)
            state[action.payload.colId] = newState
        },
        createUser: (state, action)=>{
            state.users = action.payload
            console.log('users is- ', state.users);
        }
    }
})

export const {
    sameColumnDrag, 
    crossColumnDrag, 
    updateSrNumber, 
    addNewTodo,
    changeIsEditable,
    saveEditedTask,
    deleteTask,
    createUser
} = kanbanSlice.actions
export default kanbanSlice.reducer