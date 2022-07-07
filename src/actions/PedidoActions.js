import { actionsTypes } from "../constants/";

const PedidoActions = {
    adicionar: pedido => ({
        type: actionsTypes.ADICIONAR_PEDIDO,
        pedido,
    }),
    remover: pedido => ({
        type: actionsTypes.REMOVER_PEDIDO,
        pedido,
    }), 
    visualizar: (name, category) => ({
        type: actionsTypes.PEDIDO_SELECIONADO,
        name,
        category,
    }),
    editar: pedido => ({
        type: actionsTypes.EDITAR_PEDIDO,
        pedido,
    }),
    atualizar: pedido => ({
        type: actionsTypes.ATUALIZAR_PEDIDO,
        pedido,
    }),
};

export default PedidoActions;