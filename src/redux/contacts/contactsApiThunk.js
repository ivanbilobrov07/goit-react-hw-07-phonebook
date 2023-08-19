import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://64d8bcfd5f9bf5b879ce839d.mockapi.io/api/v1';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (_) {
      return thunkAPI.rejectWithValue(
        'We can`t load your contacts, try again later '
      );
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', data);
      return response.data;
    } catch (_) {
      return thunkAPI.rejectWithValue(
        'Something went wrong when adding new contact'
      );
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (_) {
      return thunkAPI.rejectWithValue(
        'Something went wrong when deleting this contact'
      );
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${data.id}`, data);
      return response.data;
    } catch (_) {
      return thunkAPI.rejectWithValue(
        'Something went wrong when editing this contact'
      );
    }
  }
);
