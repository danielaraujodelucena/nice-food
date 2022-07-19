import React, { Component } from 'react';
import { connect } from "react-redux";

import PedidoActions from '../actions/PedidoActions';
import { PedidoStyle } from '../styles';

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
                <PedidoStyle className='flex-item'>
                    <b>{this.props.pedido.mesa}</b>
                    <p>{this.props.pedido.itens}</p>
                    <button onClick={() => this.props.removerPedido(this.props.pedido)}>Remover</button>
                </PedidoStyle>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    removerPedido: (pedido) => dispatch(PedidoActions.remover(pedido)),
});

export default connect(null, mapDispatchToProps)(Pedido);
