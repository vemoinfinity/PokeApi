import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const usePokeApi = (url) => {
  const pokemon = useSelector(state => state.pokeName);

  const [pokeunits, setPokeUnits] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [pagnext, setPagNext] = useState("");
  const [pagpre, setPagPre] = useState("");
  const [countup, setCountUp] = useState(42);
  const [countdo, setCountDo] = useState(0);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=42`)
      .then(res => {
        setCharacters(res.data.results);
        setPagNext(res.data.next);
      });
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281`)
      .then(res => setSearchTerm(res.data.results));
    axios.get(`https://pokeapi.co/api/v2/location/`)
      .then(res => setLocationList(res.data.results));
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => setPokeUnits(res.data));
  }, [pokemon]);

  const pagenext = () => {
    if (countup < 1280) {
      axios.get(pagnext)
        .then(res => {
          setCharacters(res.data.results);
          setPagPre(res.data.previous);
          setPagNext(res.data.next);
        });
      setCountUp(countup + 42);
      setCountDo(countdo + 42);
    } else {
      alert('Error: No hay más páginas');
    }
  };

  const pageprev = () => {
    if (countdo > 0) {
      axios.get(pagpre)
        .then(res => {
          setCharacters(res.data.results);
          setPagNext(res.data.next);
          setPagPre(res.data.previous);
        });
      setCountUp(countup - 42);
      setCountDo(countdo - 42);
    } else {
      alert('Error: No hay más páginas');
    }
  };

  const urlpokeunits = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  return {
    characters,
    locationList,
    pagenext,
    pageprev,
    countup,
    countdo,
    searchTerm,
    pokeunits,
    urlpokeunits
  };
};

export default usePokeApi;
