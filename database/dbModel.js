const { Pool } = require('pg');

const PG_URI = 'postgres://pqsrrofu:z7Scnkn94-BAMR4ZaT-6r_AHq0e3fxeh@kashin.db.elephantsql.com/pqsrrofu';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};