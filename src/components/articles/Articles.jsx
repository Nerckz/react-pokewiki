import React from 'react';
import { useFetchGetPokeInfo } from '../../hooks/useFetchGetPokeInfo';
import './articles.css';
import {
    Link
} from 'react-router-dom';

export const Articles = ({ pokemon, setPokePageUrl }) => {
    const { images } = useFetchGetPokeInfo(pokemon);

    const setPokeUrl = () => {
        setPokePageUrl(pokemon);
    }

    return (
        <Link onClick={setPokeUrl} to='/pokeinfo' style={{ textDecorationLine: "none" }}  >
            <div className="articlesContainer">
                <h2 className="pokeName">{pokemon.name}</h2>
                <img src={images.sprites?.front_default} alt="" className="pokeImage" />
            </div>
        </Link>
    )
}
