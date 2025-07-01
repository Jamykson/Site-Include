import '../css/Home.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'
import img from '../assets/logoB.png'
import imgC1 from '../assets/imagem1.jpg'
import imgC2 from '../assets/imagem2.jpg'
import imgC3 from '../assets/imagem3.jpg'
import Footer from './Footer';

export default props => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {

            const bolls = document.querySelectorAll('.boll');
            const slides = document.querySelectorAll('.slide');

            bolls[selectedIndex].classList.remove('selected');
            slides[selectedIndex].classList.remove('on');

            const nextIndex = (selectedIndex + 1) % bolls.length;

            bolls[nextIndex].classList.add('selected');
            slides[nextIndex].classList.add('on');

            setSelectedIndex(nextIndex);

        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, [selectedIndex]);

    return (
        <section className='Home' id='home'>
            <div className='main'>
                <div className='t-home'>
                    <div className='texto'>
                        <p>Bem-vindos a include,</p>
                        <h1><span>Inovação </span>que gera</h1>
                        <h1><span>resultados reais</span></h1>
                    </div>
                    <Link
                        to="formulario"
                        spy={true}
                        smooth={true}
                        offset={-window.innerHeight / 2 + 250}
                        duration={500}
                        className="budget">
                        <button className='btn'>Faça já seu orçamento</button>
                    </Link>
                </div>
                <div className='carrosel'>
                    <div className="slides">
                        <div className={`slide ${selectedIndex === 0 ? 'on' : ''}`}>
                            <img src={imgC1} />
                        </div>
                        <div className={`slide ${selectedIndex === 1 ? 'on' : ''}`}>
                            <img src={imgC2} />
                        </div>
                        <div className={`slide ${selectedIndex === 2 ? 'on' : ''}`}>
                            <img src={imgC3} />
                        </div>
                    </div>

                    <div className='e-1'></div>
                    {/* <div className='e-2'></div> */}
                    {/* <div className='e-3'></div> */}
                </div>
            </div>
            <div className="bolls">
                <div className={`boll ${selectedIndex === 0 ? 'selected' : ''}`} onClick={() => setSelectedIndex(0)}></div>
                <div className={`boll ${selectedIndex === 1 ? 'selected' : ''}`} onClick={() => setSelectedIndex(1)}></div>
                <div className={`boll ${selectedIndex === 2 ? 'selected' : ''}`} onClick={() => setSelectedIndex(2)}></div>
            </div>
        </section >
    )
}