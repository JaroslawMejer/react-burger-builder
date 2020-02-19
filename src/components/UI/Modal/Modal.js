import React from "react";
import classes from './Modal.module.sass'
import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
    let modalClasses = [classes.Modal, props.show ? classes.ShowModal : ''];
    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div

                className={modalClasses.join(' ')}>
                    {props.children}
            </div>
        </Aux>
        )
};


export default modal;