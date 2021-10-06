import React, {useEffect} from 'react';
import axios from "axios";
import {useState} from "react";
import './PokemonInfo.css';

const PokemonInfo = ({pokemon}) => {

    const [pokemonData, setPokemonData] = useState({});

    useEffect( () => {

        async function getPokemon() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                console.log(response.data)
                setPokemonData(
                    {
                        name: response.data.name,
                        id: response.data.id,
                        imgURL: response.data.sprites.front_default,
                        abilities: response.data.abilities,
                        weight: response.data.weight,
                        numberOfMoves: response.data.moves.length,
                    }
                )
            }
            catch (e) {
                console.log("API ERROR: " + e);
            }
        }

            getPokemon();
    },[pokemon]);

    return (
        <div className="pokemonCard">
            {Object.keys(pokemonData).length > 0 &&
            <>
                <h3>{pokemonData.name}</h3>
                <img src={pokemonData.imgURL} alt={pokemonData.name}/>
                <h4>Moves: {pokemonData.numberOfMoves}</h4>
                <h4>Weight: {pokemonData.weight}</h4>

                <h4>Abilities:</h4>
            {pokemonData.abilities.map((pokemon) => {
                return <p key={pokemon.ability.name}>{pokemon.ability.name}</p>;
            }
                )
            }
                </>
            }
        </div>
    )
}

export default PokemonInfo;