const mapping: Record<string, string> = {
  'customer-preferences': 'customer_preference',
  organizations: 'organization',
  reservations: 'reservation',
  restaurants: 'restaurant',
  'table-availabilities': 'table_availability',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
