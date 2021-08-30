import {combineReducers} from 'redux';

import pokemonChar from './characters';
import pokemonItem from './items';

export default combineReducers({
  pokemonChar,
  pokemonItem,
});
