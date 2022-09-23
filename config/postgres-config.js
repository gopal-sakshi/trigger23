const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "misc23",
  password: "1",
  port: 5432,
};

var postgresInterface = {}

postgres.connect = async function(dbName) {
    var config = {
        ...credentials,
        database: dbName,
        password: 1
    }
    const pgClient = new Client(config);
    await pgClient.connect();
}

module.exports = postgresInterface;