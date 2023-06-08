import { CustomerPreferenceInterface } from 'interfaces/customer-preference';
import { ReservationInterface } from 'interfaces/reservation';
import { TableAvailabilityInterface } from 'interfaces/table-availability';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';

export interface RestaurantInterface {
  id?: string;
  name: string;
  user_id: string;
  organization_id: string;
  customer_preference?: CustomerPreferenceInterface[];
  reservation?: ReservationInterface[];
  table_availability?: TableAvailabilityInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    customer_preference?: number;
    reservation?: number;
    table_availability?: number;
  };
}
