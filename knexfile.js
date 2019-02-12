'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/tidy-sum'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/tidy-sum_dv'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};