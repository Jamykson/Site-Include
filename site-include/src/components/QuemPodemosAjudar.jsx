import '../css/QuemPodemosAjudar.css'

import Startup from '../assets/accelerate-svgrepo-com.svg'
import Company from '../assets/company-svgrepo-com.svg'
import Junior from '../assets/brasil_junior.svg'

export default props => {
    return (
        <section className='QuemPodemosAjudar'>
            <h2 className='titulo-ajuda'>Quem podemos ajudar?</h2>
            <div className='podemos-ajudar'>
                <div className='div-junior'>
                    <img src={Startup} alt='Startups' className='imagem-ajuda'></img>
                    <p className='descricao-ajuda'> Startups</p>
                </div>
                <div className='div-junior'>
                    <img src={Company} alt='Microempresas' className='imagem-ajuda'></img>
                    <p className='descricao-ajuda'> Microempresas</p>
                </div>
                <div className='div-junior'>
                    <img src={Junior} alt='Empresas Juniores' className='imagem-ajuda-junior' ></img>
                    <p className='descricao-ajuda'> Empresas Juniores</p>
                </div>
            </div>
        </section>
    );
}