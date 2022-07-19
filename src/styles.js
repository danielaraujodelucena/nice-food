import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${props => props.selectedColor};
        color: #fff;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 2rem;
    }

    h1{
        font-size: 1em;
        width: 100%;
    }

    .flexbox-container-header{
        display: flex;
        flex-direction:column;
        justify-content: center;
        flex-wrap: wrap;
    }

    .flexbox-container-content{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .flexbox-container-footer{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
`;

export const FormStyle = styled.div`
    align-self: stretch;
    flex-wrap: wrap;
    background-color: #C0C0C0;
`;

export const FormStyleLabel = styled.label`
    display: block;
`;

export const FormStyleSelect = styled.select`
    display: block;
    padding: 5px;
    width: 100%;
`;

export const FormStyleButton = styled.button`
    padding: 10px;
    background-color:tomato;
    color: #fff;
    border: 0ch;
`;

export const PedidosStyle = styled.div`
    flex-grow: 1;
    align-self: stretch;
`;

export const ListPedidosStyle = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const PedidoStyle = styled.div`
    padding: 20px;
    background-color:#C0C0C0;
    margin: 5px;
`;
