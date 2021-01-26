import React from 'react';
import classes from './Banner.module.css';
import image from '../../image/toma2.jpg';

const Banner = () => {
    return (
        <div className={classes.Banner}>
            <img src={image} alt=""/>
        </div>
    )
}

export default Banner;