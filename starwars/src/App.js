import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Character from './Character';

const starwarsApi = 'https://swapi.co/api/people/';
const backupApi = 'https://lambda-github-api-server.herokuapp.com/';

console.log(starwarsApi);

function App () {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [stars, setStars] = useState([]);

  useEffect(() => {
    axios.get(backupApi)
    .then(response => {
      setStars(response.data.results)
    })
    .catch(error =>{
      console.log('hysteric chewbacca laugh', error);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Character array={stars}/>
    </div>
  );
}

export default App;
