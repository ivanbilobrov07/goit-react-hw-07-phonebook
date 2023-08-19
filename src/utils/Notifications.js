import { toast } from 'react-toastify';

export const errorNotify = text => {
  toast.error(text, {
    autoClose: 1500,
    theme: 'dark',
  });
};

export const successNotify = text => {
  toast.success(text, {
    autoClose: 1500,
    theme: 'dark',
  });
};
