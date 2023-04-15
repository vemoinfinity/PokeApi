import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import { changeLocation } from '../store/slices/locations.slice'
import { Container, Pagination } from 'react-bootstrap';
import { changePokeName } from '../store/slices/pokeName.slice';

const Characters = () => {
  const name = useSelector(state => (state.userName))
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [nameInput, setNameInput] = useState("")
  const [characters, setCharacters] = useState([])
  const [locationList, setLocationList] = useState([])
  const [pagnext, setPagNext] = useState("")
  const [pagpre, setPagPre] = useState("")
  const [countup,setCountUp]= useState(40)
  const [countdo,setCountDo]= useState(0)
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40`)
      .then(res => setCharacters(res.data.results))
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40')
      .then(res => setPagNext(res.data.next))
    axios.get(`https://pokeapi.co/api/v2/location/`)
      .then(res => setLocationList(res.data.results))
  }, [])

  const pagenext = () => {

    if(countup<1280){
    axios.get(pagnext)
      .then(res => setCharacters(res.data.results))
    axios.get(pagnext)
      .then(res => setPagPre(res.data.previous))
    axios.get(pagnext)
      .then(res => setPagNext(res.data.next))
setCountUp(countup + 40)
setCountDo((countdo + 40))}
else{
  alert('erros ya no hay mas paginas')
}
  }
  const pageprev = () => {
    if(countdo>0){
    axios.get(pagpre)
      .then(res => setCharacters(res.data.results))
    axios.get(pagpre)
      .then(res => setPagNext(res.data.next))
    axios.get(pagpre)
      .then(res => setPagPre(res.data.previous))
      setCountUp(countup - 40)
setCountDo((countdo - 40))}
else{
alert('erros ya no hay mas paginas')}
  }

  const searchName = () => {
    dispatch(changePokeName(nameInput))
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
  return (
    <Container>
      <h1>welcome {name} </h1>
      
      <div>
        <input type="text"
          placeholder="buscar nombre"
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
        />
        <button onClick={searchName}>Search</button>
      </div>
      <div>
        <h3>buscar locaciones</h3>
        <select onChange={e => searchLocation(e.target.value)} >
          <option>Seleccionar</option>
          {locationList.map(location => (
            <option value={location.name} key={location.url}>{location.name}</option>
          ))}
        </select>
      </div>
      <Pagination>
        <Pagination.Prev onClick={pageprev} />
        <Pagination.Item active>Pokemons {countdo?countdo:1} to {countup} </Pagination.Item>
        <Pagination.Next onClick={pagenext} />
      </Pagination>
      {
        characters.map(character => (
          <div key={character.url ? character.url : character}
            onClick={() => pokeDetails(character.name)}  >
            <CharacterCard
              url={character.url ? character.url : character} />
          </div>
        ))
      }
    </Container>
  );
};

export default Characters;