import { Provider } from 'react-redux';
import store from './store';

import Formulario from "./components/Formulario";
import Publicidade from "./components/Publicidade";
import Pedido from "./components/Pedido";


function App() {
  return (
    <div>
      <Provider store={store}>
        <Formulario />
        <Publicidade />
        <Pedido />
      </Provider>
      
    </div>
  );
}

export default App;
