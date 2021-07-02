import React, {useState} from 'react'
import classes from './Signin.module.css'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e)=> {
        e.preventDefault()
        const user = {email, password}
        console.log(user)

        try {
            const signinData = await fetch('http://localhost:9000/api/v1/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            const response = await signinData.json()
            console.log(response)
            if (response.error) {
                setError(response.error)
            } else {
                setError('')
                setEmail('')
                setPassword('')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
          <div className={classes.Container}>
            <div className={classes.Wrapper}>
                <div className="SetError">
                  <h3 className={classes.Error}>{error}</h3>
                </div>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='enter email' className={classes.Signup}/>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='enter password' className={classes.Signup}/>
                <div className={classes.Footer} onClick={e=>handleSubmit(e)}>
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
