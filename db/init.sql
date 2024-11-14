CREATE TABLE flights (
    id SERIAL PRIMARY KEY,
    departure_city VARCHAR(100) NOT NULL,
    arrival_city VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    is_booked BOOLEAN DEFAULT FALSE
);

-- Insert initial data into flights with is_booked set to FALSE
INSERT INTO flights (departure_city, arrival_city, date, time, is_booked) VALUES
('New York', 'Los Angeles', '2024-12-01', '15:00:00', FALSE),
('San Francisco', 'Chicago', '2024-12-05', '09:30:00', FALSE),
('London', 'Paris', '2024-12-10', '13:45:00', FALSE),
('Tokyo', 'Seoul', '2024-12-15', '10:00:00', FALSE),
('Sydney', 'Melbourne', '2024-12-20', '07:00:00', FALSE),
('Dubai', 'New York', '2024-12-22', '23:15:00', FALSE),
('Berlin', 'Rome', '2025-01-03', '08:20:00', FALSE),
('Miami', 'Atlanta', '2025-01-05', '11:00:00', FALSE),
('Toronto', 'Vancouver', '2025-01-10', '13:30:00', FALSE),
('Mexico City', 'Lima', '2025-01-15', '16:00:00', FALSE),
('Amsterdam', 'Berlin', '2025-01-20', '12:00:00', FALSE),
('Beijing', 'Shanghai', '2025-02-01', '18:00:00', FALSE),
('Los Angeles', 'San Francisco', '2025-02-03', '09:00:00', FALSE),
('Paris', 'Nice', '2025-02-07', '20:00:00', FALSE),
('Moscow', 'St. Petersburg', '2025-02-10', '14:00:00', FALSE),
('Madrid', 'Barcelona', '2025-02-14', '17:30:00', FALSE),
('Athens', 'Thessaloniki', '2025-02-18', '06:45:00', FALSE),
('Hong Kong', 'Bangkok', '2025-02-20', '15:30:00', FALSE),
('Singapore', 'Jakarta', '2025-02-25', '08:00:00', FALSE),
('Cape Town', 'Johannesburg', '2025-02-28', '10:30:00', FALSE);