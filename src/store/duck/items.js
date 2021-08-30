import Immutable from 'seamless-immutable';

export const Types = {
  GET_ITEMS_REQUEST: 'item/GET_ITEMS_REQUEST',
  GET_ITEMS_SUCCESS: 'item/GET_ITEMS_SUCCESS',
  GET_ITEMS_FAILURE: 'item/GET_ITEMS_FAILURE',
  GET_ITEMS_LOADMORE_REQUEST: 'item/GET_ITEMS_LOADMORE_REQUEST',

  GET_ITEMS_DETAIL_REQUEST: 'item/GET_ITEMS_DETAIL_REQUEST',
  GET_ITEMS_DETAIL_SUCCESS: 'item/GET_ITEMS_DETAIL_SUCCESS',
  GET_ITEMS_DETAIL_FAILURE: 'item/GET_ITEMS_FAILURE',
};

const initialState = Immutable({
  loading: false,
  loadingDetail: false,
  error: false,
  listItem: [],
  detailItem: [],
  offset: 0,
  lastPage: false,
  loadMoreItem: false,
  errorMessage: null,
});

export const Creators = {
  getItemsRequest: payload => ({
    type: Types.GET_ITEMS_REQUEST,
    payload,
  }),
  getItemsLoadMoreRequest: payload => ({
    type: Types.GET_ITEMS_LOADMORE_REQUEST,
    payload,
  }),
  getItemsSuccess: payload => ({
    type: Types.GET_ITEMS_SUCCESS,
    payload,
  }),
  getItemsFailure: payload => ({
    type: Types.GET_ITEMS_FAILURE,
    payload,
  }),

  getDetailItemRequest: payload => ({
    type: Types.GET_ITEMS_DETAIL_REQUEST,
    payload,
  }),
  getDetailItemSuccess: payload => ({
    type: Types.GET_ITEMS_DETAIL_SUCCESS,
    payload,
  }),
  getDetailItemFailure: payload => ({
    type: Types.GET_ITEMS_DETAIL_FAILURE,
    payload,
  }),
};

const pokemonItem = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ITEMS_REQUEST:
      return {
        ...state,
        listItem: [],
        offset: 0,
        loadMoreItem: false,
        lastPage: false,
        loading: true,
        error: false,
      };
    case Types.GET_ITEMS_LOADMORE_REQUEST:
      return {
        ...state,
        offset: state.offset + action.payload.limit,
        loadMoreItem: true,
        lastPage: false,
        error: false,
      };
    case Types.GET_ITEMS_SUCCESS:
      return {
        ...state,
        listItem: [...state.listItem, ...action.payload.results],
        offset: state.offset,
        lastPage: action.payload.next,
        loadMoreItem: false,
        error: false,
        loading: false,
      };
    case Types.GET_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        loadMoreItem: false,
        error: true,
        errorMessage: action.payload,
      };

    case Types.GET_ITEMS_DETAIL_REQUEST:
      return {
        ...state,
        loadingDetail: true,
        error: false,
        detailItem: [],
      };
    case Types.GET_ITEMS_DETAIL_SUCCESS:
      return {
        ...state,
        loadingDetail: false,
        detailItem: action.payload,
        error: false,
        errorMessage: null,
      };
    case Types.GET_ITEMS_DETAIL_FAILURE:
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

export default pokemonItem;
