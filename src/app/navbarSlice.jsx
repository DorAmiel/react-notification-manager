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
            let lastId = state.notifications[state.notifications.length-1].id

            state.notifications.push({
                id: lastId + 1,
                msg: action.payload.message
            })
        },
        removeNotificationById:(state,action)=>{
            let notificationId = action.payload.id
            let filteredList = state.notifications.filter(item => item.id !== notificationId)
            state.notifications = [...filteredList]
        }
    },
})

export const { addNotification, removeNotificationById } = navbarSlice.actions

export default navbarSlice.reducer