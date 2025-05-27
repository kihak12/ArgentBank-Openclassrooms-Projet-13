import {configureStore, createSlice} from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem('token') || sessionStorage.getItem('token') || undefined,
    },
    reducers: {
        setToken: (state, action) => {
            const token = decodeURI(action.payload.token)
            if (action.payload.remember) {
                localStorage.setItem('token', token)
            }else {
                sessionStorage.setItem('token', token)
            }
            state.token = token
        },
        clearToken: (state) => {
            state.token = undefined;
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
        }
    },
})

export const {setToken, clearToken} = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
})
