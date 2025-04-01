import { createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: []
}


const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log('ap', action.payload);
            const {task, priority} = action.payload;
            const NewTodo = {
                id: nanoid(),
                task: task,
                priority: priority
                
            }
            console.log('todo', NewTodo)
            
            state.todos.push(NewTodo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
            // console.log('Updated Todos:', JSON.parse(JSON.stringify(state.todos)))
        },

        removeTodo: (state, action) => {
            // const todos = JSON.parse(localStorage.getItem('todos'));
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            let userData = localStorage.getItem("user");
            // delete userData
            // console.log('updated todos', JSON.stringify(state.todos));
            localStorage.setItem('todos', JSON.stringify(state.todos));
            
        }
    }
})


export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer