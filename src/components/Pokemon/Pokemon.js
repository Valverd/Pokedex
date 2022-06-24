import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../Services/api";

export default function Pokemon() {

    const pokeID = useParams().id;
    const [pokemon, setPokemon] = useState(null);
    const icon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`;


    useEffect(() => {
        api.get('/pokemon/' + pokeID).then(res => {
            setPokemon(res.data);
        })
        console.log(pokemon);
    }, [])

    return pokemon && (
        <div className="pokemon-container">
            <h1 className="pokemon-title">{pokemon.name}</h1>
            <img className="pokemon-icon" alt={pokemon.name} src={icon} />
        </div>
    )
};