import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Restaurant Owner'];
  const roles = ['Restaurant Owner', 'Restaurant Owner', 'Waiter', 'Customer'];
  const applicationName = 'TableReserve v6';
  const tenantName = 'Restaurant';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Restaurant Owner:
1. As a restaurant owner, I want to create an account for my organization so that I can manage my restaurants on the platform.
2. As a restaurant owner, I want to add and manage multiple restaurants under my organization so that I can streamline table bookings for all my restaurants.
3. As a restaurant owner, I want to invite and manage {tenantRoles} for my organization so that they can help me manage my restaurants.
4. As a restaurant owner, I want to set and update table availability and capacity for each restaurant so that customers can book tables accordingly.
5. As a restaurant owner, I want to view and manage customer preferences for each restaurant so that I can provide a personalized experience to my customers.

{tenantRoles} (e.g., Restaurant Manager, Staff):
1. As a {tenantRole}, I want to view and manage table reservations for the restaurant I am assigned to so that I can ensure smooth operations.
2. As a {tenantRole}, I want to update table availability and capacity for the restaurant I am assigned to so that customers can book tables accordingly.
3. As a {tenantRole}, I want to view and manage customer preferences for the restaurant I am assigned to so that I can provide a personalized experience to our customers.

Customer:
1. As a customer, I want to search for available restaurants on the platform so that I can find a suitable place to dine.
2. As a customer, I want to view the table availability and capacity of a restaurant so that I can choose a suitable time for my reservation.
3. As a customer, I want to book a table at a restaurant so that I can secure my spot for dining.
4. As a customer, I want to update my preferences for a restaurant so that I can receive a personalized experience during my visit.
5. As a customer, I want to cancel or modify my table reservation so that I can make changes to my plans if needed.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
