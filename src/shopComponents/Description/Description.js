import React, { useContext } from 'react';
import classes from './Description.module.css';
import image from '../../image/toma2.jpg';
import { ProductContext } from '../../context/ProductContext';

const Description = (props) => {
    const { productDetails } = useContext(ProductContext)
    console.log(productDetails)
    return (
        <div className={classes.Container}>
            <div className={classes.Wrapper}>
                <div className={classes.Title}>
                    <h3>Title</h3>
                </div>
                <div className={classes.Description}>
                    <div className={classes.Image}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={classes.Describe}>
                        <div className={classes.Model}>
                            <h2>Model: model</h2>
                        </div>
                        <div className={classes.Made}>
                            <p>made by:</p>
                            <div className={classes.Company}>company</div>
                        </div>
                        <div className={classes.Price}>
                            <div className={classes.Cost}>
                                <div className={classes.Amount}>Price:</div>
                                <div className={classes.Amt}>
                                    <span>$</span>
                                    <span>20</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.Info}>
                            <p>info about item:</p>
                        </div>
                        <div className={classes.Desc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem?
                        </div>
                        <div className={classes.Btn}>
                            <div className={classes.Back}>
                                <h4>Back</h4>
                            </div>
                            <div className={classes.Add}>
                                <h4>Add to cart</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;