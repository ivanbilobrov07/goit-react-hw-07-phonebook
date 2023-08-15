import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import {
  getContacts,
  addContact,
  removeContact,
  editContact,
} from './contactsAPI';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  alert(123);
  console.log(1);
  console.log(payload);
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.rejected]: handleReject,
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleReject,
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [removeContact.pending]: handlePending,
    [removeContact.rejected]: handleReject,
    [removeContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.erroe = null;

      const index = state.items.findIndex(i => i.id === payload);
      state.items.splice(index, 1);
    },
    [editContact.pending]: handlePending,
    [editContact.rejected]: handleReject,
    [editContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.erroe = null;

      const index = state.items.findIndex(i => i.id === payload.id);
      state.items[index] = payload;
    },
  },
});

export const { reducer: contactsReducer } = contactsSlice;
