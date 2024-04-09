import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const idofTodo = action.payload;
     return  state=state.filter(item => item.id != idofTodo);
    },
    deleteAllTodo: (state) => {
      return state = [];
    },
  },
});

export const { addTodo, deleteTodo,deleteAllTodo } = todoSlice.actions;
export default todoSlice.reducer;
