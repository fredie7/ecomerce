import React, { useContext } from 'react';
import classes from './Description.module.css';
import { ProductContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

const Description = (props) => {
    let productId = parseInt(props.match.params.productId)
    const { addToCart,products } = useContext(ProductContext)
    const selectedProduct = products.find(item => item.id === productId) || {}
    const {id, title, img, price, company, info, inCart} = selectedProduct
        
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
                            <div style={{pointerEvents: inCart ? "none" : "auto"}} className={classes.Add} onClick={()=>addToCart(id)}>
                                <h4>{inCart ? 'In Cart' : 'Add To Cart'}</h4>
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