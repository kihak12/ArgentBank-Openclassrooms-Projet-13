import {configureStore, createSlice} from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: undefined,
        password: undefined,
        firstName: undefined,
        lastName: undefined,
    },
    reducers: {
        setUser: (state, action) => {
            state.email = action.email;
            state.password = action.password;
            state.firstName = action.firstName;
            state.lastName = action.lastName;
        },
        clearUser: (state) => {
            state.email = undefined;
            state.password = undefined;
            state.firstName = undefined;
            state.lastName = undefined;
        }
    },
})

export const {setUser, clearUser} = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
})
