import React from "react";
import classes from './Hamburger.module.sass'


const hamburger = (props) => (
    <div onClick={props.burgerClicked} className={[classes.Hamburger, props.visible ? classes.Change : null].join(' ')}>
        <div className={classes.Bar1}></div>
        <div className={classes.Bar2}></div>
        <div className={classes.Bar3}></div>
    </div>
);

export default hamburger;