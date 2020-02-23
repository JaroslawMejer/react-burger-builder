import React from "react";

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.sass'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, props.open ? classes.Open : classes.Close];


    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>

                <div className={classes.Logo}>
                    <Logo/>
                </div>

                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>

    );
};
export default sideDrawer;