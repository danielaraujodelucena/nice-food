import { connect } from "react-redux";
import React, { Component } from 'react';

class Formulario extends Component {   
    state = {
        mesas: this.props.list_mesas,
        itens: ["Água", "Suco", "Sanduíche"],
    }

    render(){
        const cadastrarPedido = event => {
            event.preventDefault();

            console.log("Cadastrar");
        }
        return(
            <>
                <h1>Cadastre o pedido</h1>
                <form onSubmit={cadastrarPedido}>
                    <label>Selecione a mesa</label>
                    <select id="mesa">
                        { 
                            this.state.mesas.map(mesa => 
                                <option 
                                    value={mesa}
                                    onChange={event => this.setState({ mesa: event.target.value })}
                                >
                                    {mesa}
                                </option>) 
                        };
                    </select>

                    <label>Selecione os itens do pedido</label>

                    { 
                        this.state.itens.map(item => 
                            <label>
                                <input 
                                    type="checkbox" 
                                    name={item} 
                                    value={item} 
                                />
                                {item}
                            </label>) 
                    };

                    <button type="submit">Fazer Pedido</button>
                </form>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    list_mesas: state.MesaReducers.mesas,
});

export default connect(mapStateToProps)(Formulario);