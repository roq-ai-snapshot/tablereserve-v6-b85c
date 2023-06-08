import * as yup from 'yup';
import { reservationValidationSchema } from 'validationSchema/reservations';

export const tableAvailabilityValidationSchema = yup.object().shape({
  capacity: yup.number().integer().required(),
  available_tables: yup.number().integer().required(),
  restaurant_id: yup.string().nullable().required(),
  reservation: yup.array().of(reservationValidationSchema),
});
