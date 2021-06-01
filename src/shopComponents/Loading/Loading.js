import React from 'react'
import classes from './Loading.module.css'

const Loading = () => {
    return (
        <div className={classes.Loading}>
            {/* <p className={classes.Load}>loading............</p> */}
            <i class="fa fa-spinner fa-pulse fa-3x fa-fw fa-5x"></i>
            <span class="sr-only">Loading...</span>
        </div>
    )
}

export default Loading
