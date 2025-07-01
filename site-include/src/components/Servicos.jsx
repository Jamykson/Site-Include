import '../css/Servicos.css'
import { useState, useRef } from 'react';

import img1 from '../assets/imgServProgramacao.svg'
import img2 from '../assets/imgServWifi.svg'
import img3 from '../assets/imgServAutomacao.svg'

export default props => {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleItem = (index) => {
        const el = contentRefs.current[index];

        if (!el) return;

        if (activeIndex === index) {
            // recolher
            el.style.maxHeight = `${el.scrollHeight}px`; // define o tamanho atual para começar a animação
            requestAnimationFrame(() => {
                el.style.maxHeight = '0px';
                el.style.opacity = '0';
            });
            setActiveIndex(null);
        } else {
            // expandir
            if (contentRefs.current[activeIndex]) {
                contentRefs.current[activeIndex].style.maxHeight = '0px';
                contentRefs.current[activeIndex].style.opacity = '0';
            }
            el.style.maxHeight = `${el.scrollHeight}px`;
            el.style.opacity = '1';
            setActiveIndex(index);
        }
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
                <p>Nossos serviços</p>
            </div>
            <div className="box-serv">
                {listaServicos.map((servico, index) => (
                    <div className="servico" key={index}>
                        <div className="servico-header" onClick={() => toggleItem(index)}>
                            <h3 className="tituloServ">{servico.titulo}</h3>
                            <span className={`toggleIcon ${activeIndex === index ? 'rotated' : ''}`}>+</span>
                        </div>
                        <div
                            className="descServ"
                            ref={(el) => (contentRefs.current[index] = el)}
                        >
                            <p>{servico.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}