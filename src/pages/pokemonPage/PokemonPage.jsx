import React from 'react';
import { Topbar } from '../../components/topbar/Topbar';
import { useFetchPagePokeInfo } from '../../hooks/useFetchPagePokeInfo';
import './pokemonpage.css';

export const PokemonPage = ({ pokemonUrl }) => {
    const { pokeInfo, pokeSprites } = useFetchPagePokeInfo(pokemonUrl);

    const handlePokeImgAvatar = (e) => {
        let pokeImgAvatar = document.querySelector('.pokeImgAvatar');
        let srcPokeImg = e.target.src;

        pokeImgAvatar.src = srcPokeImg;
    }

    return (
        <>
            <Topbar />

            <div className="pokePageContainer">

                <div className="pokeInfoCard">
                    <div className="pokeInfoCardTop">
                        <h2>{pokeInfo?.name}</h2>
                    </div>

                    <div className="pokeInfoCardCenter">
                        <div className="pokeAbilities">
                            <h2>Abilities</h2>

                            <ul>
                                {pokeInfo?.abilities?.map(ability => (
                                    <li key={ability.ability.name}>{ability.ability.name}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="pokeImgContainer">
                            <img
                                src={pokeInfo?.sprites?.front_default}
                                alt=""
                                className="pokeImgAvatar"
                            />
                        </div>

                        <div className="pokeStats">
                            <h2>Stats</h2>

                            <ul>
                                {pokeInfo?.stats?.map(stat => (
                                    <li key={stat.stat.name}><span className="statName">{stat.stat.name}</span> <span className="statValue">{stat.base_stat}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    <div className="pokeInfoCardBottom">
                        <div className="pokeSprites">
                            <div className="pokeSpriteImgContainer">
                                {pokeSprites?.map(sprite => (
                                    <img onClick={handlePokeImgAvatar.bind()} key={sprite.length} src={sprite} className="pokeSpriteImg" alt={sprite} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
