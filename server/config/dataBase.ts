

const { Client } = require('pg')

const dbSync = async () => {
    const client = new Client()
    await client.connect()
}
