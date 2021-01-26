import React, { useState } from 'react';
import classes from './Navbar.module.css';
import Overlay from '../Overlay/Overlay';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
    const toggleNav = ()=> {
        console.log( '======')
        setToggle(!toggle)
        console.log(!toggle, '======')
    }

    return (
        <>
            <nav className={classes.Nav}>
                <div className={classes.Icon}>                                                                                                 
                    <div className={classes.Iconbar} onClick={()=>toggleNav()}>
                        <div className={classes.Navicon}></div>
                        <div className={classes.Navicon}></div>
                        <div className={classes.Navicon}></div>
                    </div>
                </div>
                <div className={classes.Search}>
                    <div className={classes.Searchbar}>
                        <input className={classes.Searchinput} type="text" placeholder='search for an item'/>
                    </div>
                </div>
                <div className={classes.Logo}>
                    <div className={classes.Symbol}>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                </div>
            </nav>

            <Sidebar toggle={toggle}/>
            
            {/* <Overlay /> */}
        </>
    )
}

export default Navbar;
