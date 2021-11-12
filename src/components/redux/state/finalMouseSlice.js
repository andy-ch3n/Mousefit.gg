import {createSlice} from '@reduxjs/toolkit';

export const finalMouse = createSlice({
    name: 'finalMouse',
    initialState: {
        value: { finalmouse: {} },
    },
    reducers: {
        setFinalMouse: (state, action) => {
            state.value = action.payload;
        },
    },
});


export const { setFinalMouse } = finalMouse.actions;
export const getFinalMouse = (state) => state.finalMouse.value;

export default finalMouse.reducer;
