import React from "react";

import "./styles.css";
import "./App.css";
import Repositories from './components/Repositories';

function App() {
  // async function handleAddRepository() {
  //   // TODO
  // }

  // async function handleRemoveRepository(id) {
  //   // TODO
  // }

  return (
    <div>
      <h1>Lista de Projetos</h1>
      <ul data-testid="repository-list">
        <Repositories/>
        {/* <li>
          <Projects/>

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li> */}
      </ul>

      {/* <button onClick={handleAddRepository}>Adicionar</button>  */}

 
    </div>
  );
}

export default App;
