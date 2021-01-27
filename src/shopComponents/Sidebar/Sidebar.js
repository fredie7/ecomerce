import React, { useState } from 'react';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    // const [toggle, settoggle] = useState(false)
    console.log(props.toggle)
    return (
        <div className={classes.Side} >
            <div className={classes.Sidecontent} style={{display: props.toggle ? 'block' : 'none'}}>
                <div className={classes.Firstitem}>
                    <p>first item</p>
                </div>
                <div className={classes.Seconditem}>
                    <p>second item</p>
                </div>
                <div className={classes.Seconditem}>
                    <p>second item</p>
                </div>
                <div className={classes.Seconditem}>
                    <p>second item</p>
                </div>
                <div className={classes.Thirditem}>
                    <p>Third item</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;