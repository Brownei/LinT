require('dotenv').config();
import mysql from 'mysql2';

function getDatabaseVariables() {
  const host = process.env.MYSQL_HOST;
  const port = Number(process.env.MYSQL_PORT);
  const user = process.env.MYSQL_USER;
  const password = process.env.MYSQL_PASSWORD;
  const databaseName = process.env.MYSQL_DATABASE_NAME;

  if( !host || !port || !user || !password || !databaseName ) {
    throw new Error('No variables for the MYSQL database!');
  }

  return {
    host,
    port,
    user,
    password,
    databaseName,
  };
}

export const databasePool = mysql.createPool({
  host: getDatabaseVariables().host,
  port: getDatabaseVariables().port,
  user: getDatabaseVariables().user,
  password: getDatabaseVariables().password,
  database: getDatabaseVariables().databaseName,
}).promise();

// export async function database( query: string, values = [] ) {
//   const dbConnection = mysql.createConnection({
//     host: "localhost",
//     port: 3001,
//     user: "brownson",
//     password: 'bonaventure5',
//     database: 'lint',
//   });

//   try {
//     const [ results ] = await dbConnection.execute(query, values);
//     dbConnection.end();

//     return results;
//   } catch (error) {
//     return error;
//   }
// }