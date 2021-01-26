import React from 'react';
import classes from './Overlay.module.css';

const Overlay = () => {
    return (
        <div className={classes.Overlay}>
            <div className={classes.Logo}>
                <h3>LOGO</h3>
            </div>
            <div className={classes.Startshopping}>
                <h3>start shopping</h3>
            </div>
        </div>
    )
}

export default Overlay;