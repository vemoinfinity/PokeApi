import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/userName.slice';
import axios from 'axios';

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [character, setCharacter] = useState("");
  const getRandomInt = Math.floor(Math.random() * 1279);
  useEffect(() => {
    const getRandomCharacter = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${getRandomInt}&limit=1`);
        const characterUrl = response.data.results[0]?.url;
        setCharacter(characterUrl);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomCharacter();
  }, []);

  const submit = (data) => {
    dispatch(changeName(data.name));
    navigate("/characters");
  };

  return {
    character,
    submit
  };
};

export default useLogin;
