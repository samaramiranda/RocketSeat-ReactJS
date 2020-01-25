import React from 'react';
import Routes from './routes';

import './styles.css'; //importando os estilos globais


import Header from './components/Header'; //importando o componente header 
import Main from './pages/main';

const App = () => ( //arrow function de component
  <div className="App">
    <Header /> {/*mostrando em tela o conteudo de dentro do Header*/}
    <Routes /> {/*mostrando as rotas que direcionam pro main*/}
  </div>
);
 

export default App; //exportando tudo isso de dentro do meu App
