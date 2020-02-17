import React from "react";
import classes from './Modal.module.sass'

const modal = (props) => {
    let modalClasses = [classes.Modal, props.show ? classes.ShowModal : ''];
    return(
        <div

            className={modalClasses.join(' ')}>
                {props.children}
        </div>
        )
};


export default modal;