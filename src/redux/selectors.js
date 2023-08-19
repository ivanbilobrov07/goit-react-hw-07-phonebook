import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilterByQuery = state => state.filter.query;

export const selectFilterByOption = state => state.filter.option;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterByOption, selectFilterByQuery],
  (contacts, option, query) => {
    let filteredContacts = [...contacts];

    switch (option) {
      case 'without': {
        break;
      }
      case 'ascending': {
        filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      }
      case 'descending': {
        filteredContacts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      }
      default:
        break;
    }

    return filteredContacts.filter(({ name }) =>
      name.toLowerCase().includes(query)
    );
  }
);
