import React from 'react'; //para o jsx funcionar
import ReactDOM from 'react-dom'; //para o .render funcionar
import App from './App'; //importando o conteudo do meu app
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //renderizando o conteúdo do meu app e usando o id da div root

serviceWorker.unregister();
