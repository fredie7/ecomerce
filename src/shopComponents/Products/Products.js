import React, { useContext } from 'react';
import ProductItems from './ProductItems/ProductItems';
import Banner from '../Banner/Banner';
import classes from './Products.module.css';
import {ProductContext} from '../../context/ProductContext';

const Products = () => {
    const { products, setProducts, itemDetails } = useContext(ProductContext)
    return (
        <>
            <Banner />
            <div className={classes.Container}>
                <ProductItems products={products} handleDetails={itemDetails}/>
            </div>
        </>
    )
}

export default Products