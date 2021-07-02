import React, {useState} from 'react'
import classes from './CreateProduct.module.css'

const CreateProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')
    const [status, setStatus] = useState('')
    const [producedBy, setPoducedBy] = useState('')
    const [count, setCount] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = async (e)=> {
        e.preventDefault()
        
        let photo = new FormData()
        photo = photo.append('image', image)

        const product = { title,price,description,quantity,status,producedBy,count,photo }
        console.log(product)
        console.log(image.name)
       try {
        const productData = await fetch('http://localhost:9000/api/v1/createProduct', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        const response = await productData.json()
        console.log(response)
       } catch (error) {
           console.log(error)
       }
    }

    return (
        <>
          <div className={classes.Container}>
            <div className={classes.Wrapper}>
                {/* signup */}
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)} name='title' placeholder='enter title' className={classes.Signup}/>
                <input type="text" value={price} onChange={e=>setPrice(e.target.value)} name='price' placeholder='enter price' className={classes.Signup}/>
                <input type="text" value={description} onChange={e=>setDescription(e.target.value)} name='description' placeholder='enter description' className={classes.Signup}/>
                <input type="text" value={quantity} onChange={e=>setQuantity(e.target.value)} name='quantity' placeholder='enter quantity' className={classes.Signup}/>
                <input type="text" value={status} onChange={e=>setStatus(e.target.value)} name='status' placeholder='add or inCart' className={classes.Signup}/>
                <input type="text" value={producedBy} onChange={e=>setPoducedBy(e.target.value)} name='producedBy' placeholder='produced by' className={classes.Signup}/>
                <input type="text" value={count} onChange={e=>setCount(e.target.value)} name='count' className={classes.Signup} placeholder='enter 1' />
                <input type="file" onChange={e=>setImage(e.target.files[0])} name='image' placeholder='upload image' className={classes.Signup}/>
                <div className={classes.Footer} onClick={e=>handleSubmit(e)}>
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
