import React,{pureComponent} from 'react';
import {Provider} from 'react-redux';
import createStore from 'redux';
import MainUi from './components/MainUi';

function App() {
  return (

    <div>
   
      <MainUi/>
      
    </div>
  );
}

export default App;
