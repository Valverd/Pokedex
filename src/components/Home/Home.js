import { useEffect, useState } from 'react';
import api from '../../Services/api';

export default function Home() {

    const [pokemons, setPokemons] = useState(null);

    useEffect(() => {
        api.get('/pokemon?limit=151').then(res => {
            setPokemons(res.data.results);
        });
    }, []);


    return pokemons ? (
        <div>
            {
                pokemons.map((pokemon, i) => {
                    let id = i + 1;
                    let icon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                    return (
                        <div key={i}>
                            <p>{pokemon.name}</p>
                            <img src={icon} alt={pokemon.name} />
                        </div>
                    )
                })
            }
        </div>
    ) : 
    
    <div></div>
}