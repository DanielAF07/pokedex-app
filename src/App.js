import React from 'react'
import Header from './components/Header/Header'
//Redux
import { Provider } from 'react-redux'
import store from './store'
import PokemonBox from './components/Pokemon/PokemonBox'
import Modal from './components/Modal/Modal'
import Alert from './components/Alert/Alert'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Modal />
        <Header />
        <PokemonBox />
        <Alert />
      </Provider>
    </div>
  );
}

export default App;