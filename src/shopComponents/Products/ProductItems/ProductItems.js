import React, { useEffect, useContext } from 'react';
import classes from './ProductItems.module.css';
import {ProductContext} from '../../../context/ProductContext';
import { Link } from 'react-router-dom';

const ProductItems = (props) => {
    // const { products, setProducts, itemDetails } = useContext(ProductContext)
    console.log(props.products)
    // console.log(props.handleDetails)
    return (
        <>
            {
                props.products && props.products.map(product => {
                    const { id, img, price, title } = product;
                    return (
                        <div className={classes.ItemWrapper} key={id}>
                            <div className={classes.Image}>
                                <Link to='/description'>
                                    <img src={img} alt=""/>
                                </Link>
                            </div>
                            <div className={classes.ProductDetails}>
                                <div className={classes.Cost}>
                                    <span>$</span>
                                    <span>{price}</span>
                                </div>
                                <div className={classes.Add}>
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                            </div>
                            <div className={classes.Price}>
                                <p>{title}</p>
                            </div>
                        </div>
                    )
                })
            }
         </>
    )
}

export default ProductItems;