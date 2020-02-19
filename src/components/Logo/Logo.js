import burgerLogo from '../../assets/images/burger-logo.png';
import React from "react";
import classes from './Logo.module.sass'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} />
    </div>
);

export default logo;