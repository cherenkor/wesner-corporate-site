import * as Yup from 'yup';

const REQUIRED_ERROR_MESSAGE = 'Field is required';

export const validation = Yup.object().shape({
  name: Yup.string().trim().required(REQUIRED_ERROR_MESSAGE),
  email: Yup.string().trim().required(REQUIRED_ERROR_MESSAGE),
  company: Yup.string().trim().required(REQUIRED_ERROR_MESSAGE),
  message: Yup.string().trim().required(REQUIRED_ERROR_MESSAGE),
});
