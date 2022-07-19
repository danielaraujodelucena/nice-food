import { connect } from "react-redux";
import React, { Component } from "react";
import PedidoActions from "../actions/PedidoActions";

import { FormStyle, FormStyleLabel, FormStyleSelect, FormStyleButton } from "../styles";
class Formulario extends Component {   
    /*
        Montagem: quando o componente está sendo criado na DOM

            - constructor()
            - static getDerivedStateFromProps()
            - render()
            - componentDidMount()

        Atualização: quando o componente está sendo renderizado

            - static getDerivedStateFromProps()
            - shouldComponentUpdate()
            - render()
            - getSnapshotBeforeUpdate()
            - componentDidUpdate()

        Desmontagem: quando o componente está sendo removido da DOM (antes de removê-lo totalmente)

            - componentWillUnmount()

        Erros: quando existir erro em algum momento do ciclo de vida do componente

            - static getDerivedStateFromError()
            - componentDidCatch()
    */

    state = {
        mesas: this.props.list_mesas,
        itens: this.props.list_itens,
        selectedItens: [],
    }

    componentDidUpdate(){
        console.log('Formuário está sendo atualizado');
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
        }   

        return(
            <>
                <FormStyle>
                    <h1>Cadastre o pedido</h1>
                    <form onSubmit={cadastrarPedido} id="add-form">
                        <FormStyleLabel>Selecione a mesa</FormStyleLabel>
                        <FormStyleSelect id="mesa">
                            { 
                                this.state.mesas.map((mesa, index) => 
                                    <option 
                                        key={index}
                                        value={mesa}
                                        name="mesa"
                                    >
                                        {mesa}
                                    </option>) 
                            }
                        </FormStyleSelect>

                        <FormStyleLabel>Selecione os itens do pedido</FormStyleLabel>

                        { 
                            this.state.itens.map((item, index) => 
                                <div className="checkbox" key={index}>
                                    <input 
                                        type="checkbox" 
                                        name="item" 
                                        value={item} 
                                        onChange={handleCheck}
                                    />
                                    {item}
                                </div>) 
                        }

                        <FormStyleButton type="submit">Fazer Pedido</FormStyleButton>
                    </form>
                </FormStyle>
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