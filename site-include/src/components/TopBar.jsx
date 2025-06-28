import React, { useState } from "react";
import {Link} from 'react-scroll'
import '../css/TopBar.css';

import Logo from '../assets/logo.svg'

export default  props => {

    const [clickedMenu, setClickedMenu] = useState(false);

    const alternarClasse = () => {
        setClickedMenu(!clickedMenu);
    };

    return(
        <header className={clickedMenu ? 'TopBar on' : 'TopBar'}>
                <div className="header">
                    <div className="Logo">
                        <img src={Logo}/>
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
                                offset={-120} 
                                duration={500}
                            >HOME</Link>  
                        </li>
                        <li>
                            <Link 
                                to="quemSomos" 
                                spy={true} 
                                smooth={true} 
                                offset={-120} 
                                duration={500}
                            >QUEM SOMOS</Link>
                        </li>
                        <li>
                            <Link 
                               to="servicos" 
                                spy={true} 
                                smooth={true} 
                                offset={-120} 
                                duration={500}
                            >SERVIÇOS</Link>
                        </li>
                       
                        <li>
                            <Link 
                                to="valores" 
                                spy={true} 
                                smooth={true} 
                                offset={-200} 
                                duration={500}
                            >NOSSOS VALORES</Link>
                        </li>
                        <li>
                            <Link 
                                to="formulario" 
                                spy={true} 
                                smooth={true} 
                                offset={-120} 
                                duration={500} 
                                className="budget"
                            >Orçamento</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}