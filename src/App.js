import { Provider } from 'react-redux';
import store from './store';

import Formulario from "./components/Formulario";
import Publicidade from "./components/Publicidade";
import Pedidos from "./components/Pedidos";
import Menu from "./components/Menu";
import Rodape from './components/Rodape';

function App() {
  return (
    
      <Provider store={store}>
        <div className='flexbox-container-header'>
          <Menu />
          <Publicidade />
        </div>

        <div className='flexbox-container-content'>
          <Formulario />
          <Pedidos />
        </div>

        <div className='flexbox-container-footer'>
          <Rodape />
        </div>
      </Provider>
  );
}

export default App;
