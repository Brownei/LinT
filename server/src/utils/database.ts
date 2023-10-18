import mysql from 'mysql2';

export const databasePool = mysql.createPool({
  host: "localhost",
  port: 3001,
  user: "brownson",
  password: 'bonaventure5',
  database: 'lint',
}).promise();