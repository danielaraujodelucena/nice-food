import { combineReducers } from "redux";
import PedidoReducers from "./PedidoReducers";
import MesaReducers from "./MesaReducers";
import ItemReducers from "./ItemReducers";

export default combineReducers({
    PedidoReducers,
    MesaReducers,
    ItemReducers,
});