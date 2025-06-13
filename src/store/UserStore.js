import {configureStore, createSlice} from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: undefined,
        email: undefined,
        firstName: undefined,
        lastName: undefined,
        createdAt: undefined,
        updatedAt: undefined,
    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
        clearUser: (state) => {
            state.id = undefined;
            state.email = undefined;
            state.firstName = undefined;
            state.lastName = undefined;
            state.createdAt = undefined;
            state.updatedAt = undefined;
        }
    },
})

export const {setUser, clearUser} = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
})
