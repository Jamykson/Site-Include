import '../css/Servicos.css'
import React from 'react';

import img1 from '../assets/imgServProgramacao.svg'
import img2 from '../assets/imgServWifi.svg'
import img3 from '../assets/imgServAutomacao.svg'

export default  props => {
    return( 
        <section className='Servicos' id="servicos">
            <div className="titulo">
                <h1>Nossos serviços</h1>
            </div>
            <div className="box-serv">
                <div className="servico">
                    <div className='fotoServ'>
                        <img src={img1}/>
                    </div>
                    <div className='tituloServ'>
                        <h3>Desenvolvimento web/mobile</h3>
                    </div>
                    <div className='descServ'>
                        <p>Softwares personalizados para dispositivos 
                            de acordo com as suas necessidades.
                        </p>
                    </div>
                </div>
                <div className="servico">
                    <div className='fotoServ'>
                        <img src={img3}/>
                    </div>
                    <div className='tituloServ'>
                        <h3>Manutenção de Sistemas</h3>
                    </div>
                    <div className='descServ'>
                        <p>
                            Consultoria e soluções para 
                            melhorar o desempenho e a 
                            experiência de sistemas web e landing pages.
                        </p>
                    </div>
                </div>
                <div className="servico">
                    <div className='fotoServ'>
                        <img src={img3}/>
                    </div>
                    <div className='tituloServ'>
                        <h3>Automoção residencial</h3>
                    </div>
                    <div className='descServ'>
                        <p>
                            Projetos de automação para 
                            facilitar tarefas diárias, 
                            otimizando seu tempo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}