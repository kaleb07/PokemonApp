import {call, put} from 'redux-saga/effects';

import {Creators as ItemsActions} from '../duck/items';

import api, {URI} from '../../service/api';

console.log('api', api);

export function* getItemsRequest(action) {
  try {
    const {offset, limit} = action.payload;
    const response = yield call(
      api.get,
      `${URI.ITEM}/?offset=${offset}&limit=${limit}`,
    );
    if (response) {
      yield put(ItemsActions.getItemsSuccess(response.data));
    }
  } catch (err) {
    console.log('error', err);
    yield put(ItemsActions.getItemsFailure(err.response));
  }
}

export function* getItemDetailRequest(action) {
  try {
    const {name} = action.payload;
    const response = yield call(api.get, `${URI.ITEM}/${name}`);
    if (response) {
      yield put(ItemsActions.getDetailItemSuccess(response.data));
    }
  } catch (err) {
    yield put(ItemsActions.getDetailItemFailure(err.response));
  }
}
