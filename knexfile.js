'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/tidysum'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/tidysum_dv'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};