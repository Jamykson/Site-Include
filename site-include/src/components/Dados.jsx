import '../css/Dados.css'

export default props => {
    return (
        <section className='dados-section' id="">
            <div className="dados">
                <p className='texto-experiencia'>
                    <span className='dados-texto'>10</span>
                    <span className='dados-titulo'> anos</span>
                </p>
                <p className='dados-titulo'> de Experiência</p>
            </div>
            <div className="dados">
                <p className='dados-texto'>+ de 50</p>
                <p className='dados-titulo'>Projetos Realizados</p>

            </div>
            <div className="dados">
                <p className='dados-texto'>+ de 100</p>
                <p className='dados-titulo'>Clientes Impactados</p>

            </div>
        </section>
    );
}