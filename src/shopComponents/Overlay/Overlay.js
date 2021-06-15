import React, {useContext} from 'react';
import classes from './Overlay.module.css';
import {ProductContext} from '../../context/ProductContext';

const Overlay = (props) => {
    const {toggle,toggleNav,setToggle,togNav} = useContext(ProductContext);
    // console.log(props.tog)
    return (
        <div className={classes.Overlay} onClick={togNav}>
            {/* style={{display: props.tog ? 'block' : 'none'}} */}
            <div className={classes.Logo}>
                {/* <h3>LOGO</h3> */}
            </div>
            <div className={classes.Startshopping}>
                {/* <h3>start shopping</h3> */}
            </div>
        </div>
    )
}

export default Overlay;