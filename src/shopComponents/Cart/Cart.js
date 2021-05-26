import React, { useContext } from 'react'
import classes from './Cart.module.css';
import image from '../../image/toma2.jpg';
import {ProductContext} from '../../context/ProductContext';
import {Link} from 'react-router-dom';

const Cart = () => {
    const {products, cart, cartTotalDetails, clearCart,removeProduct,increment,decrement} = useContext(ProductContext)
    // console.log(cart)
    const { cartCurrentTax,cartTax,cartTotals,subTotal } = cartTotalDetails
    
    const cartItems = cart.map(cartItem => {
        const{ id,title,img,price,total,count, } = cartItem
        return(
            <div key={id}>
                 <div className={classes.Wrapper}>
                    <div className={classes.Product}>
                        <div className={classes.Img}>
                            <img src={img} alt=""/>
                        </div>
                        <div className={classes.Title}>
                            <p>{title}</p>
                        </div>
                    </div>
                    <div className={classes.Chev}>
                        <div className={classes.Chevup} onClick={()=>increment(id)}>
                            <i class="fas fa-chevron-up" ></i>
                        </div>
                        <div className={classes.Chevdown} onClick={()=>decrement(id)}>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className={classes.Quantity}>
                        <div className={classes.Quant}>
                            <p>{count}</p>
                        </div>
                    </div>
                    <div className={classes.Price}>
                        <div className={classes.Cost}>
                            <span>$</span>
                            <p>{price}</p>
                        </div>
                    </div>
                    <div className={classes.Remove} onClick={()=>removeProduct(id)}>
                        <div className={classes.Rem}>
                            <i class="fas fa-trash"></i>
                            {/* <h3>remove</h3> */}
                        </div>
                    </div>
                    <div className={classes.Total}>
                        <div className={classes.Tot}>
                            <span>$</span>
                            <p>{total}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className={classes.Container}>
                {cartItems}
                {/* <div className={classes.Wrapper}>
                    <div className={classes.Product}>
                        <div className={classes.Img}>
                            <img src={image} alt=""/>
                        </div>
                        <div className={classes.Title}>
                            <p>title</p>
                        </div>
                    </div>
                    <div className={classes.Chev}>
                        <div className={classes.Chevup}>
                            <i class="fas fa-chevron-up"></i>
                        </div>
                        <div className={classes.Chevdown}>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className={classes.Quantity}>
                        <div className={classes.Quant}>
                            <p>10</p>
                        </div>
                    </div>
                    <div className={classes.Price}>
                        <div className={classes.Cost}>
                            <span>$</span>
                            <p>100</p>
                        </div>
                    </div>
                    <div className={classes.Remove}>
                        <div className={classes.Rem}>
                            <i class="fas fa-trash"></i>
                        </div>
                    </div>
                    <div className={classes.Total}>
                        <div className={classes.Tot}>
                            <span>$</span>
                            <p>200</p>
                        </div>
                    </div>
                </div> */}
            </div>
            
            <div className={classes.Basecontainer}>
                <div className={classes.Basewrapper}>
                    <div className={classes.Clearcart} onClick={()=>clearCart()}>
                        <div className={classes.Clear}>
                            Clear Cart
                        </div>
                    </div>
                    <div className={classes.Subtotal}>
                        <div className={classes.Subtotall}>
                            <p>Subtotal :</p>
                            <span>$</span>
                            <p>{subTotal}</p>
                        </div>
                    </div>
                    <div className={classes.Tax}>
                        <div className={classes.Taxx}>
                            <p>Tax :</p>
                            <span>$</span>
                            <p>{cartTax}</p>
                        </div>
                    </div>
                    <div className={classes.Tottal}>
                        <div className={classes.Totttal}>
                            <p>Total :</p>
                            <span>$</span>
                            <p>{cartTotals}</p>
                        </div>
                    </div>
                    <div className={classes.Checkout}>
                        <Link to="/checkout">
                        <div className={classes.Checkout}>
                            Checkout
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;