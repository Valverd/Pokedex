import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

            <h1>Pokedéx</h1>

            {
                pokemons.map((pokemon, i) => {
                    let id = i + 1;
                    let icon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                    return (
                        <Link key={i} className='poke-list' to={'/pokemon/' + id} style={{textDecoration: 'none'}}>
                            <p className='poke-list-name'>{pokemon.name}</p>
                            <img className='poke-list-icon' src={icon} alt={pokemon.name} />
                        </Link>
                    );
                })
            }

        </div>
    ) : 
    
    <div></div>
};