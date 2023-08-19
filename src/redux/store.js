import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { contactsApi } from './contacts/contactsApiRTK';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);
