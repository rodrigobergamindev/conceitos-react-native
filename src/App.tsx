import {View} from 'react-native';
import style from './components/First/style/style';
import React from 'react';

import MinMax from './components/MinMax/MinMax';

const App = () => {
  return (
    <View style={style.App}>
      <MinMax x={3} y={9} />
    </View>
  );
};

export default App;
