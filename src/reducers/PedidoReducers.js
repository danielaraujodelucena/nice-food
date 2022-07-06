import { actionsTypes } from "../constants/pedido";
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
                anuncios: [...state.anuncios, { ...action.anuncio }],
            };
        case actionsTypes.REMOVER_PEDIDO:
            return{
                anuncios: state.anuncios.filter(a => a.id !== action.anuncio.id),
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
            console.log("reducer atualizar anúncio", action.anuncio);
            return {
                anuncios: state.anuncios.map(a => a.id !== action.anuncio.id ? a : action.anuncio),
            };
        default:
            return state;
    }
}

export default PedidoReducers;