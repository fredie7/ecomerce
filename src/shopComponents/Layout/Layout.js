import React, { useContext } from 'react';
import classes from './Layout.module.css';
import {ProductContext} from '../../context/ProductContext';
import Overlay from '../Overlay/Overlay';


const Layout = props => {
    const {toggle,toggleNav,setToggle,togNav} = useContext(ProductContext);
    return (
        <>
            <div className={classes.Layout} onClick={togNav}>
                { props.children }
            </div>
            {/* <Overlay /> */}
        </>
    )
}

export default Layout;