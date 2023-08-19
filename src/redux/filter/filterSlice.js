import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  option: 'without',
};

const filterSlice = createSlice({
  name: 'filter',

  initialState,

  reducers: {
    setFilterQuery(state, { payload }) {
      state.query = payload;
    },
    setFilterOption(state, { payload }) {
      state.option = payload;
    },
  },
});

export const { setFilterQuery, setFilterOption } = filterSlice.actions;
export const { reducer: filterReducer } = filterSlice;
