import React, {useContext} from 'react';
import classes from './ProductItems.module.css';
import { useHistory } from 'react-router-dom';
import {ProductContext} from '../../../context/ProductContext';
import Loading from '../../Loading/Loading';

const ProductItems = (props) => {
    const { loading } = useContext(ProductContext)
    const history = useHistory()
    const { addToCart, products, filteredProducts } = props
    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    const productsToRender = filteredProducts || products
    return (
        <>
            {
                productsToRender && productsToRender.map(product => {
                    const { id, img, price, title, inCart } = product;
                    return (
                        <div className={classes.ItemWrapper} key={id}
                        onClick={()=>{history.push({pathname:`/description/${id}`, product:product})}}
                        >
                            <div className={classes.Image}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={classes.ProductDetails}>
                                <div className={classes.Cost}>
                                    <span>$</span>
                                    <span>{price}</span>
                                </div>
                                <div className={classes.Add} onClick={()=>addToCart(id)}>
                                    {/* <i className="fas fa-shopping-cart"></i> */}
                                    {inCart ? 'In Cart' : 
                                        <i className="fas fa-shopping-cart"></i>
                                    }
                                </div>
                            </div>
                            <div className={classes.Price}>
                                <p>{title}</p>
                            </div>
                        </div>
                    )
                })



                // products && products.map(product => {
                //     const { id, img, price, title, inCart } = product;
                //     return (
                //         <div className={classes.ItemWrapper} key={id}
                //         onClick={()=>{history.push({pathname:'/description', product:product})}}
                //         >
                //             <div className={classes.Image}>
                //                 <img src={img} alt=""/>
                //             </div>
                //             <div className={classes.ProductDetails}>
                //                 <div className={classes.Cost}>
                //                     <span>$</span>
                //                     <span>{price}</span>
                //                 </div>
                //                 <div className={classes.Add} onClick={()=>addToCart(id)}>
                //                     {/* <i className="fas fa-shopping-cart"></i> */}
                //                     {inCart ? 'In Cart' : 
                //                         <i className="fas fa-shopping-cart"></i>
                //                     }
                //                 </div>
                //             </div>
                //             <div className={classes.Price}>
                //                 <p>{title}</p>
                //             </div>
                //         </div>
                //     )
                // })
            }
         </>
    )
}

export default ProductItems;