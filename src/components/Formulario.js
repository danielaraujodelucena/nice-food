import React, { Component } from 'react';

class Formulario extends Component {    
    render(){
        return(
            <>
                <h1>Cadastre o pedido</h1>
                <form>
                    <label>Selecione a mesa</label>
                    <select id="mesa">
                        <option value="Mesa 1">Mesa 1</option>
                        <option value="Mesa 2">Mesa 2</option>
                        <option value="Mesa 3">Mesa 3</option>
                    </select>

                    <label>Selecione os itens do pedido</label>

                    <label for="agua">Água</label>
                    <input type="checkbox" id="agua" name="item_pedido" value="Água" />

                    <label for="agua">Suco</label>
                    <input type="checkbox" id="suco" name="item_pedido" value="Suco" />
  
                    <label for="agua">Sanduíche</label>
                    <input type="checkbox" id="sanduiche" name="item_pedido" value="Sanduíche" />

                    <button type="submit">Fazer Pedido</button>
                </form>
            </>
        );
    }
}

export default Formulario;