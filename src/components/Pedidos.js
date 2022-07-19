import React, { Component } from 'react';
import { connect } from "react-redux";

import Pedido from './Pedido';
import { PedidosStyle, ListPedidosStyle } from '../styles';
class Pedidos extends Component {
    render(){
        return(
            <PedidosStyle className='flex-item'>
                <h1>Pedidos</h1>
                <ListPedidosStyle>
                    {this.props.pedidos.map((pedido, index) => (
                        <div key={index}>
                            <Pedido pedido={pedido}/>
                        </div>
                    ))}
                </ListPedidosStyle>
                
            </PedidosStyle>

        )
    }
}

const mapStateToProps = (state) => ({
    pedidos: state.PedidoReducers.pedidos,
});


export default connect(mapStateToProps)(Pedidos);