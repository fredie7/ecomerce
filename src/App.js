import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Navbar from './shopComponents/Navbar/Navbar';
import Layout from './shopComponents/Layout/Layout';
import Cart from './shopComponents/Cart/Cart';
import Checkout from './shopComponents/CheckOut/CheckOut';
import Products from './shopComponents/Products/Products';
import Signup from './shopComponents/Signup/Signup';
import Signin from './shopComponents/Signin/Signin';
import Receipt from './shopComponents/Receipt/Receipt';
// import Modal from './shopComponents/Modal/Modal';
import CreateProduct from './shopComponents/Admin/CreateProduct/CreateProduct'
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
            <Route exact path='/description/:productId' component={Description} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/receipt' component={Receipt} />
            <Route exact path='/createProduct' component={CreateProduct} />
          </Layout>
        </Switch>
        {/* <Modal /> */}
      </ProductContext>
    </>
  );
}

export default App;
