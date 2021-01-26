import React from 'react';
import classes from './Modal.module.css';
import image from '../../image/toma2.jpg';

const Modal = props => {
    return (
        <div>
            <div className={classes.Container}>
                <div className={classes.Wrapper}>
                    <div className={classes.Incart}>
                        <h3>In Cart</h3>
                    </div>
                    <div className={classes.Img}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={classes.Title}>
                        <p>title</p>
                    </div>
                    <div className={classes.Price}>
                        <p>price</p>
                    </div>
                    <div className={classes.Continue}>
                        <p>continue shopping</p>
                    </div>
                    <div className={classes.Cart}>
                        Go to cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;