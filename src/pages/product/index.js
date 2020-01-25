import React, { Component } from  'react';
import api from '../../services/api';

import './styles.css';

export default class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount(){
    const { id } = this.props.match.params; //destruturação para acessar o id que está na rota

    const response = await api.get(`/products/${id}`)

    this.setState({product: response.data}) //preenchendo os dados do produto no state com os dados do response
  }

  render() {
    const { product} = this.state; //renderiza as informações do produto em tela

    return (
      <div className='product-info'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
          URL: <a href={product.url}>{product.url}</a>
        </p>
      </div>
    )
  }
}