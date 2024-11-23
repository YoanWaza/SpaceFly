import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlightList from './FlightList';

test('renders flight list with booking and cancel actions', () => {
  const flights = [
    {
      id: 1,
      departure_city: 'New York',
      arrival_city: 'London',
      date: '2024-11-25',
      time: '10:00:00',
      is_booked: false,
    },
    {
      id: 2,
      departure_city: 'Paris',
      arrival_city: 'Tokyo',
      date: '2024-11-26',
      time: '14:00:00',
      is_booked: true,
    },
  ];

  const onBookFlight = jest.fn();
  const onCancelFlight = jest.fn();

  render(
    <FlightList
      flights={flights}
      title="Available Flights"
      onBookFlight={onBookFlight}
      onCancelFlight={onCancelFlight}
    />
  );

  // Verify title is rendered
  expect(screen.getByText('Available Flights')).toBeInTheDocument();

  // Verify flight details are rendered
  expect(screen.getByText('New York')).toBeInTheDocument();
  expect(screen.getByText('London')).toBeInTheDocument();
  expect(screen.getByText('November 25, 2024')).toBeInTheDocument();
  expect(screen.getByText('10:00:00')).toBeInTheDocument();

  expect(screen.getByText('Paris')).toBeInTheDocument();
  expect(screen.getByText('Tokyo')).toBeInTheDocument();
  expect(screen.getByText('November 26, 2024')).toBeInTheDocument();
  expect(screen.getByText('14:00:00')).toBeInTheDocument();

  // Verify "Book" buttons
  const bookButtons = screen.getAllByText('Book');
  fireEvent.click(bookButtons[0]); // Click the first "Book" button
  expect(onBookFlight).toHaveBeenCalledWith(1);

  // Verify "Cancel" buttons
  const cancelButtons = screen.getAllByText('Cancel');
  fireEvent.click(cancelButtons[1]); // Click the second "Cancel" button
  expect(onCancelFlight).toHaveBeenCalledWith(2);
});
