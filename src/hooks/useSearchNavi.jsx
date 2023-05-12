import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeLocation } from '../store/slices/locations.slice'
import { changePokeName } from '../store/slices/pokeName.slice';
const useSearchNavi = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const searchName = (data) => {
    dispatch(changePokeName(data.name))
    navigate(`/charactersdetail`)
  }
  const searchLocation = (locationUrl) => {
    dispatch(changeLocation(locationUrl))
    navigate(`/Areas/`)
  }
  const pokeDetails = (pokename) => {
    dispatch(changePokeName(pokename))
    navigate(`/charactersdetail/`)
  }
  return {
    searchName,
    searchLocation,
    pokeDetails
  }
};

export default useSearchNavi;