import React from 'react';
import { format } from 'date-fns';

interface Flight {
  id: number;
  departure_city: string;
  arrival_city: string;
  date: string;
  time: string;
  is_booked: boolean;
}

interface FlightListProps {
  flights: Flight[];
  title: string;
  onBookFlight?: (id: number) => void;
  onCancelFlight?: (id: number) => void;
}

const FlightList: React.FC<FlightListProps> = ({ flights, title, onBookFlight, onCancelFlight }) => {
  console.log(`${title} - Flight List:`, flights);

  return (
    <div style={{ margin: '20px', textAlign: 'left' }}>
      <h2>{title}</h2>
      <div className="scrollable-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Departure City</th>
              <th>Arrival City</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.id}</td>
                <td>{flight.departure_city}</td>
                <td>{flight.arrival_city}</td>
                <td>{format(new Date(flight.date), 'MMMM d, yyyy')}</td>
                <td>{flight.time}</td>
                <td>
                  {onBookFlight && (
                    <button onClick={() => onBookFlight(flight.id)}>Book</button>
                  )}
                  {onCancelFlight && (
                    <button onClick={() => onCancelFlight(flight.id)}>Cancel</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightList;
