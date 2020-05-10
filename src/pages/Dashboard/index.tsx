import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard:React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`)
    console.log(response.data);
  }
  return (
  <>
  <img src = {logoImg} alt = "Github Explorer"/>
  <Title>Explore repositórios no Github</Title>

  <Form onSubmit={handleAddRepository}>
    <input
    value = {newRepo}
    onChange = {e => setNewRepo(e.target.value)}
    placeholder= "Digite o nome do repositório"
    />
    <button type="submit">Pesquisar</button>
  </Form>

  <Repositories>
  <a href= "#">
    <img src="#" alt="#"/>
    <div>
      <strong>Scrunner</strong>
      <p>Projeto bem legal</p>
    </div>
    <FiChevronRight size ={ 20 }/>
  </a>


  </Repositories>

  </>
)
};


export default Dashboard;
