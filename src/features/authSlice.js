import { createSlice } from "@reduxjs/toolkit";


const signinUser = JSON.parse(localStorage.getItem('authUser'));
const initialState = {
    user: signinUser || null,
    isAuthenticated: !!signinUser,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin: (state, action) => {
            const { username, email, password } = action.payload;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const isUserPresent = users.find((user) => user.email === email && user.password === password);

            if(isUserPresent) {
                state.user = isUserPresent;
                state.isAuthenticated = true;
                console.log('user', isUserPresent, JSON.stringify(state.isAuthenticated));
                localStorage.setItem('authUser', JSON.stringify(isUserPresent));
                state.error = null;
            } else {
                state.error = "user details are correct",
                state.isAuthenticated = false,
                localStorage.removeItem('authUser');
            }
        },

        logOut: (action, payload) => {
            state.user = null;
            state.isAuthenticated = false,
            localStorage.removeItem('authUser');
        }
    }
})

export const {signin, logout} = authSlice.actions
export default authSlice.reducer

// 55fba01411044191b8441040250104