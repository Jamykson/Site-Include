import '../css/Dados.css'

export default  props => {
    return( 
        <section className='dados-section' id="">
            <div className="dados">
                <p className='dados-titulo'>Anos <br></br>de Experiência</p>
                <p className='dados-texto'>+7</p>
            </div>
            <div className="dados">
                <p className='dados-titulo'>Projetos<br></br> Realizados</p>
                <p className='dados-texto'>+200</p>
            </div>
            <div className="dados">
                <p className='dados-titulo'>Clientes<br></br> Impactados</p>
                <p className='dados-texto'>+100</p>
            </div>
        </section>
    );
}