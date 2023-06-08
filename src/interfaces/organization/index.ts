import { RestaurantInterface } from 'interfaces/restaurant';
import { UserInterface } from 'interfaces/user';

export interface OrganizationInterface {
  id?: string;
  name: string;
  owner_id: string;
  restaurant?: RestaurantInterface[];
  user?: UserInterface;
  _count?: {
    restaurant?: number;
  };
}
