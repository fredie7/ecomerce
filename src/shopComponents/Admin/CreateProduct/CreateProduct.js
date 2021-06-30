import React from 'react'
import classes from './CreateProduct.module.css'

const CreateProduct = () => {
    return (
        <>
          <div className={classes.Container}>
            <div className={classes.Wrapper}>
                {/* signup */}
                <input type="text" name='title' placeholder='enter title' className={classes.Signup}/>
                <input type="text" name='price' placeholder='enter price' className={classes.Signup}/>
                <input type="text" name='description' placeholder='enter description' className={classes.Signup}/>
                <input type="text" name='quantity' placeholder='enter quantity' className={classes.Signup}/>
                <input type="text" name='status' placeholder='add or inCart' className={classes.Signup}/>
                <input type="text" name='producedBy' placeholder='produced by' className={classes.Signup}/>
                <input type="text" name='count' value='1' className={classes.Signup}/>
                <input type="file" name='image' placeholder='upload image' className={classes.Signup}/>
                <div className={classes.Footer}>
                    <div className={classes.Btn}>
                        <p className={classes.BtnText}>create</p>
                    </div>
                </div>
                {/* <div className={classes.Foot}>
                    <div className={classes.Got}>
                        <p className={classes.GotText}>forgot password ?</p>
                    </div>
                    <div className={classes.Got}>
                        <p className={classes.GotText}>reset password</p>
                    </div>
                </div> */}
            </div>
          </div>
        </>
    )
}

export default CreateProduct
