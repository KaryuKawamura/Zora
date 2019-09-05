// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "exercise",
      user: "noelwat",
      password: "noel123"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "exercise",
      user: "noelwat",
      password: "noel123"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "exercise",
      user: "noelwat",
      password: "noel123"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
