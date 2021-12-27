import React, { useState } from 'react';
import { Home } from './pages/home/Home';
import { PokemonPage } from './pages/pokemonPage/PokemonPage';
import { useFetchGetPokemons } from './hooks/useFetchGetPokemons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

export const App = () => {
    const { pokemons } = useFetchGetPokemons();
    const [pokePageUrl, setPokePageUrl] = useState([]);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home items={pokemons} setPokePageUrl={setPokePageUrl} />
                </Route>

                <Route exact path="/pokeinfo">
                    <PokemonPage pokemonUrl={pokePageUrl} />
                </Route>
            </Switch>
        </Router>
    )
}