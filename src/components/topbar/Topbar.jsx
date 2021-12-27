import React from 'react';
import './topbar.css';
import {
    Link
} from 'react-router-dom';

export const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarContainerWrapper">
                <div className="topbarLeft">
                    <Link to="/" style={{ textDecorationLine: "none" }}>
                        <div className="topbarLogo">
                            Poké<img className="pokeImg" src="assets/img/pokeball.png" alt="pokeball" />Wiki
                        </div>
                    </Link>
                </div>

                <div className="topbarRight">
                    <ul className="topbarMenu">
                        <Link to="/" style={{ textDecorationLine: "none" }}>
                            <li>Homepage</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
