import React, { useState, useContext, useRef, useEffect } from 'react';
import classes from './Navbar.module.css';
// import Overlay from '../Overlay/Overlay';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';
import {ProductContext} from '../../context/ProductContext';


const Navbar = () => {
    const searched = useRef('')
    const {products, setFilteredProducts} = useContext(ProductContext);
    const [toggle, setToggle] = useState(false)
    // const [toggleCart, setToggleCart] = useState(false)
    
    const handleSearch = e=> {
        const value = e.target.value.toLowerCase()
        let result = []
        result = products.filter(product=> product.title.search(value) !== -1)
        setFilteredProducts(result)
        if (value.length === 0) {
            return setFilteredProducts(null)
        }
    }
    // console.log(filteredProducts)

    const toggleNav = ()=> {
        // console.log( '======')
        setToggle(!toggle)
        console.log(!toggle, '======')
    }

    useEffect(()=> {
        searched.current.focus()
    },[])

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
                        <input className={classes.Searchinput} type="text" 
                            ref={searched} placeholder='search for an item'
                            onChange={e=>handleSearch(e)}
                        />
                    </div>
                </div>
                <div className={classes.Logo}>
                    <Link to="/Cart">
                        <div className={classes.Symbol}>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                    </Link>
                </div>
            </nav>

            <Sidebar toggle={toggle}/>
            
            {/* <Overlay /> */}
        </>
    )
}

export default Navbar;
