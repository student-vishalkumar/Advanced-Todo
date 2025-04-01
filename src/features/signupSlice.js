import { createSlice } from "@reduxjs/toolkit";

const SignUpUsers = JSON.parse(localStorage.getItem('users')) || [];

const initialState = {
    users: SignUpUsers,
    error: null
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        signup: (state, action) => {

            const {username, password, email} = action.payload;
            const isUserPresent = state.users.find((user) => user.email === email);
            if(isUserPresent) {
                state.error = "User is already registered";
                return;
            }
            
            const newUser = {id: state.users.length + 1, username: username, email: email, password: password};
            state.users.push(newUser);

            localStorage.setItem('users', JSON.stringify(state.users));

            state.error = null;
        }
    }
})

export const { signup } = signupSlice.actions;

export default signupSlice.reducer;