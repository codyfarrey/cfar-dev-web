import { createSlice, configureStore } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        isAUthenticated: false
    },
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAUthenticated = true;
        }
    }
})

export const { setToken } = authenticationSlice.actions

const store = configureStore({
    reducer: authenticationSlice.reducer
})