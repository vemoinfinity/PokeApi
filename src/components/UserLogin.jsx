import React from 'react';
import { useState } from 'react';
import {useSelector , useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {changeName} from '../store/slices/userName.slice'
import { useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
 
const UserLogin = () => {
  const [userName, setUserName]=useState("")
  const usersName =useSelector(state=>state.userName)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const dispacthUserName = ()=>{
    dispatch(changeName(userName))
    navigate("/characters")
  }
  const [character, setCharacter] = useState("")
  const getRandomInt=Math.floor(Math.random() * 1279 )
  useEffect(() => { 
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${getRandomInt}&limit=1`)
    .then(res => setCharacter(res.data.results[0]?.url))
  }, [])

  return (
    <div>
      <h1>Welcome To Pokedex</h1>
      {character && <div>
        <CharacterCard url={character}/>
        </div>}
        <h1>ingresa tu nombre para revisar el catalogo de pokemons</h1>
      <h2>{usersName}</h2>
      <input type="text"
      vale={userName}
      onChange={e => setUserName(e.target.value)}></input>
      <button onClick={dispacthUserName}>send</button>
    </div>
  );
};

export default UserLogin;