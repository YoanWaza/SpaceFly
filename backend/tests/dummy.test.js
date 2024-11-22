// const { Pool } = require('pg');

// describe('Database Connection', () => {
//   let pool;

//   beforeAll(() => {
//     pool = new Pool({
//       host: process.env.DB_HOST || 'localhost',
//       port: process.env.DB_PORT || 5432,
//       user: process.env.DB_USER || 'postgres',
//       password: process.env.DB_PASSWORD || 'postgres',
//       database: process.env.DB_NAME || 'flight_booking',
//     });
//   });

//   afterAll(() => {
//     pool.end();
//   });

//   test('should connect to the database', async () => {
//     const res = await pool.query('SELECT 1');
//     expect(res.rowCount).toBe(1);
//   });
// });
test('Dummy test', () => {
    expect(1 + 1).toBe(2);
  });