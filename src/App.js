import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from './shopComponents/Navbar/Navbar';
import Layout from './shopComponents/Layout/Layout';
import Cart from './shopComponents/Cart/Cart';
import Products from './shopComponents/Products/Products';
import Modal from './shopComponents/Modal/Modal';
import Description from './shopComponents/Description/Description';
import ProductContext from './context/ProductContext';

function App() {
  return (
    <>
      <ProductContext>
        <Navbar />
        <Switch>
          <Layout>
            <Route exact path='/' component={Products} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/description' component={Description} />
          </Layout>
        </Switch>
        {/* <Modal /> */}
      </ProductContext>
    </>
  );
}

export default App;
