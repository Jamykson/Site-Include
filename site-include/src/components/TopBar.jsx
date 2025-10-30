import React, { useState } from "react";
import { Link } from 'react-scroll'
import '../css/TopBar.css';

import Logo from '../assets/logo.svg'

export default props => {

    const [clickedMenu, setClickedMenu] = useState(false);

    const alternarClasse = () => {
        setClickedMenu(!clickedMenu);
    };

    const fecharMenu = () => {
        setClickedMenu(false);
    };

    return (
        <header className={clickedMenu ? 'TopBar on' : 'TopBar'}>
            <div className="header">
                <div className="Logo">
                    <img src={Logo} />
                </div>
                <button onClick={alternarClasse} className="menuH">
                    <div className={clickedMenu ? 'barra on' : 'barra'}></div>
                    <div className={clickedMenu ? 'barra on' : 'barra'}></div>
                    <div className={clickedMenu ? 'barra on' : 'barra'}></div>
                </button>
            </div>
            <nav className={clickedMenu ? 'box-nav clicked' : 'box-nav'}>
                <ul>
                    <li>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight / 2 + 150}
                            duration={500}
                            onClick={fecharMenu}
                        >HOME</Link>
                    </li>
                    <li>
                        <Link
                            to="quemSomos"
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight / 2 + 150}
                            duration={500}
                            onClick={fecharMenu}
                        >QUEM SOMOS</Link>
                    </li>
                    <li>
                        <Link
                            to="servicos"
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight / 2 + 250}
                            duration={500}
                            onClick={fecharMenu}
                        >SERVIÇOS</Link>
                    </li>

                    <li>
                        <Link
                            to="projetos" 
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight / 2 + 300}
                            duration={500}
                            onClick={fecharMenu}
                        >PROJETOS</Link>
                    </li>

                    <li>
                        <Link
                            to="valores"
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight / 2 + 300}
                            duration={500}
                            onClick={fecharMenu}
                        >NOSSOS VALORES</Link>
                    </li>
                    <li>
                        <Link
                            to="formulario"
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight / 2 + 250}
                            duration={500}
                            className="budget"
                            onClick={fecharMenu}
                        >Orçamento</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}