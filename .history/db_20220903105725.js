
const Connection = require('tedious').Connection
const Request = require('tedious').Request

const config = {
  server: 'slowsense.database.windows.net',
  options: {
    database: "ShapesTest"
  },
  authentication: {
    type: 'default',
    options: {
      userName: 'SlowSenseTest', // update me
      password: 'slow-test-55' // update me
    }
  }
}

const connection = new Connection(config)

connection.on('connect', (err) => {
  if (err) {
    console.log(err)
  } else {
    executeStatement()
  }
})

exports = connection;