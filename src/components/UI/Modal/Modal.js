import React, {Component} from "react";
import classes from './Modal.module.sass'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component{
    // This could be a functional component, doesnt have to be a class
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
       //console.log('[Modal] did update')
    }


    render() {
        let modalClasses = [classes.Modal, this.props.show ? classes.ShowModal : ''];

        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div

                    className={modalClasses.join(' ')}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
};


export default Modal;