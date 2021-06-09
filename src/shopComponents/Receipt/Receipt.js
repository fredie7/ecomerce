import React, {useContext} from 'react'
import classes from './Receipt.module.css'
import {ProductContext} from '../../context/ProductContext'

const Receipt = () => {
    const { cart, cartTotalDetails } = useContext(ProductContext)
    const{ cartTotals } = cartTotalDetails

    const renderReceipt = cart.map(item => {
        const { title,price,total,count } = item
        return (
            <div className={classes.ReceiptDetail}>
                <p className={classes.Title}>{title}</p>
                <p className={classes.Price}><span>$</span>{price}</p>
                <p className={classes.Quantity}>{count}</p>
                <p className={classes.Amount}><span>$</span>{total}</p>
            </div> 
        )
    })
    return (
        <>
            <div className={classes.Container}>
                <div className={classes.ReceiptContainer}>
                    <h4 className={classes.Thanks}>thank you for your patronage!</h4>
                    <div className={classes.ReceiptDetail}>
                        {/* <p className={classes.Title}>Product(s)</p>
                        <p className={classes.Price}>Price</p>
                        <p className={classes.Quantity}>Quantity</p>
                        <p className={classes.Amount}>Amount</p> */}
                    </div>
                    <div className={classes.ReceiptData}>
                       {renderReceipt}
                        {/* <div className={classes.ReceiptDetail}>
                            <p className={classes.Title}>Lorem ipsuw</p>
                            <p className={classes.Price}><span>$</span>10</p>
                            <p className={classes.Quantity}>10</p>
                            <p className={classes.Amount}><span>$</span>10</p>
                        </div>
                        <div className={classes.ReceiptDetail}>
                            <p className={classes.Title}>Lorem ipsuw</p>
                            <p className={classes.Price}><span>$</span>10</p>
                            <p className={classes.Quantity}>10</p>
                            <p className={classes.Amount}><span>$</span>10</p>
                        </div>
                        <div className={classes.ReceiptDetail}>
                            <p className={classes.Title}>Lorem ipsuw</p>
                            <p className={classes.Price}><span>$</span>10</p>
                            <p className={classes.Quantity}>10</p>
                            <p className={classes.Amount}><span>$</span>10</p>
                        </div> */}
                    </div>
                    <div className={classes.Print}>
                        <h3>print receipt</h3>
                        <h3>total: {cartTotals.toFixed(2)}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Receipt
