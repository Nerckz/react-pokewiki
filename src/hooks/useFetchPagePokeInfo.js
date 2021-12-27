import { useState, useEffect } from "react";

export const useFetchPagePokeInfo = (pokemonUrl) => {
    const [state, setState] = useState({
        pokeInfo: [],
        pokeSprites: []
    });

    useEffect(() => {
        handlePokeInfoGet().then(data => {
            setState({
                pokeInfo: data,
                pokeSprites: [
                    data?.sprites?.back_default,
                    data?.sprites?.back_shiny,
                    data?.sprites?.front_default,
                    data?.sprites?.front_shiny,
                ]
            });
        });
    }, [pokemonUrl.url]);

    const handlePokeInfoGet = async () => {
        if (!pokemonUrl.url) {
            return document.write('No pokemon url found');
        }

        const pokeInfoUrl = pokemonUrl.url;
        const resp = await fetch(pokeInfoUrl);
        const data = await resp.json();

        return data;
    }

    return state;
}
