import React, { Component } from 'react';
import { connect } from "react-redux";

import PedidoActions from '../actions/PedidoActions';

class Pedido extends Component {
    componentDidMount() {
        console.log('Um pedido foi criado/renderizado');
    }

    componentWillUnmount(){
        console.log('Pedido está sendo removido');
    }

    render(){
        return(
            <>
                <b>{this.props.pedido.mesa}</b>
                <p>{this.props.pedido.itens}</p>
                <button onClick={() => this.props.removerPedido(this.props.pedido)}>Remover</button>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    removerPedido: (pedido) => dispatch(PedidoActions.remover(pedido)),
});

export default connect(null, mapDispatchToProps)(Pedido);
