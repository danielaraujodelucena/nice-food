import React, { Component } from 'react';
import { connect } from "react-redux";

import Pedido from './Pedido';
class Pedidos extends Component {
    render(){
        return(
            <aside>
                <h1>Pedidos</h1>
                {this.props.pedidos.map((pedido, index) => (
                    <div key={index}>
                        <Pedido pedido={pedido}/>
                    </div>
                ))}

            </aside>
        )
    }
}

const mapStateToProps = (state) => ({
    pedidos: state.PedidoReducers.pedidos,
});


export default connect(mapStateToProps)(Pedidos);