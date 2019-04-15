// Update with your config settings.



// const sleeperDBconnection = process.env.DATABASE_URL || localPgConnection
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
  },
  // production:{
  //   client: 'pg',
  //   connection: sleeperDBconnection,
  //   migrations: {
  //     directory: './data/migrations'
  //   } 
  // }
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
