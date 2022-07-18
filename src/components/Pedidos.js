import React, { Component } from 'react';
import { connect } from "react-redux";

import Pedido from './Pedido';
class Pedidos extends Component {
    render(){
        return(
            <div className="flex-item pedidos">
                <h1>Pedidos</h1>
                <div className='list-pedidos'>
                    {this.props.pedidos.map((pedido, index) => (
                        <div key={index}>
                            <Pedido pedido={pedido}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pedidos: state.PedidoReducers.pedidos,
});


export default connect(mapStateToProps)(Pedidos);