import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { PhonebookPageRTK } from 'pages/PhonebookPage_RTK';
import { PhonebookPageThunk } from 'pages/PhonebookPage_thunk';

import { Layout } from 'components/Layout';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="phonebook_thunk" element={<PhonebookPageThunk />} />
          <Route path="phonebook_RTK" element={<PhonebookPageRTK />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
