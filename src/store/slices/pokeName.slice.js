import { createSlice } from '@reduxjs/toolkit';


export const pokeNameSlice = createSlice({
		name: 'pokeName',
    initialState: "",
    reducers: {
      changePokeName:(state,action)=>{
        const pokeName = action.payload
        return pokeName
      }
        }
    }
)

export const { changePokeName } = pokeNameSlice.actions;

export default pokeNameSlice.reducer;