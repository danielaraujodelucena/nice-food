import { actionsTypes } from "../constants";
import { pedidos } from "../data";

const INITIAL_STATE = {
    pedidos: [...pedidos],
    selectedName: null,
    selectedCategory: null,
    anunc: null,
}

const PedidoReducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsTypes.ADICIONAR_PEDIDO: 
            return{ 
                pedidos: [...state.pedidos, { ...action.anuncio }],
            };
        case actionsTypes.REMOVER_PEDIDO:
            return{
                pedidos: state.pedidos.filter(a => a.id !== action.anuncio.id),
            };
        case actionsTypes.PEDIDO_SELECIONADO:
            return{
                ...state,
                selectedName: action.name,
                selectedCategory: action.category,
            };
        case actionsTypes.EDITAR_PEDIDO:
            return {
                ...state, 
                anunc: action.anuncio,
            };
        case actionsTypes.ATUALIZAR_PEDIDO:
            return {
                pedidos: state.pedidos.map(a => a.id !== action.anuncio.id ? a : action.anuncio),
            };
        default:
            return state;
    }
}

export default PedidoReducers;