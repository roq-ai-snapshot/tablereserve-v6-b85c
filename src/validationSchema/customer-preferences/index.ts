import * as yup from 'yup';

export const customerPreferenceValidationSchema = yup.object().shape({
  preference: yup.string().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
