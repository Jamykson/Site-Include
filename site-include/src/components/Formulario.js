import React, { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    nome_da_empresa: '',
    telefone: '',
    o_que_voc_busca: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const query = `
      mutation {
        createCard(input: {
          pipe_id: ${process.env.REACT_APP_PIPE_ID},
          fields_attributes: [
            { field_id: "nome", field_value: "${formData.nome}" },
            { field_id: "nome_da_empresa", field_value: "${formData.nome_da_empresa}" },
            { field_id: "telefone", field_value: "${formData.telefone}" },
            { field_id: "o_que_voc_busca", field_value: "${formData.o_que_voc_busca}" }
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
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Resposta do Pipefy:', response.data);
      alert('Formulário enviado com sucesso!');
      setFormData({ nome: '', nome_da_empresa: '', telefone: '', o_que_voc_busca: '' });
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar o formulário.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" required value={formData.nome} onChange={handleChange} />
      <input type="text" name="nome_da_empresa" placeholder="Nome da Empresa" required value={formData.nome_da_empresa} onChange={handleChange} />
      <input type="tel" name="telefone" placeholder="Telefone" required value={formData.telefone} onChange={handleChange} />
      <textarea name="o_que_voc_busca" placeholder="O que você busca?" required value={formData.o_que_voc_busca} onChange={handleChange}></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
