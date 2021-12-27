import React from 'react';
import { Articles } from '../articles/Articles';
import './feed.css';

export const Feed = ({ pokemons, setPokePageUrl }) => {
    return (
        <div className="feedContainer">
            <div className="feedContainerWrapper">
                <div className="feedArticles">
                    {pokemons.map(item => (
                        <Articles key={item.name} pokemon={item} setPokePageUrl={setPokePageUrl} />
                    ))}
                </div>
            </div>
        </div>
    )
}
