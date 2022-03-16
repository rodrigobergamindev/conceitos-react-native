import {View} from 'react-native';
import style from './components/First/style/style';
import React from 'react';

import Father from './components/Comunication/Father';

const App = () => {
  return (
    <View style={style.App}>
      <Father/>
    </View>
  );
};

export default App;
