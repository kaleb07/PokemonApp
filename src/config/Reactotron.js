import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reactotron = Reactotron.configure({name: 'PokemonApp'})
  .useReactNative()
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

Reactotron.clear();
console.tron = Reactotron;

// console.reactotron = reactotron;

export default reactotron;
