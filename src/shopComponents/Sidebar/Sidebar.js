// import React, { useState } from 'react';
import classes from './Sidebar.module.css';
import {Link} from 'react-router-dom'
import image from '../../image/mall.png'

const Sidebar = (props) => {
    console.log(props.toggle)
    // const [toggle, settoggle] = useState(false)
    // console.log(props.toggle)
    return (
        <div className={classes.Side} 
        style={
            {
                // display: props.toggle ? 'block' : 'none',
                width: props.toggle ? '50%' : '0',
                opacity:props.toggle ?  '1' : '0',
                transition:props.toggle ?  '0.4s' : '0'
            }
        }>
            {/* <div className={classes.Sidecontent} style={{display: props.toggle ? 'block' : 'none'}}> */}
            <Link to='/'>
                <div className={classes.Logo}>
                    <img src={image} alt=""/>
                </div>
            </Link>
            <div className={classes.Sidecontent}>
                <Link to='/signup'>
                    <div className={classes.Firstitem}>
                        <p>signup</p>
                    </div>
                </Link>
                <Link to='/signin'>
                    <div className={classes.Seconditem}>
                        <p>signin</p>
                    </div>
                </Link>
            </div>
            <div className={classes.Thirditem}>
                <p>logout</p>
            </div>
        </div>
    )
}

export default Sidebar;