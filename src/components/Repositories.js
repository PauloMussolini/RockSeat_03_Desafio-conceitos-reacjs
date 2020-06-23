import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function Repositories(){

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        api.get('/repositories').then(response => {
            setRepositories(response.data);
        })
    }, [repositories]);

    async function handleAddRepository() {
        api.post('repositories',{
                id: "123",
                url: "https://github.com/josepholiveira",
                title: "Desafio ReactJS",
                techs: ["React", "Node.js"],
              })
      }
    
  async function handleRemoveRepository(id) {
                api.delete('/repositories/'+ id)
  }

    return (
        <div>
            <ul data-testid="repository-list">
                { repositories.map( 
                    repo => 
                    <li key={repo.id}>
                        {repo.title}
                        <button onClick={() => handleRemoveRepository(repo.id)}>
                            Remover
                        </button>                        
                    </li>) 
                
                }        
            </ul>
            <button onClick={handleAddRepository}>Adicionar</button>
        </div>
    )
}