import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
   host: '154.56.43.137',
 //  host: 'localhost',
  database: 'leads',
  password: 'Maissolidario2023@',
  port: 5432, // Porta padrão do PostgreSQL
});

export default pool;
