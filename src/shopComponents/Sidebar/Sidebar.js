// import React, { useState } from 'react';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    console.log(props.toggle)
    // const [toggle, settoggle] = useState(false)
    // console.log(props.toggle)
    return (
        <div className={classes.Side} 
        style={
            {
                width: props.toggle ? '50%' : '0',
                opacity:props.toggle ?  '1' : '0',
                transition:props.toggle ?  '0.4s' : '0'
            }
        }>
            {/* <div className={classes.Sidecontent} style={{display: props.toggle ? 'block' : 'none'}}> */}
            <div className={classes.Sidecontent}>
                <div className={classes.Firstitem}>
                    <p>signup</p>
                </div>
                <div className={classes.Seconditem}>
                    <p>signin</p>
                </div>
            </div>
            <div className={classes.Thirditem}>
                <p>logout</p>
            </div>
        </div>
    )
}

export default Sidebar;