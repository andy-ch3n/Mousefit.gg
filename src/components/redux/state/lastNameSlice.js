import {createSlice} from '@reduxjs/toolkit';

export const lastName = createSlice({
    name: 'lastName',
    initialState: {
        value: { lastname: 'lastName' },
    },
    reducers: {
        setLastName: (state, action) => {
            state.value = action.payload;
        },
    },
});


export const { setLastName } = lastName.actions;
export const getLastName = (state) => state.lastName.value;

export default lastName.reducer;