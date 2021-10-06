import React, {useEffect} from 'react';
import './App.css';
import PokemonInfo from "./Components/PokemonInfo";
import axios from 'axios';
import {useState} from 'react';

function App() {

  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {

  console.log("Test: Website is loading....")

  async function fetchData() {

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
      setPokemonData(response.data)
    }

    catch (e) {
      console.log("API ERROR: " + e)
    }
  }

  fetchData();

},[]);

  return (
    <div>
      <header>
        <img src="https://cdn.mos.cms.futurecdn.net/nJqzZf3iyhawJfofUMicFV-1200-80.jpg" alt="Pokemon logo"/>
      </header>
      <nav>
        <button className="prevBut" type="button">Previous</button>
        <button className="NxtBut" type="button">Next</button>
      </nav>

      <span className="page">{Object.keys(pokemonData).length > 0 &&
          <>
            <PokemonInfo pokemon={pokemonData.results[0].name}/>
            <PokemonInfo pokemon={pokemonData.results[1].name}/>
            <PokemonInfo pokemon={pokemonData.results[2].name}/>
            <PokemonInfo pokemon={pokemonData.results[3].name}/>
            <PokemonInfo pokemon={pokemonData.results[4].name}/>
            <PokemonInfo pokemon={pokemonData.results[5].name}/>
            <PokemonInfo pokemon={pokemonData.results[6].name}/>
            <PokemonInfo pokemon={pokemonData.results[7].name}/>
            <PokemonInfo pokemon={pokemonData.results[8].name}/>
            <PokemonInfo pokemon={pokemonData.results[9].name}/>
            <PokemonInfo pokemon={pokemonData.results[10].name}/>
            <PokemonInfo pokemon={pokemonData.results[11].name}/>
            <PokemonInfo pokemon={pokemonData.results[12].name}/>
            <PokemonInfo pokemon={pokemonData.results[13].name}/>
            <PokemonInfo pokemon={pokemonData.results[14].name}/>
            <PokemonInfo pokemon={pokemonData.results[15].name}/>
            <PokemonInfo pokemon={pokemonData.results[16].name}/>
            <PokemonInfo pokemon={pokemonData.results[17].name}/>
            <PokemonInfo pokemon={pokemonData.results[18].name}/>
            <PokemonInfo pokemon={pokemonData.results[19].name}/>
      </>
      }
      </span>

    </div>
  );
}

export default App;
