import React from 'react'
import classes from './Signup.module.css'
import { Link } from 'react-router-dom'

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
                <div className={classes.Foot}>
                    <div className={classes.Got}>
                        <p className={classes.GotText}>got an account ?</p>
                    </div>
                    <Link to='/signin' className={classes.Link}>
                        <div className={classes.Got}>
                            <p className={classes.GotText}>signin</p>
                        </div>
                    </Link>
                </div>
            </div>
          </div>
        </>
    )
}

export default Signup
