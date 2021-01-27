import React, { useEffect, useContext } from 'react';
import classes from './ProductItems.module.css';
import {ProductContext} from '../../../context/ProductContext';
import { useHistory } from 'react-router-dom';

const ProductItems = (props) => {
    const history = useHistory()
    const { addToCart } = props
    // const { products, setProducts, itemDetails } = useContext(ProductContext)
    // console.log(props.addToCart)
    console.log(props.products)
    console.log(props.cart)
    return (
        <>
            {
                props.products && props.products.map(product => {
                    const { id, img, price, title } = product;
                    return (
                        <div className={classes.ItemWrapper} key={id}
                        onClick={()=>{history.push({pathname:'/description', product:product})}}
                        >
                            <div className={classes.Image}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={classes.ProductDetails}>
                                <div className={classes.Cost}>
                                    <span>$</span>
                                    <span>{price}</span>
                                </div>
                                <div className={classes.Add} onClick={()=>addToCart(id)}>
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