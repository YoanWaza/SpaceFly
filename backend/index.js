const express = require('express');
const cors = require('cors'); // Import du middleware CORS
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors()); // Utilise le middleware CORS pour autoriser toutes les origines
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

pool.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données', err.stack);
  } else {
    console.log('Connecté à la base de données');
  }
});

async function connectWithRetry() {
  try {
    await pool.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection failed, retrying in 5 seconds...', error);
    setTimeout(connectWithRetry, 5000);
  }
}

connectWithRetry();

// Routes de l'API
app.get('/api/flights', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM flights WHERE is_booked = false');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des vols disponibles.' });
  }
});

app.get('/api/bookedflights', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM flights WHERE is_booked = true');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des vols disponibles.' });
  }
});

app.post('/api/book', async (req, res) => {
  const { id } = req.body;
  try {
    const result = await pool.query(
      'UPDATE flights SET is_booked = true WHERE id = $1 RETURNING *',
      [id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la réservation du vol.' });
  }
});

app.post('/api/cancel', async (req, res) => {
  const { id } = req.body;
  try {
    const result = await pool.query(
      'UPDATE flights SET is_booked = false WHERE id = $1 RETURNING *',
      [id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l\'annulation de la réservation.' });
  }
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
