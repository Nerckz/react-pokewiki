import React from 'react';
import { Feed } from '../../components/feed/Feed';
import { Topbar } from '../../components/topbar/Topbar';

export const Home = ({ items, setPokePageUrl }) => {
    return (
        <>
            <Topbar />
            <Feed pokemons={items} setPokePageUrl={setPokePageUrl} />
        </>
    )
}
