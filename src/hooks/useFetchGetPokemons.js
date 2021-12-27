import { useState, useEffect } from "react";

export const useFetchGetPokemons = () => {
    const [state, setState] = useState({
        pokemons: []
    });

    useEffect(() => {
        handleGetPokemons();
    }, []);

    const handleGetPokemons = async () => {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
        const resp = await fetch(apiUrl);
        const { results } = await resp.json();

        setState({
            pokemons: results
        });
    }

    return state;
} 