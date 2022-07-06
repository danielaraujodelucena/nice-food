import { actionsTypes } from "../constants";
import { mesas } from "../data";

const INITIAL_STATE = {
    mesas: [...mesas],
    selectedMesa: "",
}

const MesaReducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsTypes.MESA_SELECIONADA:
            return{
                ...state,
                selectedMesa: action.mesa,
            };
        default:
            return state;
    }
}

export default MesaReducers;