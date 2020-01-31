import React, { Component } from 'react';
import api from '../../services/api'; //importando a configuração da api
import { Link } from  'react-router-dom'; //para redirecionar para outra pagina

import './styles.css';

export default class Main extends Component {
  state = { //conceito de estado do react
    products: [], //está guardando os produtos dentro desse array
    productInfo: {}, //armazena as informações de registro e pagina
    page: 1, //referencia a pagina que estamos no app
  };

  componentDidMount() { //uso se preciso executar uma função logo que o componente é exibido em tela
    this.loadProducts(); //para carregar os produtos
  };

  loadProducts = async (page = 1) => { //arrow function nao subscreve o valor do this. Iniciando o valor de pagina 1 
    const response = await api.get(`/products?page=${page}`)

    const { docs, ...productInfo} = response.data //pegando o que tá no docs e armazenando o resto no productInfo

    //para preencher a variavel products do state
    this.setState({ products: docs, productInfo, page }) //estou passando os dados do docs (array de produtos por pagina) e o ProductInfo sobre informações de paginas, e o novo valor da page
  };

  prevPage = () => { //função de voltar pra pagina anterior
    const { page, productInfo} = this.state; //pegando a pagina que estou e o productInfo
    if (page === 1) return; //verifico se pag atual é a 1, pq não tenho nenhuma pag abaixo de 1  
  
    const pageNumber = page - 1; //volta para a pagina anterior

    this.loadProducts(pageNumber);
  };

  nextPage = () => { //funçao de ir para a próxima página
    const { page, productInfo} = this.state; //pegando a pagina que estou e o productInfo

    //productInfo.pages verificar o numero de paginas total que tenho
    if (page === productInfo.pages) return; //verificando se a pagina que estou não é a ultima (= ao numero total de paginas). Se for eu retorno nada
  
    const pageNumber = page + 1; //variável que passa para a proxima pagina

    this.loadProducts(pageNumber); //recarrega os produtos da proxima pagina que entrei
  };

  //sempre que tiver uma variável no state o método render fica escutando ela e atualizando sozinho
  render () {
    const { products, page, productInfo } = this.state; //desestruturaçaõ p/ buscar a variavel products, o numero da paginas e o registro de numero de paginas

  //estou acessando os products dentro do estado e usando lenght para fazer uma contagem
    return (
      <div className="product-list">
        {products.map(product => ( //percorrendo o array de products com o map
          <article key={product._id}>
            <strong>{product.title}</strong> 
            <p>{product.description}</p>

            <Link to={`/products/${product._id}`}>Acessar</Link> {/*Redirecionando para a pagina do produto com o id do produto*/}
          </article> //primeiro item do map tem que ter uma key id para não dar erro
        ))}
        <div className="actions"> {/*Botão para navegar entre as paginas*/}
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button> {/*Quando clicar vai para a pagina anterior. Está desabilitado se a pagina for 1*/}
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button> {/*Botão para a proxima pagina. Está desabilitado quando a pagina for a ultima*/}
        </div>
      </div>
    );
  };
};