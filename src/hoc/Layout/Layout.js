import React, {Component} from "react";
import { connect } from'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import styles from './Layout.module.sass';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false,
        scrolled: false,
    }

    handleScroll = () => {
        let scrollFromTop = window.pageYOffset;
        if(scrollFromTop > 20 && this.state.scrolled === false){
            this.setState({scrolled: true});
        } else if(scrollFromTop <= 20){
            this.setState({scrolled: false});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    };

    sideDrawerOpenedHandler = () =>{
        this.setState({showSideDrawer: true});
    };

    render () {
        return(
            <Aux>
                <Toolbar
                    open={this.state.showSideDrawer}
                    menuClicked={this.sideDrawerOpenedHandler}
                    scrolled={this.state.scrolled}
                    isAuth={this.props.isAuthenticated}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    isAuth={this.props.isAuthenticated}
                />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )

    }

};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);