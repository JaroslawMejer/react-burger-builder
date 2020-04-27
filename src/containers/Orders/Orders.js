import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from "../../axios-orders";
import Order from '../../components/Order/Order'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner'
import {purchaseBurgerFail, purchaseBurgerSuccess} from "../../store/actions/order";


class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token);
    }


    render() {
        let orders = <Spinner/>;
        if(!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order
                    ingredients={order.ingredients}
                    price={order.price}
                    key={order.id}
                    delete={ () => this.props.onDeleteOrder(order.id)}
                />
            ))
        }
        return(
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token)),
        onDeleteOrder: (passedId) => dispatch(actions.deleteOrder(passedId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));