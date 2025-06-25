import '../css/Footer.css'
import React from 'react'

import copyright from '../assets/copyright.svg'
import imgFace from '../assets/imgFace.svg'
import imgInsta from '../assets/imgInstagram.svg'
import imgWhats from '../assets/imgWhats.svg'
import logoBranca from '../assets/logoBranca.svg'

export default props => {
  return (
    <footer className='Footer' id='orcamento'>
        <main className='main'>
            <div className='box-logo'>
                <img src={logoBranca}/>
            </div>
            <div className='box-contatos'>
                <div className='box-redes'>
                    <button className="btn-redes"><img src={imgWhats}/></button>
                    <button className="btn-redes"><img src={imgInsta}/></button>
                    <button className="btn-redes"><img src={imgFace}/></button>
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
                    <p>(84) 98718-8553</p>
                </div>
                <div className="contatos">
                    <h3>E-mail</h3>
                    <p>include.engenharia@gmail.com</p>
                </div>
            </div>
        </main>
        <div className='cr'>
            <img src={copyright}/>
        </div>
    </footer>
  )
}