import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import { Loading } from './components/molecule';
import store from './redux/store';
import MyStack from './routes';

const MyApp = () => {
  const {isLoading} = useSelector((state) => state.globalReducer)
  return (
    <NavigationContainer>
      <MyStack />
      {isLoading && <Loading/>}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
};

export default App;
