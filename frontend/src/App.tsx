import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlightList from './FlightList';
import './App.css';

interface Flight {
  id: number;
  departure_city: string;
  arrival_city: string;
  date: string;
  time: string;
  is_booked: boolean;
}

const App: React.FC = () => {
  const [flights, setFlights] = useState<{ available: Flight[]; booked: Flight[] }>({ available: [], booked: [] });
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction pour récupérer les vols disponibles
  const fetchFlights = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/flights');
      console.log('Données de vols récupérées:', response.data); // Log des données récupérées
      setFlights((prev) => ({
        ...prev,
        available: response.data,
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des vols disponibles:', error);
    }
  };

    // Function to fetch booked flights
  const fetchBookedFlights = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/bookedflights');
      console.log('Booked flights data:', response.data);
      setFlights((prev) => ({
        ...prev,
        booked: response.data,
      }));
    } catch (error) {
      console.error('Error fetching booked flights:', error);
    }
  };

  // Fonction pour réserver un vol
  const bookFlight = async (id: number) => {
    try {
      const response = await axios.post('http://localhost:5001/api/book', { id });
      console.log('Vol réservé:', response.data); // Log du vol réservé
      setFlights((prev) => ({
        available: prev.available.filter((flight) => flight.id !== id),
        booked: [...prev.booked, response.data],
      }));
    } catch (error) {
      console.error('Erreur lors de la réservation du vol:', error);
    }
  };

  // Fonction pour annuler une réservation
  const cancelFlight = async (id: number) => {
    try {
      const response = await axios.post('http://localhost:5001/api/cancel', { id });
      console.log('Réservation annulée:', response.data); // Log de la réservation annulée
      setFlights((prev) => ({
        available: [...prev.available, response.data],
        booked: prev.booked.filter((flight) => flight.id !== id),
      }));
    } catch (error) {
      console.error('Erreur lors de l\'annulation de la réservation:', error);
    }
  };

  // Charger les vols disponibles lors du chargement de la page
  useEffect(() => {
    fetchFlights();
    fetchBookedFlights();
  }, []);

  return (
    <div className="container">
      <h1>Welcome to the Flight Booking Application</h1>
      <p>Search, select, and book your flights easily.</p>

      <input
        type="text"
        placeholder="Search by departure or arrival city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="table-container">
        <FlightList
          flights={flights.available.filter(
            (flight) =>
              flight.departure_city.toLowerCase().includes(searchTerm.toLowerCase()) ||
              flight.arrival_city.toLowerCase().includes(searchTerm.toLowerCase())
          )}
          title="Available Flights"
          onBookFlight={bookFlight}
        />
        <FlightList
          flights={flights.booked}
          title="Booked Flights"
          onCancelFlight={cancelFlight}
        />
      </div>
    </div>
  );
};

export default App;
