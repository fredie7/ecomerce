import React, { useContext } from 'react';
import classes from './Sidebar.module.css';
import {Link} from 'react-router-dom'
import image from '../../image/mall.png'
import Overlay from '../Overlay/Overlay';
import {ProductContext} from '../../context/ProductContext';



const Sidebar = (props) => {
    const {toggle,toggleNav,setToggle,togNav} = useContext(ProductContext);

    // const [toggle, settoggle] = useState(false)
    // console.log(props.toggle)
    return (
        <>
        <div className={classes.Side}  onClick={togNav}
        style={
            {
                // display: props.toggle ? 'block' : 'none',
                width: props.toggle ? '50%' : '0',
                opacity:props.toggle ?  '1' : '0',
                transition:props.toggle ?  '0.4s' : '0'
            }
        }>
            {/* <div className={classes.Sidecontent} style={{display: props.toggle ? 'block' : 'none'}}> */}
            <Link to='/' style={{textDecoration: 'none'}}>
                <div className={classes.Logo}>
                    <img src={image} alt=""/>
                </div>
            </Link>
            {/* <div className={classes.Firstcategory}>
                <div className={classes.Categories}>
                    <p>category 1</p>
                    <p>category 2</p>
                    <p>category 3</p>
                    <p>category 4</p>
                    <p>category 5</p>
                </div>
            </div> */}
            <div className={classes.Sidecontent}>
                <Link to='/signup' style={{textDecoration: 'none'}}>
                    <div className={classes.Firstitem}>
                        <p>signup</p>
                    </div>
                </Link>
                <Link to='/signin' style={{textDecoration: 'none'}}>
                    <div className={classes.Seconditem}>
                        <p>signin</p>
                    </div>
                </Link>
            </div>
            <div className={classes.Thirditem}>
                <p>logout</p>
            </div>
        </div>
        {
            props.toggle ? <Overlay /> : ''
        }
        </>
    )
}

export default Sidebar;