import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import actions from './actions';
import axiosInstance from '../../helpers/apiHelper';

export function* searchCompany() {
  yield takeEvery(actions.searchCompanyRequest.type, function* ({
    payload: searchQuery,
  }) {
    try {
      console.log('QUERY - ', searchQuery);
      const url = `Companies/search?searchTerm=${searchQuery}`;
      const res = yield call(axiosInstance.get, url);
      yield put(actions.searchCompanySuccess(res.data));
    } catch (err) {
      yield put(actions.searchCompanyFailed(err));
    }
  });
}

export default function* searchSaga() {
  yield all([fork(searchCompany)]);
}
