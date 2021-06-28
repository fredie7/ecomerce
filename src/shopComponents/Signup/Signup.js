import React from 'react'
import classes from './Signup.module.css'

const Signup = () => {
    return (
        <>
          <div className={classes.Container}>
            <div className={classes.Wrapper}>
                {/* signup */}
                <input type="text" placeholder='enter username' className={classes.Signup}/>
                <input type="text" placeholder='enter email' className={classes.Signup}/>
                <input type="text" placeholder='enter password' className={classes.Signup}/>
                <div className={classes.Footer}>
                    <div className={classes.Btn}>
                        <p className={classes.BtnText}>signup</p>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Signup
