import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Homepage from './HomePage';

const App = () => {

  return (
    <Router>
      <Scene key="root" >
        <Scene key="homepage"
          component={Homepage}
          title="Homepage"
          initial
        />
      </Scene>
    </Router>
  );

};

export default App;
