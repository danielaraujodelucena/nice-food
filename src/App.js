import { Provider } from 'react-redux';
import store from './store';

import Formulario from "./components/Formulario";
import Publicidade from "./components/Publicidade";
import Pedidos from "./components/Pedidos";


function App() {
  return (
    <div>
      <Provider store={store}>
        <Formulario />
        <Publicidade />
        <Pedidos />
      </Provider>
      
    </div>
  );
}

export default App;
