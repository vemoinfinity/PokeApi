import { createSlice } from '@reduxjs/toolkit';


export const locationSlice = createSlice({
		name: 'location',
    initialState: "",
    reducers: {
      changeLocation:(state,action)=>{
        const location = action.payload
        return location
      }
        }
    }
)

export const { changeLocation } = locationSlice.actions;

export default locationSlice.reducer;