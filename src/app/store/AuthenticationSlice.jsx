import { createSlice, configureStore } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        value: ''
    },
    reducers: {
        setToken: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setToken } = authenticationSlice.actions

const store = configureStore({
    reducer: authenticationSlice.reducer
})