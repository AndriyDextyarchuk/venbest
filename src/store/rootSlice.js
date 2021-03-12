import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk(
    'root/getUsers',
    async () => {
        return fetch('https://venbest-test.herokuapp.com/')
            .then( res => res.json())
    }
)


export const rootSlice = createSlice({
    name: 'root',
    initialState: {
        users: [],
        status: null,
        searchUser: []
    },
    reducers: {
        getUserByName: (state, {payload}) => {
            if (payload === '')  {
                state.searchUser = state.users
            } else {
                const arr = []
                for (let value of state.users){
                    if (value.name.toLowerCase().includes(payload.toLowerCase())) arr.push(value);
                }
                state.searchUser = arr
            }
        },
        getUserByLastName: (state, {payload}) => {
            if (payload === '')  {
                state.searchUser = state.users
            } else {
                const arr = []
                for (let value of state.users){
                    if (value.lastname.toLowerCase().includes(payload.toLowerCase())) arr.push(value);
                }
                state.searchUser = arr
            }
        },
        getUserByAge: (state, {payload}) => {
            if (payload === '')  {
                state.searchUser = state.users
            } else {
                const arr = []
                for (let value of state.users){
                    if (value.age === Number(payload)) arr.push(value);
                }
                state.searchUser = arr
            }
        },
        getMaleUser: (state, {payload}) => {
            console.log(payload)
            if (!payload)  {
                state.searchUser = state.users
            } else {
                const arr = []
                for (let value of state.users){
                    if (value.sex === 'm') arr.push(value);
                }
                state.searchUser = arr
            }
        },
        getFemaleUser: (state, {payload}) => {
            console.log(payload)
            if (!payload)  {
                state.searchUser = state.users
            } else {
                const arr = []
                for (let value of state.users){
                    if (value.sex === 'f') arr.push(value);
                }
                state.searchUser = arr
            }
        },
    },
    extraReducers: {
        [getUsers.pending]: state => void(state.status = 'loading'),
        [getUsers.fulfilled]: (state, {payload}) => {
            state.users = payload
            state.searchUser =payload
            state.status = 'success'
        },
        [getUsers.rejected]: state => void(state.status = 'failed'),
    }
})

export const reducer = rootSlice.reducer

export const {getUserByName, getUserByLastName, getUserByAge, getMaleUser, getFemaleUser} = rootSlice.actions