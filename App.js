import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Homepage from './components/HomePage';
import Informations from './components/Informations';

const App = () => {

  return (
    <Router>
      <Scene key="root" >
        <Scene key="homepage"
          component={Homepage}
          title="Homepage"
          initial
        />
        <Scene 
          key="infos"
          component={Informations}
          title="Informations"
        />
      </Scene>
    </Router>
  );

};

export default App;
