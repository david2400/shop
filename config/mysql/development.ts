export const config = {
  db: {
    type: process.env.DB_TYPE || 'mysql',
    synchronize: false,
    logging: true,
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Simonsito123',
    database: process.env.DB_NAME || 'storeWeb',
    autoLoadEntities: true,
  },
  individualHooks: true,
  foo: 'dev-bar',
}
