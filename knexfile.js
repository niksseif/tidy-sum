'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/tidysum',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
  },
  

  test: {
    client: 'pg',
    connection: 'postgres://localhost/tidysum_dv',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
  },
  

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
  },

};