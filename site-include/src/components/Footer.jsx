import '../css/Footer.css'
import React from 'react'

import copyright from '../assets/copyright.svg'
import imgInsta from '../assets/imgInstagram.svg'
import imgWhats from '../assets/imgWhats.svg'
import logoBranca from '../assets/logoBranca.svg'
import imgLinkedin from "../assets/imgLinkedin.svg"

export default props => {
  return (
    <footer className='Footer' id='orcamento'>
        <main className='main'>
            <div className='box-logo'>
                <img src={logoBranca}/>
            </div>
            <div className='box-contatos'>
                <div className='box-redes'>
                    <a className="btn-redes" href="https://wa.me/5584994336511/"><img src={imgWhats}/></a>
                    <a className="btn-redes" href="https://www.instagram.com/engenhariainclude/"><img src={imgInsta}/></a>
                    <a className="btn-redes" href="https://www.linkedin.com/company/engenhariainclude"><img src={imgLinkedin}/></a>
                </div>
                <div className="contatos">
                    <h3>Endereço</h3>
                    <p>
                        Centro de Tecnologia - S/N - Campus 
                        Universitário, Lagoa Nova - Natal/RN
                    </p>
                </div>
                <div className="contatos">
                    <h3>Contato</h3>
                    <p>(84) 99433-6511</p>
                </div>
                <div className="contatos">
                    <h3>E-mail</h3>
                    <p>comercial@include.ct.ufrn.br</p>
                </div>
            </div>
        </main>
        <div className='cr'>
            <img src={copyright}/>
        </div>
    </footer>
  )
}