// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    },
    useNullAsDefault:true,
    migrations:{
      directory:'./data/migrations'
    },
    seeds:{
      directory:'./data/seeds/dev'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds:{
      directory: './data/seeds/prod'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.sqlite3'
    },
    useNullAsDefault:true,
    migrations:{
      directory:'./data/migrations'
    },
    seeds:{
      directory:'./data/seeds/test'
    }
  },

};
