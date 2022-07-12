import { actionsTypes } from "../constants";
import { itens } from "../data";

const INITIAL_STATE = {
    itens: [...itens],
    selectedItens: [],
}

const ItemReducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsTypes.ITENS_SELECIONADOS:
            return{
                ...state,
                selectedItens: action.item,
            };
        default:
            return state;
    }
}

export default ItemReducers;