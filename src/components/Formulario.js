import { connect } from "react-redux";
import React, { Component } from "react";
import PedidoActions from "../actions/PedidoActions";

class Formulario extends Component {   
    state = {
        mesas: this.props.list_mesas,
        itens: this.props.list_itens,
        selectedItens: [],
    }

    render(){
        const handleCheck = event => {
            let list = [ ...this.state.selectedItens ];

            if(event.target.checked){
                list = [ ...this.state.selectedItens, event.target.value ];
            }
            else{
                list.splice(this.state.selectedItens.indexOf(event.target.value), 1);
            }

            this.setState({selectedItens: list});
        }
        
        const cadastrarPedido = event => {
            event.preventDefault();

            const pedido = {
                id: new Date(),
                mesa: event.target.mesa.value,
                itens: this.state.selectedItens,
            };
    
            this.props.cadastrar(pedido);
            console.log("Cadastrar: ", pedido);
        }   

        return(
            <>
                <h1>Cadastre o pedido</h1>
                <form onSubmit={cadastrarPedido}>
                    <label>Selecione a mesa</label>
                    <select id="mesa">
                        { 
                            this.state.mesas.map((mesa, index) => 
                                <option 
                                    key={index}
                                    value={mesa}
                                    name="mesa"
                                >
                                    {mesa}
                                </option>) 
                        };
                    </select>

                    <label>Selecione os itens do pedido</label>

                    { 
                        this.state.itens.map((item, index) => 
                            <div key={index}>
                                <input 
                                    type="checkbox" 
                                    name="item" 
                                    value={item} 
                                    onChange={handleCheck}
                                />
                                {item}
                            </div>) 
                    };

                    <button type="submit">Fazer Pedido</button>
                </form>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    list_mesas: state.MesaReducers.mesas,
    list_itens: state.ItemReducers.itens,
});

const mapDispatchToProps = (dispatch) => ({
    cadastrar: (pedido) => dispatch(PedidoActions.adicionar(pedido)),
 });

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);