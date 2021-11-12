import {createSlice} from '@reduxjs/toolkit';

export const scrapedData = createSlice({
    name: 'scrapedData',
    initialState: {
        value: { data: {} },
    },
    reducers: {
        setScrapedData: (state, action) => {
            state.value = action.payload;
        },
    },
});


export const { setScrapedData } = scrapedData.actions;
export const getScrapedData = (state) => state.scrapedData.value;

export default scrapedData.reducer;
