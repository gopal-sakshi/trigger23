const { Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "misc23",
  password: "1",
  port: 5432,
};

var postgresInterface = {}
let pgClient;

postgresInterface.connect = async function() {
    pgClient = new Client(credentials);
    await pgClient.connect();    
}

postgresInterface.execute = async function(query) {
  console.log('will execute query now');
  const result = await pgClient.query(query).then((data) => data.rows);
  console.log(result);
}

module.exports = postgresInterface;
// postgresInterface.connect();