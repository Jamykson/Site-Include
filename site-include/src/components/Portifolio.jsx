import '../css/Portifolio.css'
import React from 'react'

import CardPortifolio from './CardPortifolio'

export default  props => {
    return( 
        <section className='Portifolio' id="portifolio">
            <div className="titulo">
                <h1>Portfólio</h1>
            </div>
            <div className="main">
                <CardPortifolio/>
                <CardPortifolio/>
                <CardPortifolio/>
                <CardPortifolio/>
                <CardPortifolio/>
                <CardPortifolio/>
                <CardPortifolio/>
                <CardPortifolio/>
                <CardPortifolio/>
            </div>
        </section>
    );
}