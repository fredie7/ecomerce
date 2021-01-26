import React from 'react'
import classes from './Cart.module.css';
import image from '../../image/toma2.jpg'

const Cart = () => {
    return (
        <>
            <div className={classes.Container}>
                <div className={classes.Wrapper}>
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
                </div>
            </div>
            
            <div className={classes.Basecontainer}>
                <div className={classes.Basewrapper}>
                    <div className={classes.Clearcart}>
                        <div className={classes.Clear}>
                            Clear Cart
                        </div>
                    </div>
                    <div className={classes.Subtotal}>
                        <div className={classes.Subtotall}>
                            <p>Subtotal :</p>
                            <span>$</span>
                            <p>10</p>
                        </div>
                    </div>
                    <div className={classes.Tax}>
                        <div className={classes.Taxx}>
                            <p>Tax :</p>
                            <span>$</span>
                            <p>10</p>
                        </div>
                    </div>
                    <div className={classes.Tottal}>
                        <div className={classes.Totttal}>
                            <p>Total :</p>
                            <span>$</span>
                            <p>10</p>
                        </div>
                    </div>
                    <div className={classes.Checkout}>
                        <div className={classes.Checkout}>
                            Checkout
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;