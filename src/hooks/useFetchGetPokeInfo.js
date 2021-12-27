import { useState, useEffect } from "react";

export const useFetchGetPokeInfo = (pokemon) => {
    const [state, setState] = useState({
        images: []
    });

    useEffect(() => {
        handleGetPokeInfo();
    }, [pokemon]);

    const handleGetPokeInfo = async () => {
        const pokeUrl = pokemon.url;
        const resp = await fetch(pokeUrl);
        const data = await resp.json();

        setState({
            images: data
        });
    }

    return state;
}