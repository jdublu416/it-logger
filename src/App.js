import React, { Fragment, useEffect } from 'react';
import './App.css';

//Redux imports
import {Provider} from 'react-redux'
import store from './store'

// Materialize imports
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

//Component imports
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'

const App = () => {
  useEffect(() => {
    //initializes materialize javaScript
    M.AutoInit();
  });

  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal/>
        <TechListModal/>
        <Logs />
      </div>
    </Fragment>
    </Provider>
  );
};

export default App;
