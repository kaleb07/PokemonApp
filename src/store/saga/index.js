import {all, takeEvery, takeLatest} from 'redux-saga/effects';

import {Types as CharactersTypes} from '../duck/characters';
import {Types as ItemsTypes} from '../duck/items';

import {getCharactersRequest, getCharDetailRequest} from './characters';
import {getItemsRequest, getItemDetailRequest} from './items';

export default function* rootSaga() {
  return yield all([
    takeLatest(CharactersTypes.GET_CHARACTERS_REQUEST, getCharactersRequest),
    takeEvery(
      CharactersTypes.GET_CHARACTERS_LOADMORE_REQUEST,
      getCharactersRequest,
    ),
    takeLatest(
      CharactersTypes.GET_CHARACTERS_DETAIL_REQUEST,
      getCharDetailRequest,
    ),

    takeLatest(ItemsTypes.GET_ITEMS_REQUEST, getItemsRequest),
    takeEvery(ItemsTypes.GET_ITEMS_LOADMORE_REQUEST, getItemsRequest),
    takeLatest(ItemsTypes.GET_ITEMS_DETAIL_REQUEST, getItemDetailRequest),
  ]);
}
