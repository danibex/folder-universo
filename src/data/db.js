import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'leads',
  password: '323019',
  port: 5432, // Porta padrão do PostgreSQL
});

export default pool;
