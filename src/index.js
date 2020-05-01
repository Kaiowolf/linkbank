import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  //Fragment <> </> = Serve para incapsular mais de um component. Fica com uma sintaxe de JSX
  <>
  <StatusBar barStyle="light-content" backgroundColor="#52ae41"/>
  <Routes />
  </>
);

export default App;
