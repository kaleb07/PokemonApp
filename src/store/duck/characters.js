import Immutable from 'seamless-immutable';

export const Types = {
  GET_CHARACTERS_REQUEST: 'char/GET_CHARACTERS_REQUEST',
  GET_CHARACTERS_SUCCESS: 'char/GET_CHARACTERS_SUCCESS',
  GET_CHARACTERS_FAILURE: 'char/GET_CHARACTERS_FAILURE',
  GET_CHARACTERS_LOADMORE_REQUEST: 'char/GET_CHARACTERS_LOADMORE_REQUEST',

  GET_CHARACTERS_DETAIL_REQUEST: 'item/GET_CHARACTERS_DETAIL_REQUEST',
  GET_CHARACTERS_DETAIL_SUCCESS: 'item/GET_CHARACTERS_DETAIL_SUCCESS',
  GET_CHARACTERS_DETAIL_FAILURE: 'item/GET_ITEMS_FAILURE',
};

const initialState = Immutable({
  loading: false,
  loadingDetail: false,
  error: false,
  listChar: [],
  detailChar: [],
  offset: 0,
  lastPage: false,
  loadMorechar: false,
  errorMessage: null,
});

export const Creators = {
  getCharactersRequest: payload => ({
    type: Types.GET_CHARACTERS_REQUEST,
    payload,
  }),
  getCharactersLoadMoreRequest: payload => ({
    type: Types.GET_CHARACTERS_LOADMORE_REQUEST,
    payload,
  }),
  getCharactersSuccess: payload => ({
    type: Types.GET_CHARACTERS_SUCCESS,
    payload,
  }),
  getCharactersFailure: payload => ({
    type: Types.GET_CHARACTERS_FAILURE,
    payload,
  }),

  getDetailCharRequest: payload => ({
    type: Types.GET_CHARACTERS_DETAIL_REQUEST,
    payload,
  }),
  getDetailCharSuccess: payload => ({
    type: Types.GET_CHARACTERS_DETAIL_SUCCESS,
    payload,
  }),
  getDetailCharFailure: payload => ({
    type: Types.GET_CHARACTERS_DETAIL_FAILURE,
    payload,
  }),
};

const pokemonChar = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CHARACTERS_REQUEST:
      return {
        ...state,
        listChar: [],
        offset: 0,
        loadMorechar: false,
        lastPage: false,
        loading: true,
        error: false,
      };
    case Types.GET_CHARACTERS_LOADMORE_REQUEST:
      return {
        ...state,
        offset: state.offset + action.payload.limit,
        loadMorechar: true,
        lastPage: false,
        error: false,
      };
    case Types.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        listChar: [...state.listChar, ...action.payload.results],
        offset: state.offset,
        lastPage: action.payload.next,
        loadMorechar: false,
        error: false,
        loading: false,
      };
    case Types.GET_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        loadMorechar: false,
        error: true,
        errorMessage: action.payload,
      };

    case Types.GET_CHARACTERS_DETAIL_REQUEST:
      return {
        ...state,
        loadingDetail: true,
        error: false,
        detailChar: [],
      };
    case Types.GET_CHARACTERS_DETAIL_SUCCESS:
      return {
        ...state,
        loadingDetail: false,
        detailChar: action.payload,
        error: false,
        errorMessage: null,
      };
    case Types.GET_CHARACTERS_DETAIL_FAILURE:
      return {
        ...state,
        loadingDetail: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonChar;
