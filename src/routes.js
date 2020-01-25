import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
  <BrowserRouter> {/*define que ta utilizando as rotas através de browser*/}
    <Switch> {/*permite que apenas uma unica rota seja chamada ao mesmo tempo*/}
      <Route exact path="/" component = {Main} /> {/*quando eu acessa essa rota sem nada na url devo exibir o componente Main. Exact só chama o main quando o path for exatamente uma barra*/} 
      <Route path="/products/:id" component = {Product} />  {/*para passar parametro na url eu coloco : e parametro*/}
    </Switch> 
  </BrowserRouter>
)

export default Routes;