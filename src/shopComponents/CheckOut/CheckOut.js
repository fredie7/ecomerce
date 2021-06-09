import React from 'react'
import classes from './CheckOut.module.css'
import {ProductContext} from '../../context/ProductContext'
import {Link} from 'react-router-dom'


const CheckOut = () => {
    const {cartTotalDetails} = React.useContext(ProductContext)
    const{ cartTotals } = cartTotalDetails
    return (
        <>
            <h4 className={classes.Pay}>PROCEED TO MAKE PAYMENT</h4>
                <div className={classes.FormContainer}>
                    <div className={classes.Wrapper}>
                    <div className={classes.Total}>
                    </div>
                    <div className={classes.Formwrapper}>
                        <h3 className={classes.TotalPrice}>TOTAL AMOUNT: <span>$</span>{cartTotals.toFixed(2)}</h3>
                        <h3 className={classes.Detail}>credit card details</h3>
                        <div className={classes.Card}>
                            <div className={classes.Cardholder}>
                                <p>card holder</p>
                            </div>
                            <div className={classes.Expirydate}>
                                <p>expiry date</p>
                            </div>
                        </div>
                        
                        <div className={classes.Cardinput}>
                            <div className={classes.Cardholderinput}>
                                <input type="text" placeholder="card holder"/>
                            </div>
                            <div className={classes.Expirydateinput}>
                                <div className={classes.Exp}>
                                    <input type="text" placeholder="MM"/> <span><h3>/</h3></span>
                                    <input type="text" placeholder="YY"/>
                                </div>
                            </div>
                        </div>

                        <div className={classes.Cardnumber}>
                            <div className={classes.Cardnum}>
                                <p>card number</p>
                            </div>
                            <div className={classes.Cvc}>
                                <p>cvc</p>
                            </div>
                        </div>

                        <div className={classes.Cardhold}>
                            <div className={classes.Cardholdinput}>
                                <input type="text" placeholder="card number"/>
                            </div>
                            <div className={classes.Cardholdcvcinput}>
                                <input type="text" placeholder="CVC"/>
                            </div>
                        </div>

                        <Link to='/receipt'><p className={classes.Proceed}>proceed</p></Link>

                        </div>
                    </div>
                </div>
        </>
    )
}

export default CheckOut
