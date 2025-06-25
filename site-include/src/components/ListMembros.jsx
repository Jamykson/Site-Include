import '../css/ListMembros.css';
import React, { useRef } from 'react';
import CardMembros from './CardMembros';
import seta from '../assets/seta.svg'

const ListMembros = () => {
  const boxMembrosRef = useRef(null);

  const moveCarrosselLeft = () => {
    if (boxMembrosRef.current) {
      const boxMembrosWidth = boxMembrosRef.current.offsetWidth;
      boxMembrosRef.current.scrollLeft -= boxMembrosWidth + 15;
    }
  };

  const moveCarrosselRight = () => {
    if (boxMembrosRef.current) {
      const boxMembrosWidth = boxMembrosRef.current.offsetWidth;
      boxMembrosRef.current.scrollLeft += boxMembrosWidth + 15;
    }
  };

  return (
    <section className='ListMembros' id='membros'>
      <div className="titulo">
        <h1>Membros</h1>
      </div>
      <div className="carrosel">
        
        <button onClick={moveCarrosselLeft}><img src={seta}/></button>
        
        <div className='box-membros' ref={boxMembrosRef}>
          <CardMembros/>
          <CardMembros/>
          <CardMembros/>
          <CardMembros/>
          <CardMembros/>
          <CardMembros/>
          <CardMembros/>
          <CardMembros/>
          <CardMembros/>
          <CardMembros/>
          <CardMembros/>
          <CardMembros/>
        </div>
        
        <button onClick={moveCarrosselRight}><img src={seta}/></button>
        
      </div>
    </section>
  );
};

export default ListMembros;
