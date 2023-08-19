import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import {
  getContacts,
  addContact,
  removeContact,
  editContact,
} from './contactsApiThunk';
import { successNotify } from 'utils';

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectedAction = action => {
  return action.type.endsWith('/rejected');
};

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfield = state => {
  state.isLoading = false;
  state.error = null;
};

const handleGetContactsFulfield = (state, { payload }) => {
  handleFulfield(state);
  state.items = payload;
};

const handleAddContactFulfield = (state, { payload }) => {
  handleFulfield(state);

  state.items.push(payload);

  successNotify(`New contact "${payload.name}" was successfully added`);
};

const handleRemoveContactFulfield = (state, { payload }) => {
  handleFulfield(state);

  const index = state.items.findIndex(i => i.id === payload.id);
  state.items.splice(index, 1);

  successNotify(`Contact "${payload.name}" was successfully deleted`);
};

const handleEditContactFulfield = (state, { payload }) => {
  handleFulfield(state);

  const index = state.items.findIndex(i => i.id === payload.id);

  successNotify(`Contact "${state.items[index].name}" was successfully edited`);
  state.items[index] = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, handleGetContactsFulfield)
      .addCase(addContact.fulfilled, handleAddContactFulfield)
      .addCase(removeContact.fulfilled, handleRemoveContactFulfield)
      .addCase(editContact.fulfilled, handleEditContactFulfield)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleReject);
  },

  // extraReducers: {
  //   [getContacts.pending]: handlePending,
  //   [getContacts.rejected]: handleReject,
  //   [getContacts.fulfilled]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = payload;
  //   },
  //   [addContact.pending]: handlePending,
  //   [addContact.rejected]: handleReject,
  //   [addContact.fulfilled]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(payload);
  //     toast.success(`New contact "${payload.name}" was successfully added`, {
  //       autoClose: 1500,
  //       theme: 'dark',
  //     });
  //   },
  //   [removeContact.pending]: handlePending,
  //   [removeContact.rejected]: handleReject,
  //   [removeContact.fulfilled]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.error = null;

  //     const index = state.items.findIndex(i => i.id === payload.id);
  //     state.items.splice(index, 1);
  //     toast.success(`Contact "${payload.name}" was successfully deleted`, {
  //       autoClose: 1500,
  //       theme: 'dark',
  //     });
  //   },
  //   [editContact.pending]: handlePending,
  //   [editContact.rejected]: handleReject,
  //   [editContact.fulfilled]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.erroe = null;

  //     const index = state.items.findIndex(i => i.id === payload.id);
  //     toast.success(
  //       `Contact "${state.items[index].name}" was successfully edited`,
  //       {
  //         autoClose: 1500,
  //         theme: 'dark',
  //       }
  //     );
  //     state.items[index] = payload;
  //   },
  // },
});

export const { reducer: contactsReducer } = contactsSlice;
