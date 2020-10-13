import { createAction } from '@reduxjs/toolkit';

export default {
  searchCompanyRequest: createAction('SEARCH_COMPANY_REQUEST'),
  searchCompanySuccess: createAction('SEARCH_COMPANY_SUCCESS'),
  searchCompanyFailed: createAction('SEARCH_COMPANY_FAILED'),
};
