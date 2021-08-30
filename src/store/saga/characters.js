import {call, put} from 'redux-saga/effects';

import {Creators as CharactersActions} from '../duck/characters';

import api, {URI} from '../../service/api';

export function* getCharactersRequest(action) {
  try {
    const {offset, limit} = action.payload;
    const response = yield call(
      api.get,
      `${URI.CHAR}/?offset=${offset}&limit=${limit}`,
    );
    if (response) {
      yield put(CharactersActions.getCharactersSuccess(response.data));
    }
  } catch (err) {
    console.log('error', err);
    yield put(CharactersActions.getCharactersFailure(err.response));
  }
}

export function* getCharDetailRequest(action) {
  try {
    const {name} = action.payload;
    const response = yield call(api.get, `${URI.CHAR}/${name}`);
    if (response) {
      yield put(CharactersActions.getDetailCharSuccess(response.data));
    }
  } catch (err) {
    yield put(CharactersActions.getDetailCharFailure(err.response));
  }
}
