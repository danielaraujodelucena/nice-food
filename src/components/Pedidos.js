import React, { Component } from 'react';
import { connect } from "react-redux";

//import PedidoActions from '../actions/PedidoActions';

class Pedidos extends Component {
    render(){
        return(
            <aside>
                <h1>Pedidos</h1>
                {this.props.pedidos.map((pedido, index) => (
                    <div key={index}>
                        <b>{pedido.mesa}</b>
                        <p>{pedido.itens}</p>
                    </div>
                ))}

            </aside>
        )
    }
}

const mapStateToProps = (state) => ({
    pedidos: state.PedidoReducers.pedidos,
});

const mapDispatchToProps = (dispatch) => ({
//    exibirDetalhes: (name, category) => dispatch(PedidoActions.visualizar(name, category)),
//    editarpedido: (pedido) => dispatch(PedidoActions.editar(pedido)),
//    removerpedido: (pedido) => dispatch(PedidoActions.remover(pedido)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pedidos);