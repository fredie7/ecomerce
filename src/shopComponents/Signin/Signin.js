import React from 'react'
import classes from './Signin.module.css'

const Signin = () => {
    return (
        <>
          <div className={classes.Container}>
            <div className={classes.Wrapper}>
                {/* signup */}
                <input type="text" placeholder='enter email' className={classes.Signup}/>
                <input type="text" placeholder='enter password' className={classes.Signup}/>
                <div className={classes.Footer}>
                    <div className={classes.Btn}>
                        <p className={classes.BtnText}>signin</p>
                    </div>
                </div>
                <div className={classes.Foot}>
                    <div className={classes.Got}>
                        <p className={classes.GotText}>forgot password ?</p>
                    </div>
                    <div className={classes.Got}>
                        <p className={classes.GotText}>reset password</p>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Signin
