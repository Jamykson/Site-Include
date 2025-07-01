import '../css/Servicos.css'
import { useState } from 'react';

import img1 from '../assets/imgServProgramacao.svg'
import img2 from '../assets/imgServWifi.svg'
import img3 from '../assets/imgServAutomacao.svg'

export default props => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const listaServicos = [
        {
            titulo: "Desenvolvimento web/mobile",
            descricao: "Softwares personalizados para dispositivos de acordo com as suas necessidades."
        },
        {
            titulo: "Manutenção de Sistemas",
            descricao: "Consultoria e soluções para melhorar o desempenho e a experiência de sistemas web e landing pages."
        },
        {
            titulo: "Automação residencial",
            descricao: "Projetos de automação para facilitar tarefas diárias, otimizando seu tempo."
        }
    ];

    return (
        <section className='Servicos' id="servicos">
            <div className="titulo">
                <h1>Nossos serviços</h1>
            </div>
            {/* <div className="box-serv">
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
            </div> */}
            <div className="box-serv">
                {listaServicos.map((servico, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <div className="servico" key={index}>
                            <div className="servico-header" onClick={() => toggleItem(index)}>
                                <h3 className="tituloServ">{servico.titulo}</h3>
                                <span className="toggleIcon">{isActive ? '×' : '+'}</span>
                            </div>
                            <div className={`descServ ${isActive ? 'active' : ''}`}>
                                <p>{servico.descricao}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}