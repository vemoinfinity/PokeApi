import { configureStore } from '@reduxjs/toolkit'
import  userNameSlice  from './slices/userName.slice'
import locationSlice  from './slices/locations.slice'
import pokeNameSlice from './slices/pokeName.slice'


export default configureStore({
  reducer: {
    userName :userNameSlice,
    location : locationSlice,
    pokeName : pokeNameSlice 
	}
})