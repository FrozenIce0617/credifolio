import { createReducer } from '@reduxjs/toolkit';

import actions from './actions';

const initialState = {
  loading: false,
  error: null,
  company: [],
};

const reducer = createReducer(initialState, {
  [actions.searchCompanyRequest.type]: (state, action) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [actions.searchCompanySuccess.type]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    company: action.payload,
  }),
  [actions.searchCompanyFailed.type]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    company: [],
  }),
});

export default reducer;
