import * as yup from 'yup';
import { customerPreferenceValidationSchema } from 'validationSchema/customer-preferences';
import { reservationValidationSchema } from 'validationSchema/reservations';
import { tableAvailabilityValidationSchema } from 'validationSchema/table-availabilities';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
  customer_preference: yup.array().of(customerPreferenceValidationSchema),
  reservation: yup.array().of(reservationValidationSchema),
  table_availability: yup.array().of(tableAvailabilityValidationSchema),
});
