import { useState, useEffect } from "react"
import { pokemon1 } from "./pokemon1";
import './carta.css';
import './global.css';
import './lista.css';
import './reset.css';
import './responsivo.css';
import './styles.css';
import logo from '../imgs/logo.svg';
import insta from '../imgs/instagram.svg';
import linkedin from '../imgs/linkedin.svg';
import github from '../imgs/github.svg';
function Pokedex() {
    console.log(pokemon1)

    function playSound() {
        var sound = document.getElementById("audio");
        sound.play();
        audio.volume = 0.05;
    }
    const [llista, setLlista] = useState(pokemon1);

    let filas = llista.map(pokemon =>

        <tr className="parent">

            <audio id="audio" src="sounds/effect.mp3" autoPlay="false" />
            <li onClick={playSound} className="pokemon activo" id={pokemon.bulbasaur}>
                <img />
                <span>{pokemon.bulbasaur}</span>
            </li>



            <div className="pokedex">
                <div className="cartas-pokemon">
                    <div className="carta-pokemon tipo-planta abierto" id={pokemon.Nombre} >
                        <div className="carta-top">
                            <div className="detalles">
                                <h2 className="name">{pokemon.Nombre}</h2>
                                <span>{pokemon.pokedex}</span>
                            </div>
                            <span className="tipo">{pokemon.tipo}</span>
                            <div className="carta-imagen">
                                <img src={pokemon.img} alt={pokemon.Nombre} />
                            </div>
                        </div>
                        <div className="carta-informacion">
                            <div className="status">
                                <h3>Preevolución</h3>
                                <p id="evol">{pokemon.Preevolucion}</p>
                            </div>
                            <div className="habilidades">
                                <h3>Descripcion</h3>
                                <p>
                                    {pokemon.Descripcion}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </tr>


    )
    return (
        <>
            <main>

                <nav className="listagem">
                    <ul id="ul1">
                        {filas}
                    </ul>
                    </nav>
                    <div className="gens">
                        <h1 className="header__logo">
                            <img src={logo} alt="Pokedex" />
                        </h1>
                        <ul className="button">
                            <button className="gen">Gen 1</button>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                <path
                                    fill="none"
                                    d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
                                />
                            </svg>
                        </ul>
                        <ul className="button">
                            <a className="gen" href="pokedex2.html">
                                Gen 2
                            </a>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                <path
                                    fill="none"
                                    d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
                                />
                            </svg>
                            <br />
                        </ul>
                    </div>
            </main>
            <footer>
                <ul className="header__nav">
                    <li>
                        <a className="icons" href="https://github.com/" target="_blank">
                            <img src={github} alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a className="icons" href="https://www.linkedin.com/" target="_blank">
                            <img src={linkedin} alt="Linkedin" />
                        </a>
                    </li>
                    <li>
                        <a className="icons" href="https://www.instagram.com/" target="_blank">
                            <img src={insta} alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </footer>

        </>
    )
}

export default Pokedex;