import React, {Component} from "react";
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.sass';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
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
                <Toolbar open={this.state.showSideDrawer} menuClicked={this.sideDrawerOpenedHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )

    }

};

export default Layout;