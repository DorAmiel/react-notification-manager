import { createSlice } from '@reduxjs/toolkit'


export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        notifications: [
            {
                id: 1,
                msg: `There is a new message for you!`
            },
            {
                id: 2,
                msg: `There is brand new message for you!`

            }
        ]
    },
    reducers: {
        addNotification: (state, action) => {
            state.notifications.push(action.payload)
        }
    },
})

export const { addNotification } = navbarSlice.actions

export default navbarSlice.reducer