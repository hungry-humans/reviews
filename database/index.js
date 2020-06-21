const { Client } = require('pg')

const client = new Client({
  user: 'me',
  host: 'localhost',
  database: 'yelp',
  password: '7047',
  port: 5432,
})

client.connect()

module.exports = client;
