import React, { useContext,useState } from 'react';
import classes from './Description.module.css';
import image from '../../image/toma2.jpg';
import { ProductContext } from '../../context/ProductContext';
import { useLocation,useParams, Link } from 'react-router-dom';

const Description = (props) => {
    const location = useLocation();
    // console.log(location)
    const { product } = location;
    const { productDetails, addToCart, products } = useContext(ProductContext)
    // console.log(productDetails)
    const selectedProduct = products.find(item => item.id === product.id)
    // if (selectedProduct === 'undefined') {
    //     return null
    // }
    
    const {id, title, img, price, company, info} = product
    return (
        <div className={classes.Container}>
            <div className={classes.Wrapper}>
                <div className={classes.Title}>
                    <h3>{title}</h3>
                </div>
                <div className={classes.Description}>
                    <div className={classes.Image}>
                        <img src={img} alt=""/>
                    </div>
                    <div className={classes.Describe}>
                        <div className={classes.Model}>
                            <h2>Model: model</h2>
                        </div>
                        <div className={classes.Made}>
                            <p>made by:</p>
                            <div className={classes.Company}>{company}</div>
                        </div>
                        <div className={classes.Price}>
                            <div className={classes.Cost}>
                                <div className={classes.Amount}>Price:</div>
                                <div className={classes.Amt}>
                                    <span>$</span>
                                    <span>{price}</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.Info}>
                            <p>info about item:</p>
                        </div>
                        <div className={classes.Desc}>
                            {info}
                        </div>
                        <div className={classes.Btn}>
                            <Link to="/" style={{textDecoration:'none'}}>
                            <div className={classes.Back}>
                                <h4>Back</h4>
                            </div>
                            </Link>
                            {/* <div style={{cursor:product.inCart ? "not-allowed" : "pointer"}} className={classes.Add} onClick={()=>addToCart(product.id)}> */}
                            <div style={{pointerEvents:product.inCart ? "none" : "auto"}} className={classes.Add} onClick={()=>addToCart(id)}>
                            {/* <div style={{cursor:product.inCart ? "not-allowed" : "pointer"}} className={classes.Add} onClick={product.inCart ? ()=>addToCart() : ''}> */}
                                <h4>{product.inCart ? 'In Cart' : 'Add To Cart'}</h4>
                            </div>
                        </div>
                        <Link to='/cart' style={{textDecoration:'none'}}>
                            <h2 className={classes.Viewcart}>view cart</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;