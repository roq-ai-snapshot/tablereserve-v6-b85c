import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface CustomerPreferenceInterface {
  id?: string;
  user_id: string;
  restaurant_id: string;
  preference: string;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}
