import React, { useState } from 'react';
import axios from 'axios';
import '../css/Diagnostico.css';

const Diagnostico = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    busca: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'telefone') {
      // Permitir apenas números
      const onlyNumbers = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: onlyNumbers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const query = `
      mutation {
        createCard(input: {
          pipe_id: ${import.meta.env.VITE_PIPE_ID},
          fields_attributes: [
            {field_id: "nome", field_value: ${JSON.stringify(formData.nome)}},
            {field_id: "nome_da_empresa", field_value: ${JSON.stringify(formData.empresa)}},
            {field_id: "telefone", field_value: ${JSON.stringify(formData.telefone)}},
            {field_id: "o_que_voc_busca", field_value: ${JSON.stringify(formData.busca)}}
          ]
        }) {
          card {
            id
          }
        }
      }
    `;
  
    try {
      const response = await axios.post(
        'https://api.pipefy.com/graphql',
        { query },
        { headers: { Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}` } }
      );
  
      console.log('Resposta do Pipefy:', response.data);
      alert('Formulário enviado com sucesso!');
      setFormData({ nome: '', empresa: '', telefone: '', busca: '' }); 
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar o formulário.');
    }
  };
  
  return (
    <section className='Diagnostico' id='diagnostico'>
      <div className='texto'>
        <h1>Faça agora um <span> diagnóstico</span></h1>
      </div>
      <div className="texto">
        <h1><span>gratuito </span>do seu site!</h1>
      </div>
      <div className="box-consultor">
        <button className="btn">Fale com nosso consultor</button>
      </div>

      {/*Formulário*/}
      <div className="form-container" id='formulario'>
        <h2>Solicite um contato da nossa equipe</h2>
        <form className="diagnostico-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Seu nome</label>
            <input type="text" id="nome" name="nome" placeholder="Digite o seu nome" required value={formData.nome} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="empresa">Nome da empresa</label>
            <input type="text" id="empresa" name="empresa" placeholder="Digite o nome da empresa" required value={formData.empresa} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" required value={formData.telefone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="busca">O que você busca?</label>
            <textarea id="busca" name="busca" placeholder="Descreva sua necessidade" required value={formData.busca} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="btn-enviar">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Diagnostico;
