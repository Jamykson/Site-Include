import '../css/NossosValores.css'
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaCompass, FaPaw } from "react-icons/fa";
import { GiWolfHead } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";

export default props => {
    return (
        <section className='valores-section' id="valores">
            <p className='valores-titulo'>Conheça os nossos valores</p>
            <div className='card-section'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <FaHandshakeAngle className='valores-icone'/>
                            <p>Responsabilidade Social</p>
                        </div>
                        <div className="flip-card-back">
                            <p>Todas as nossas ações visam o bem da sociedade na qual vivemos, ou seja, nossas ações estimulam a cidadania</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <GiWolfHead className='valores-icone'/>
                            <p>Uivar com o MEJ</p>
                        </div>
                        <div className="flip-card-back">
                            <p>A Include Engenharia vive o MEJ, participando de eventos, ações e projetos em colaboração com a rede</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <FaCompass className='valores-icone'/>
                            <p>Liderança Proativa</p>
                        </div>
                        <div className="flip-card-back">
                            <p>Na Include, apoiamos e incentivamos qualquer pessoa a agir como líder e não necessariamente precisamos delegar alguém para isso</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <IoIosRocket className='valores-icone'/>
                            <p>Executar para Impactar</p>
                        </div>
                        <div className="flip-card-back">
                            <p>Nossas ações geram impacto dentro e fora da EJ, promovendo inclusão digital e, às vezes, impacto ambiental positivo</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <FaPaw className='valores-icone'/>
                            <p>Ser Alcateia</p>
                        </div>
                        <div className="flip-card-back">
                            <p>Temos uma cultura sólida e valorizamos quem a mantém viva. Trabalhamos em equipe e também valorizamos momentos de diversão juntos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}