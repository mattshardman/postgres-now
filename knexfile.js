const dotEnv = require("dotenv");
dotEnv.config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.POSTGRES_DEV_URL,
    migrations:{
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: process.env.POSTGRES_PROD_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations:{
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    useNullAsDefault: true
  }

};
