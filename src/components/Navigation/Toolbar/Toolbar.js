import React from "react";
import classes from './Toolbar.module.sass';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from './Hamburger/Hamburger';

const toolbar = (props) => (
    <header className={classes.Toolbar}>

        <Hamburger visible={props.open} burgerClicked={props.menuClicked} >MENU</Hamburger>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;