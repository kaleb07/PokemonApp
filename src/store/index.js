import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';
import reducer from './duck';
import Reactotron from 'reactotron-react-native';

const initialState = {};
const sagaMonitor = __DEV__ ? Reactotron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

let middlewares = [];
middlewares.push(sagaMiddleware);

console.log(__DEV__ ? 'dev' : 'nope');

let middleware = applyMiddleware(...middlewares);

const enhancer = compose(middleware);

//const createAppropriateStore = __DEV__ ? Reactotron.createStore : createStore;
const store = createStore(reducer, initialState, enhancer);

sagaMiddleware.run(saga);

export default store;
