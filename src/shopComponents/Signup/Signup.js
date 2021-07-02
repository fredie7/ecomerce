import React, {useState} from 'react'
import classes from './Signup.module.css'
import { Link } from 'react-router-dom'


const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const handleSubmit = async (e)=> {
        e.preventDefault()
        const user = {name,email, password}
        try {
            const postData = await fetch('http://localhost:9000/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                     Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            const response = await postData.json()
            if (response.error) {
                setError(response.error)
            } else {
                setName('')
                setEmail('')
                setPassword('')
            }
            console.log(response)
            console.log(response.error)
            return response
            
        } catch (error) {
            console.log(error)
        }
    }
            


    return (
        <>
          <div className={classes.Container}>
          <form className={classes.Wrapper}>
              <div className="SetError">
                  <h3 className={classes.Error}>{error}</h3>
              </div>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='enter username' className={classes.Signup}/>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder='enter email' className={classes.Signup}/>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='enter password' className={classes.Signup}/>
                <div className={classes.Footer} onClick={e=>handleSubmit(e)}>
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
            </form>
          </div>
        </>
    )
}

export default Signup
