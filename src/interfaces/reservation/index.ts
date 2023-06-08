import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { TableAvailabilityInterface } from 'interfaces/table-availability';

export interface ReservationInterface {
  id?: string;
  user_id: string;
  restaurant_id: string;
  table_availability_id: string;
  reservation_time: Date;
  status: string;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  table_availability?: TableAvailabilityInterface;
  _count?: {};
}
