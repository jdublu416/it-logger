import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {

  useEffect(()=> {
    //initializes materialize javaScript
    M.AutoInit();
  });
  
  return <div className='App'>My app</div>;
};

export default App;
