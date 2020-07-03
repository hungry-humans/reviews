const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  password: '7047',
  host: '172.17.0.2',
  database: 'yelp',
  port: 5432,
})

client.connect()

module.exports = client;
