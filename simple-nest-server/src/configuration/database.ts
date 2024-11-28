export const databaseConfig: DatabaseConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
};

export interface DatabaseConfig {
  type: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'oracle' | 'mssql';
  host: string;
  port: number;
  username: string;
  password: string;
}
